import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";
import { Item } from "../menu/styled";
export const Wrapper = styled.div(
  mq({
    paddingBottom: "env(safe-area-inset-bottom)",
    paddingInline: 25,
    position: "fixed",
    display: ["flex", "none"],
    zIndex: 1000,
    justifyContent: "space-between",
    gap: 3,
    background: "white",
    borderTop: "1px solid #d8d8d8",
    bottom: 0,
    width: "100%",
    height: "53px",
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

export const MenuItemMobile = styled(Item)({
  fontSize: 12,
  "::before": {
    display: "none",
  },
  userSelect: "none",
  svg: {
    color: "#363636",
    width: 26,
    height: 26,
  },
  ":is(.active)": {
    height: "calc(53px - 16px)",
    background: "var(--nav-color-active)",
    borderRadius: 10,
  },
  ":not(.active)": {
    height: "calc(53px - 16px)",

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
