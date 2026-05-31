import apiRequest from "@app/core/network/api_request";
import { authStore } from "@app/core/storage/auth_store";
import { useEffect } from "react";

export const Component = () => {
  useEffect(()=>{
    apiRequest.get("user")
  },[])
  return <div>Selamat datang di navbar</div>;
};
