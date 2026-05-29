import styled from "@emotion/styled";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Button } from "react-aria-components";

export const Wrapper = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  "&::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: 1,
    background: "#e0e0d5",
    bottom: 0,
    left: 0,
    zIndex: 1,
    borderRadius: 2,
  },
});

export const Navigate = styled.div<{ right?: boolean }>(({ right }) => ({
  width: 48,
  zIndex: 4,
  height: "100%",
  position: "absolute",
  top: 0,
  left: !right ? 0 : "auto",
  right: right ? 0 : "auto",
  pointerEvents: "none",
  userSelect: "none",
  border: "none",
  background: right
    ? "linear-gradient(270deg, #f5f5ee, transparent)"
    : "linear-gradient(90deg, #f5f5ee, transparent)",
}));

export const Container = styled(ScrollContainer)({
  flex: 1,
  display: "flex",
  alignItems: "center",
});

export const ListItem = styled(Button)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  height: 42,
  paddingInline: 16,
  fontSize: 14,
  fontWeight: 600,
  color: "#5c5c55",
  textDecoration: "none",
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  transition: "color 200ms ease, background-color 200ms ease",
  zIndex: 2,
  "&::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: 3,
    background: "var(--color-primary)",
    bottom: 0,
    left: 0,
    borderRadius: "4px 4px 0 0",
    opacity: 0,
    transform: "scaleX(0.7)",
    transformOrigin: "center",
    transition: "opacity 200ms ease, transform 200ms ease",
  },
  "&[data-hovered]": {
    color: "var(--color-primary)",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 6,
  },
  "&[data-pressed]": {
    color: "var(--color-primary)",
    "&::after": {
      opacity: 1,
      transform: "scaleX(1)",
    },
  },
  "&[data-focus-visible]": {
    outline: "2px solid var(--color-primary)",
    outlineOffset: -2,
    borderRadius: 6,
  },
  "&[aria-current='page']": {
    color: "var(--color-primary)",
    "&::after": {
      opacity: 1,
      transform: "scaleX(1)",
    },
  },
});
