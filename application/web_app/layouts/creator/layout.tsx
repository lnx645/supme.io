import {
  userContext,
  type UserContextType,
} from "@web/core/context/userContext";
import { http } from "@web/core/network/api_client";
import { useEffect, type ReactNode } from "react";
import {
  Await,
  Outlet,
  redirect,
  useLoaderData,
  type LoaderFunction,
  type MiddlewareFunction,
} from "react-router";
import { AppLayout } from "./app-layout";

export const LayoutLoader: LoaderFunction = ({ context }) => {
  const data = context.get(userContext);
  return {
    user: data as UserContextType,
  };
};
export const LayoutMiddleware: MiddlewareFunction = async (
  { context },
  next,
) => {
  try {
    const user: any = await http.get("api/user");
    if (user?.user) {
      context.set(userContext, user?.user);
      await next();
      return;
    }
    throw redirect("/login");
  } catch (error) {
    throw redirect("/login");
  }
};

export const CreatorLayout = () => {
  const data = useLoaderData();

  return <Await resolve={data}>{(e) => <AppLayout />}</Await>;
};
