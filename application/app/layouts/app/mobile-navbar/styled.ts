import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";
import { Item } from "../menu/styled";
export const Wrapper = styled.div(
  mq({
    paddingBottom: "env(safe-area-inset-bottom)",
    paddingInline: 25,
    position: "fixed",
    width:"100%",
    display: ["flex", "none"],
    zIndex: 1000,
    justifyContent: "space-between",
    gap: 3,
    background: "var(--color-bg)",
    borderTop: "1px solid #edede6",
    bottom: 0,
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
    background: "rgba(0, 0, 0, 0.08)",
    borderRadius: 10,
  },
  ":not(.active)": {
    height: "calc(53px - 16px)",

    borderRadius: 10,
    ":hover": {
      background: "rgba(0, 0, 0, 0.04)",
    },
    ":active": {
      background: "rgba(0, 0, 0, 0.08)",
    },
    textDecoration: "none",
    ":focus": {
      background: "rgba(0, 0, 0, 0.08)",
    },
    ":focus-within": {
      outlineColor: "var(--color-link)",
      outlineOffset: 3,
      background: "rgba(0, 0, 0, 0.08)",
    },
  },
});
