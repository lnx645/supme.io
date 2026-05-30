import styled from "@emotion/styled";

export const Wrapper = styled.div({
  "--side-nav-height": "56px",
  "--sidebar-footer-height": "90px",
  "--sidebar-height":
    "calc(calc(100vh - var(--side-nav-height)) - var(--sidebar-footer-height))",

  display: "flex",
  flexDirection: "column",
});

export const Navbar = styled.nav({
  height: "var(--side-nav-height)",
  display: "flex",
  alignItems: "center",
  paddingInline: 25,
  "> svg": {
    width: 100,
  },
});

export const Main = styled.div({
  flex: 1,
  minHeight: "var(--sidebar-height)",
  maxHeight: "var(--sidebar-height)",
  overflow: "hidden",
  paddingInline: 10,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#d7d7d1",
    borderRadius: "10px",
    border: "2px solid #f5f5ee",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#c2c2bc",
  },
});
export const Separator = styled.div({
  fontSize: 10,
  fontWeight: 800,
  userSelect:"none",
  color: "#52524a",
  paddingBlock: 5,
  paddingInline: 10,
});
export const Bottom = styled.footer({});
export const SidebarBase = {
  Wrapper,
  Separator,
  Navbar,
  Main,
  Bottom,
};
