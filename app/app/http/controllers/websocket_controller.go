package controllers

import (
	"encoding/json"
	"fmt"
	http_2 "net/http"
	"time"

	"github.com/goravel/framework/contracts/http"
	"github.com/gorilla/websocket"
	"github.com/lnx645/supme.io/app/services"
)

type WebsocketMessage struct {
	Type    string `json:"type"`
	Content string `json:"content"`
	Token   string `json:"token"`
}
type WebsocketController struct {
	// Dependent services
}

func NewWebsocketController() *WebsocketController {
	return &WebsocketController{
		// Inject services
	}
}
func (r *WebsocketController) TestOverlay(ctx http.Context) http.Response {
	services.Hub.BroadcastToToken(ctx.Request().Query("key"), http.Json{
		"type":    "Overlay Update",
		"content": "Dadan Hidayat Mengirim 10 Traktiran Kopi! Pesan: Semangat bang semoga sehat selalu dan banyak reze`ki yaa",
	})
	return ctx.Response().Success().Json(http.Json{
		"message": "Pesan broadcast telah dikirim ke token " + ctx.Request().Query("key"),
	})
}
func (r *WebsocketController) OverlayWebsocket(ctx http.Context) http.Response {

	upgrade := websocket.Upgrader{
		ReadBufferSize:  4096,
		WriteBufferSize: 4096,
		CheckOrigin: func(r *http_2.Request) bool {
			if r.Method != "GET" {
				fmt.Println("Method harus get")
				return false
			}
			if r.URL.Path != "/hub/ws/overlay" {
				fmt.Println("path error")
				return false
			}
			return true
		},
	}
	conn, err := upgrade.
		Upgrade(ctx.Response().
			Writer(), ctx.
			Request().
			Origin(), nil)
	if err != nil {
		conn.Close()
		return ctx.Response().
			Success().
			Json(http.Json{
				"message": "Gagal melakukan upgrade ke websocket",
				"error":   err.Error(),
			})
	}

	client := &services.Client{
		Connn: conn,
	}

	conn.SetReadDeadline(time.Now().Add(5 * time.Second))
	_, raw, err := conn.ReadMessage()
	if err != nil {
		conn.WriteJSON(http.Json{
			"type":   "Auth Fail",
			"reason": "Timeout! Tidak ada data yang di kirim",
		})
		conn.Close()
		return nil
	}

	conn.SetReadDeadline(time.Time{})
	var msg WebsocketMessage
	if err := json.Unmarshal(raw, &msg); err != nil {
		conn.WriteJSON(http.Json{
			"type":   "Auth Fail",
			"reason": "Invalid Message Format",
		})
		conn.Close()
		return nil
	}
	if msg.Token != "123" {
		conn.WriteJSON(http.Json{
			"type":   "Auth Fail",
			"reason": "Invalid Token",
			"token":  msg.Token,
		})
		conn.Close()
		return nil
	}
	client.Token = msg.Token
	services.Hub.AddClient(client)
	fmt.Println("Client connected with token:", client.Token)
	fmt.Println("Terkoneksi dengan client:", client.Connn.RemoteAddr())
	conn.WriteJSON(http.Json{
		"type":   "Success",
		"reason": "Berhasil terkoneksi ke websocket",
	})
	go func() {
		defer services.Hub.RemoveClient(client)
		for {
			_, _, err := conn.ReadMessage()
			if err != nil {
				fmt.Println("Error reading message:", err)
				conn.Close()
				return
			}

		}
	}()
	return nil
}
