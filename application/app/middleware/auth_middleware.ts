import { userContext } from "@app/context/user_context";
import apiRequest from "@app/core/network/api_request";
import { redirect, type MiddlewareFunction } from "react-router";
import { toast } from "sonner";

export const authMiddleware: MiddlewareFunction = async ({ context }, next) => {
  try {
    const user = await apiRequest.get("user");
    if (user.status == 200) {
      const data = user.data?.user;
      if (!user) {
        toast.error("Silahkan login lagi! Session anda sudah habis");
        throw redirect("/login.php");
      }
      context.set(userContext, data);
      await next();
    }
  } catch (error) {
    toast.error("Silahkan login lagi! Session anda sudah habis");
    throw redirect("/login.php");
  }
};
