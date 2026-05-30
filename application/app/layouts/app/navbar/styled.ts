import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";

export const Wrapper = styled.div(
  mq({
    "--nav-height": "56px",
    "--nav-width": "100%",
    "--navbar-border-color": "#dedede",
    "--nav-color": "#f5f5eee6",
    backdropFilter: "blur(4px)",
    background: "var(--nav-color)",
    height: "var(--nav-height)",
    borderBottom:"1px solid #edede6",
    position: "sticky",
    top: 0,
    zIndex: 99,
    boxShadow: ["none"],
    display: "flex",
    alignItems: "center",
  }),
);
export const Row = styled.div({
  display: "flex",
  alignItems: "center",
  flex: 1,
  height: "var(--nav-height)",
});
export const Container = styled.div({
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  padding: "0 20px",
  height: "100%",
});
export const Col = styled.div<{
  position: string;
}>(({ position }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  marginLeft: position === "right" || position === "center" ? "auto" : "0",
  marginRight: position === "left" || position === "center" ? "auto" : "0",
}));

export const Logo = styled.div(
  mq({
    width: ["80px", "100px"],
    svg : {
      width:"100px",
      height:"100px"
    }
  }),
);
