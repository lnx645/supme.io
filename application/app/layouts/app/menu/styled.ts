import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const Wrapper = styled.div(
  mq({
    marginLeft: 24,
    display: ["none", "grid"],
    gridTemplateColumns: ["repeat(3,60px)", "repeat(3,80px)"],
    alignItems: "center",
    height: "100%",
  }),
);
export const Item = styled(NavLink)(
  mq({
    "--nav-color": "#202020",
    "--nav-color-active": "rgba(0, 0, 0, 0.08)",
    "--nav-color-hover": "rgba(0, 0, 0, 0.04)",
    textDecoration: "none",
    fontSize: 14,
    WebkitTapHighlightColor: "transparent",
    paddingInline: 10,
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: "var(--nav-color)",
    justifyContent: "center",
    fontWeight: 600,
    svg: {
      display: ["block", "none"],
      width: [28, 30],
    },
    span: {
      display: ["none", "block"],
    },
    "::before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      background: "var(--color-primary)",
      width: "90%",
      height: 3,
      transform: "scaleX(0)",
      borderRadius: 2,
    },
    ":not(.active)": {
      borderRadius: 10,
      height: "calc(var(--nav-height) - 10px)",
      ":hover": {
        background: "var(--nav-color-hover)",
      },
      ":active": {
        background: "var(--nav-color-active)",
      },
      ":focus-within": {
        outlineColor: "var(--color-link)",
        outlineOffset: 3,
        background: "var(--nav-color-active)",
      },
    },
    "&.active": {
      cursor: "default",
      color: "var(--color-primary)",
      background: "transparent",
      "::before": {
        transform: "scaleX(1)",
      },
    },
  }),
);
