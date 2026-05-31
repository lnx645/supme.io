import { Outlet, useNavigation } from "react-router";
import { Navbar } from "./navbar";
import { useLoadingPage } from "@app/core/hook/useLoading";
export const AppLayout = () => {
  useLoadingPage();
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
