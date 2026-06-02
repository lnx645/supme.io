package services

import (
	"fmt"
	"sync"

	"github.com/goravel/framework/support/maps"
	"github.com/gorilla/websocket"
)

// Websocket client untuk Overlay
type OverlayWebsocketClient struct {
	Conn  *websocket.Conn
	Token string
	mu    sync.Mutex
}

// Send message to client
func (c *OverlayWebsocketClient) Send(message interface{}) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.Conn.WriteJSON(message)
}

// Hub untuk mengelola semua koneksi Websocket Overlay
type OverlayWebsocketHub struct {
	clients map[*OverlayWebsocketClient]bool
	mu      sync.RWMutex
}

var Overlay = &OverlayWebsocketHub{
	clients: make(map[*OverlayWebsocketClient]bool),
}

func (h *OverlayWebsocketHub) AddClient(client *OverlayWebsocketClient) {
	h.mu.Lock()
	defer h.mu.Unlock()
	maps.Add(h.clients, client, true)
}

func (h *OverlayWebsocketHub) RemoveClient(client *OverlayWebsocketClient) {
	h.mu.Lock()
	defer h.mu.Unlock()
	if maps.Exists(h.clients, client) {
		maps.Forget(h.clients, client)
		client.Conn.Close()
	}
}

// broadcast to overlay with token spesific
func (h *OverlayWebsocketHub) BroadcastToToken(token string, message interface{}) {
	h.mu.RLock()
	defer h.mu.RUnlock()
	for client := range h.clients {
		if client.Token == token {
			if err := client.Conn.WriteJSON(message); err != nil {
				fmt.Println("Error sending message to client:", err.Error())
				client.Conn.Close()
			}
		}
	}
}

func (h *OverlayWebsocketHub) BroadcastAll(message interface{}) {
	h.mu.RLock()
	defer h.mu.RUnlock()
	for client := range h.clients {
		if err := client.Conn.WriteJSON(message); err != nil {
			fmt.Println("Error sending message to client:", err.Error())
			client.Conn.Close()
		}
	}
}
