import styled from "@emotion/styled";
import { Item } from "../menu/styled";
import { mq } from "@app/utils/mq";
import Explore from "@svg/compas.svg";
import Search from "@svg/search.svg";
import Notification from "@svg/notification.svg";
import Login from "@svg/login.svg";
import Store from "@svg/store.svg";
const Wrapper = styled.div(
  mq({
    paddingBottom: "env(safe-area-inset-bottom)",
    paddingInline: 5,
    position: "fixed",
    display: ["flex", "none"],
    zIndex: 1000,
    gap: 3,
    background: "white",
    borderTop: "2px solid rgba(0, 0, 0, 0.05)",
    bottom: 0,
    width: "100%",
    height: "65px",
    alignItems: "center",
    span: {
      display: "none",
    },
    svg: {
      width: 25,
      height: 25,
    },
  }),
);

const MenuItemMobile = styled(Item)({
  fontSize: 12,
  "::before": {
    display: "none",
  },
  borderWidth: 2,
  borderColor: "transparent",
  borderStyle: "solid",
  userSelect: "none",
  ":is(.active)": {
    height: "calc(65px - 16px)",
    svg: {
      color: "#363636",
    },
    borderColor: "#363636",

    background: "var(--nav-color-active)",
    borderRadius: 10,
  },
  ":not(.active)": {
    height: "calc(65px - 16px)",

    borderRadius: 10,
    ":hover": {
      background: "var(--nav-color-hover)",
    },
    ":active": {
      background: "var(--nav-color-active)",
    },
    textDecoration: "none",
    ":focus": {
      background: "var(--nav-color-active)",
    },
    ":focus-within": {
      outlineColor: "var(--color-link)",
      outlineOffset: 3,
      background: "var(--nav-color-active)",
    },
  },
});
export const MobileNavbar = () => {
  return (
    <Wrapper>
      <MenuItemMobile to={"/explore"}>
        <Explore />
      </MenuItemMobile>
      <MenuItemMobile to={"/search"}>
        <Search />
      </MenuItemMobile>
      {/* <MenuItemMobile to={"/login.php"}>
        <Store />
      </MenuItemMobile>
      <MenuItemMobile to={"/store"}>
        <Notification />
      </MenuItemMobile> */}
      <MenuItemMobile to={"/login.php"}>
        <Login />
      </MenuItemMobile>
    </Wrapper>
  );
};
