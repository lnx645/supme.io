import type { ReactNode } from "react";
import { Outlet, type LoaderFunction, type MiddlewareFunction } from "react-router";

export const LayoutLoader: LoaderFunction = () => {
  return {};
};
export const LayoutMiddleware: MiddlewareFunction = async ({}, next) => {
  await next();
};

export const CreatorLayout = () => {
  return <Outlet/>;
};
