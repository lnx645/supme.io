import css from "./css.module.css";
import { Input } from "@web/core/components/input";
import React, { useEffect } from "react";
import { NotificationSound } from "@lib/audio/notification-audio";
import { playTTSMessage } from "@lib/audio/text-to-speech";
import { http } from "@web/core/network/api_client";
import { Button } from "@web/core/components/button/button";
export const Component = async() => {
  const socketRef = React.useRef<WebSocket | null>(null);
  const sound = new NotificationSound();

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080/ws/overlay");

    socketRef.current.onopen = (ws) => {
      socketRef.current?.send(
        JSON.stringify({ event: "auth_token", data: "12345" }),
      );
    };
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.data) {
        sound.playCoinSound();
        playTTSMessage(data?.data);
      }
    };
  }, []);
  return (
    <div className={css.wrapper}>
      <p className="font-sans font-semibold">Silahkan Login</p>
      <Input
        label="Masukan nama anda"
        inputSize="xs"
        type="email"
        name="email"
      />
      <Input label="Masukan nama anda" inputSize="xs" type="password" />
      <Button

        onClick={() => {
          http.post("http://localhost:8080/overlay/test?key=12345");
        }}
      >
        Login
      </Button>
    </div>
  );
};
