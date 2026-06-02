package services

import (
	"fmt"
	"sync"

	"github.com/goravel/framework/support/maps"
	"github.com/gorilla/websocket"
)

type Client struct {
	Token string
	Connn *websocket.Conn
	mutex sync.Mutex
}

func (c *Client) SendMessage(message interface{}) error {
	c.mutex.Lock()
	defer c.mutex.Unlock()
	return c.Connn.WriteJSON(message)
}

type WsHub struct {
	Clients map[*Client]bool
	mutex   sync.RWMutex
}

// hub clients
var Hub = &WsHub{
	Clients: make(map[*Client]bool),
}

// fungsi untuk add client
func (h *WsHub) AddClient(client *Client) {
	h.mutex.Lock()
	defer h.mutex.Unlock()
	maps.Add(h.Clients, client, true)
}

// fungsi untuk remove client
func (h *WsHub) RemoveClient(client *Client) {
	h.mutex.Lock()
	defer h.mutex.Unlock()

	if maps.Exists(h.Clients, client) {
		maps.Forget(h.Clients, client)
		client.Connn.Close()
	}
}

// / BroadcastToToken mengirim pesan ke semua klien yang memiliki token tertentu
func (h *WsHub) BroadcastToToken(token string, message interface{}) {
	h.mutex.RLock()
	defer h.mutex.RUnlock()
	for client := range h.Clients {
		if client.Token == token {
			if err := client.SendMessage(message); err != nil {
				fmt.Println("Error sending message to client:", err)
				client.Connn.Close()
			}
		}
	}
}
