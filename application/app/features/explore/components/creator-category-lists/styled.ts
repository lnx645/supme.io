import styled from "@emotion/styled";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Button } from "react-aria-components/Button";
import { NavLink } from "react-router";
const Wrapper = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const Navigate = styled(Button)<{ right?: boolean }>(({ right }) => {
  return {
    position: "absolute",
    left: !right ? 0 : "auto",
    right: right ? 0 : "auto",
  };
});
export const Container = styled(ScrollContainer)({
  flex: 1,
  gap: 2,
  display: "flex",
  paddingBlock: 2,
  marginLeft: 10,
  alignItems: "center",
});
export const ListItem = styled(Button)({
  "--button-border-size": "1px",
  "--button-gradient-size": "12px",
  "--button-shadow": "rgba(0, 0, 0, 0.15)",
  "--button-border": "rgba(0, 0, 0, 0.15)",
  "--button-highlight": "rgba(255, 255, 255, 0.35)",
  "--button-gradient": "rgba(0, 0, 0, 0.08)",
  paddingInline: 16,
  fontSize: 12,
  textDecoration: "none",
  display: "inline-flex",
  background: "none",
  flexShrink: 0,
  alignItems: "center",
  outline: "none",
  willChange: "scale",
  forcedColorAdjust: "none",
  transitionProperty: "background, color, scale, box-shadow",
  transitionDuration: "500ms",
  justifyContent: "center",
  height: 32,
  borderRadius: 10,
  WebkitTapHighlightColor: "transparent",
  fontWeight: "bold",
  
  boxShadow: `
    inset 0 -2px 0 var(--button-shadow),
    inset 0 0 0 var(--button-border-size) var(--button-border),
    inset 0px calc(var(--button-border-size) + 1px) 0px var(--button-highlight),
    inset 0px calc(-1 * var(--button-gradient-size)) var(--button-gradient-size) -2px var(--button-gradient)
  `,
  "&:where([data-hovered]),&:where([data-focused])": {
    color: "white",
    backgroundColor: "var(--color-primary)",
  },
  "&:where([data-pressed])": {
    "--button-shadow": "#c94b12",
    scale: 0.95,
  },
  "@media(forced-color:active)": {
    background: "ButtonFace",
    color: "ButtonText",
    borderColor: "ButtonBorder",
  },
  border: "none",
  cursor: "pointer",
  userSelect: "none",
});
export { Wrapper };
