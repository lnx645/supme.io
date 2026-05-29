import styled from "@emotion/styled";
import type { ReactNode } from "react";

const Base = styled.button({
  position: "relative",
  zIndex: 2,
  display: "inline-flex",
  background: "none",
  border: "none",
  color: "white",
  fontWeight: 600,
  fontSize: 14,
  userSelect:"none",
  outline: "none",
  alignItems: "center",

  padding: "7px 15px",
  WebkitTapHighlightColor: "transparent",
  justifyContent: "center",
  cursor: "pointer",
  "::before": {
    content: "''",
    position: "absolute",
    borderWidth: 2,
    borderStyle: "solid",
    inset: 0,
    borderRadius: 8,
    zIndex: -1,
    background: "var(--color-primary)",
    color: "var(--color-primary-var)",
    boxShadow: "0px 4px 0px",
  },
  ":active": {
    transform: `translateY(4px)`,
    "::before": {
      boxShadow: "none",
    },
  },
});
type Props = {
  children: ReactNode;
};
export const Button3d = ({ children }: Props) => {
  return <Base>{children}</Base>;
};
