import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { BaseContainer } from "@app/components/base-container";
import { MobileNavbar } from "./mobile-navbar";
import { createPortal } from "react-dom";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <BaseContainer>
        <Outlet />
      </BaseContainer>
    </>
  );
};
