package interfaces

type WebsocketMessageRequest struct {
	Event string `json:"event"`
	Data  string `json:"data"`
}

type WebsocketMessageResponse struct {
	Event   string `json:"event"`
	Data    string `json:"data,omitempty"`
	Reason  string `json:"reason,omitempty"`
	Message string `json:"message,omitempty"`
}
