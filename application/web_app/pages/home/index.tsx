import { Button } from "@web/core/components/button/button";
import css from "./css.module.css";
import { Input } from "@web/core/components/input";
import React, { useEffect } from "react";
import { NotificationSound } from "@lib/audio/notification-audio";
import { playTTSMessage } from "@lib/audio/text-to-speech";
import { http } from "@web/core/network/api_client";
export const Component = () => {
  const socketRef = React.useRef<WebSocket | null>(null);
  const sound = new NotificationSound();
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080/hub/ws/overlay");

    socketRef.current.onopen = (ws) => {
      socketRef.current?.send(
        JSON.stringify({ type: "text", content: "login_token", token: "123" }),
      );
    };
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.content) {
        sound.playSuccessSound();
        playTTSMessage(data?.content);
      }
    };
  }, []);
  return (
    <div className={css.wrapper}>
      <p className="font-sans font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
        delectus dolorum molestias corporis ut. Commodi autem repellat similique
        vel maxime quo voluptates, deleniti molestias, accusamus aperiam ipsum
        blanditiis itaque architecto.
      </p>
      <Input
        radius="lg"
        inputSize="sm"
        type="email"
        name="email"
        label="Email"
      />
      <Input
        disabled
        value={"YAYAN"}
        radius="lg"
        inputSize="sm"
        type="password"
        label="Password"
      />
      <Button onClick={()=>{
        http.get("http://localhost:8080/overlay/test?key=123")
      }}>Login</Button>
    </div>
  );
};
