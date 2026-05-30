import styled from "@emotion/styled";
import { NavLink } from "react-router";

const Wrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "30px 1fr 30px",
  alignItems: "center",
  paddingInline: 8,
  paddingBlock: 8,
  borderRadius: 6,
  userSelect: "none",
  cursor: "pointer",
  color: "#3d4852",
  fontWeight: 700,
  gap: 4,
  ":hover": {
    background: "rgba(0, 0, 0, 0.04)",
    color: "var(--color-primary)",
  },
  ":active": {
    background: "rgba(0, 0, 0, 0.04)",
    color: "var(--color-primary)",
  },
  ":focus": {
    background: "rgba(0, 0, 0, 0.04)",
    color: "var(--color-primary)",
  },
});

const Icon = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "> svg": {
    width: 20,
    height: 20,
  },
});
const LabelText = styled.div({
  fontSize: 14,
});

const Indicator = styled.div({
  fontSize: 12,
  color: "#8c9296",
  marginLeft: 10,
});

export const SidebarMenuBase = {
  Wrapper,
  Icon,
  LabelText,
  Indicator,
};
