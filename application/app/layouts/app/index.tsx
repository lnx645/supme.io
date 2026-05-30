import { Outlet } from "react-router";
import { Navbar } from "./navbar";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
