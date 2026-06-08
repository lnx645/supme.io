package services

import (
	"encoding/json"
	"errors"
	"fmt"
	"sync"
	"time"

	http_2 "net/http"

	"github.com/goravel/framework/contracts/http"
	_ "github.com/goravel/framework/database/db"
	"github.com/goravel/framework/support/maps"
	"github.com/gorilla/websocket"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/models"
)

type OverlayWsServiceClient struct {
	Connection *websocket.Conn
	Token      string
	mu         sync.Mutex
}

func (c *OverlayWsServiceClient) SendMessage(data interface{}) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.Connection.WriteJSON(data)
}

type OverlayHubType struct {
	clients     map[*OverlayWsServiceClient]bool
	mu          sync.RWMutex
	ws_upgrader *websocket.Upgrader
}

var OverlayHub = &OverlayHubType{
	clients: make(map[*OverlayWsServiceClient]bool, 0),
	ws_upgrader: &websocket.Upgrader{
		ReadBufferSize:  4096,
		WriteBufferSize: 4096,
		CheckOrigin: func(r *http_2.Request) bool {
			if r.Method != "GET" {
				return false
			}
			if r.URL.Path != "/realtime/overlay" {
				return false
			}
			return true
		},
	},
}

func (c *OverlayHubType) Add(client *OverlayWsServiceClient) {
	c.mu.Lock()
	defer c.mu.Unlock()
	maps.Add(c.clients, client, true)
}

func (c *OverlayHubType) Remove(client *OverlayWsServiceClient) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if maps.Exists(c.clients, client) {
		maps.Forget(c.clients, client)
		client.Connection.Close()
	}
}
func (c *OverlayHubType) BroadcastToClient(token string, data interface{}) {
	c.mu.RLock()
	defer c.mu.RUnlock()
	for client := range c.clients {
		if client.Token == token {
			if err := client.SendMessage(data); err != nil {
				fmt.Println(`Data berhasil di kirim ke:`, token)
				client.Connection.Close()
			}
		}
	}
}

func (c *OverlayHubType) BroadcastToAll(data interface{}) {
	c.mu.RLock()
	defer c.mu.RUnlock()
	for client := range c.clients {
		if err := client.SendMessage(data); err != nil {
			fmt.Println(`Data berhasil di kirim ke semua overlay`)
			client.Connection.Close()
		}
	}
}

func (c *OverlayHubType) CreateWs(ctx http.Context) http.Response {
	conn, err := c.ws_upgrader.Upgrade(ctx.Response().Writer(), ctx.Request().Origin(), nil)
	if err != nil {
		conn.Close()
		return ctx.Response().Status(http.StatusInternalServerError).Json(http.Json{"msg": "Opps Error:", "errors": err.Error()})
	}
	conn.SetReadDeadline(time.Now().Add(5 * time.Second))
	_, raw, err := conn.ReadMessage()
	if err != nil {
		conn.WriteJSON("Tidak ada data yang dikirim")
		conn.Close()
		return nil
	}
	client := &OverlayWsServiceClient{
		Connection: conn,
	}

	var eventWebsocket struct {
		Token string `json:"token"`
	}
	conn.SetReadDeadline(time.Time{})
	if err := json.Unmarshal(raw, &eventWebsocket); err != nil {
		conn.WriteJSON("Data tidak valid")
		conn.Close()
		return nil
	}
	//cek from token
	var creator models.Creator
	if err := facades.DB().Table(creator.TableName()).Select("overlay_key").Where("overlay_key", eventWebsocket.Token).FirstOr(&creator, func() error {
		return errors.New("User Tidak Ditemukan!")
	}); err != nil {
		fmt.Println(facades.Hash().Make("password"))
		conn.WriteJSON("Token tidak valid")
		conn.Close()
		return nil
	}

	client.Token = eventWebsocket.Token
	OverlayHub.Add(client)
	conn.WriteJSON("Connection Succesfyly")

	go func(ctx http.Context) {
		defer OverlayHub.Remove(client)
		for {
			_, _, err := conn.ReadMessage()
			if err != nil {
				fmt.Println(err.Error())
				conn.Close()
				return
			}
		}
	}(ctx)
	return nil
}
