package ws

import (
	"encoding/json"
	"fmt"
	http_2 "net/http"
	"time"

	"github.com/goravel/framework/contracts/http"
	"github.com/gorilla/websocket"
	"github.com/lnx645/supme.io/app/interfaces"
	"github.com/lnx645/supme.io/app/services"
)

type OverlayWebsocket struct {
	Upgrader    *websocket.Upgrader
	validTokens map[string]bool
}

func NewOverlayWebsocket() *OverlayWebsocket {
	return &OverlayWebsocket{
		validTokens: map[string]bool{"12345": true},
		Upgrader: &websocket.Upgrader{
			ReadBufferSize:  4096,
			WriteBufferSize: 4096,
			CheckOrigin: func(r *http_2.Request) bool {
				if r.Method != "GET" {
					return false
				}
				if r.URL.Path != "/ws/overlay" {
					return false
				}
				return true
			},
		},
	}
}

func (r *OverlayWebsocket) Index(ctx http.Context) http.Response {

	conn, err := r.Upgrader.Upgrade(ctx.Response().
		Writer(), ctx.Request().
		Origin(), nil)
	if err != nil {
		conn.Close()
		return ctx.Response().
			Status(http.StatusForbidden).
			String("Gagal Upgrade Websocket")
	}

	conn.SetReadDeadline(time.Now().Add(5 * time.Second))
	_, raw, err := conn.ReadMessage()
	if err != nil {
		conn.WriteJSON(http.Json{
			"status": "Error",
			"event":  "Authentication Token",
			"reason": "Tidak ada data yang dikirim",
		})
		conn.Close()
		return nil
	}
	client := &services.OverlayWebsocketClient{
		Conn: conn,
	}
	conn.SetReadDeadline(time.Time{})
	var msg interfaces.WebsocketMessageRequest
	if err := json.Unmarshal(raw, &msg); err != nil {
		conn.WriteJSON(interfaces.WebsocketMessageResponse{
			Event:   "data_failed",
			Message: "Data yang di kirim salah! Tidak sesuai parameter",
		})
		conn.Close()
		return nil
	}
	if !r.validTokens[msg.Data] {
		conn.WriteJSON(interfaces.WebsocketMessageResponse{
			Event:   "auth_failed",
			Reason:  "Token tidak valid! Pastikan token yang dikirim benar",
			Message: "Gagal melakukan autentikasi",
		})
		conn.Close()
		return nil
	}

	conn.WriteJSON(interfaces.WebsocketMessageResponse{
		Event:   "auth_successfuly",
		Message: "Autentikasi berhasil! Selamat datang di Websocket Overlay",
		Reason:  "Autentikasi berhasil",
	})

	client.Token = msg.Data
	services.Overlay.AddClient(client)
	go func() {
		defer services.Overlay.RemoveClient(client)
		for {
			_, _, err := conn.ReadMessage()
			if err != nil {
				fmt.Println(err.Error())
				conn.Close()
				return
			}
		}
	}()
	return nil
}
