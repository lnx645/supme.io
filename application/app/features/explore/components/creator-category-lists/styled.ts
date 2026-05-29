import styled from "@emotion/styled";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Button } from "react-aria-components/Button";
const Wrapper = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const Navigate = styled.div<{ right?: boolean }>(({ right }) => {
  return {
    width: 48,
    zIndex: 4,
    height: "100%",
    background: right
      ? "linear-gradient(270deg,var(--color-bg),transparent)"
      : "linear-gradient(90deg,var(--color-bg),transparent)",
    position: "absolute",
    border: "none",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: !right ?0 : "auto",
    right: right ? 0 : "auto",
  };
});
export const Container = styled(ScrollContainer)({
  flex: 1,
  display: "flex",
  overflowY: "hidden",
  paddingBlock: 2,
  alignItems: "center",
});
export const ListItem = styled(Button)({
  paddingInline: 10,
  fontSize: 14,
  textDecoration: "none",
  display: "inline-flex",
  background: "none",
  flexShrink: 0,
  alignItems: "center",
  outline: "none",
  willChange: "scale",

  fontFamily:"var(--font-source-serif)",
  border: "1px solid transparent",
  forcedColorAdjust: "none",
  transitionProperty: "background, color, scale, box-shadow",
  transitionDuration: "500ms",
  justifyContent: "center",
  height: 32,
  borderRadius: 2,
  WebkitTapHighlightColor: "transparent",
  fontWeight: 600,

  "&[data-pressed]": {
    color: "var(--color-primary)",
    "&::before": {
      display: "block",
    },
  },
  "&[data-focused]": {
    color: "var(--color-primary)",
    "&::before": {
      display: "block",
    },
  },
  "&[data-hovered]": {
    color: "var(--color-primary)",
    "&::before": {
      display: "block",
    },
  },
  cursor: "pointer",
  userSelect: "none",
  "&::before": {
    content: "''",
    display: "none",
    position: "absolute",
    width: "100%",
    height: 2,
    background: "var(--color-primary)",
    bottom: 0,
  },
});
export { Wrapper };
