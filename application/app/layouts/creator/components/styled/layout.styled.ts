import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";

export const Wrapper = styled.div(
  mq({
    "--dash-color": "#404040",
    "--dash-secondary": "#737373",
    "--dash-bg": "#fafafa",
    display: "grid",
    gridTemplateColumns: [
      "1fr",
      "60px 1fr",
      "220px 1fr",
      "220px 1fr",
      "220px 1fr",
    ],
    maxWidth: ["100%", "100%", "100%", "100%", "1280px"],
    width: "100%",
    margin: "0 auto",
    background: "var(--dash-bg)",
    color: "var(--dash-color)",
    padding: ["0 0", "0 0", 0, 0, 0],
    height: "100dvh",
    overflow: "hidden",
  }),
);

export const Sidebar = styled.div(
  mq({
    minHeight: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    display: ["none", "block"],
    background: "white",
    borderRightWidth: 1,
    borderRightColor: "#d1d1d1",
    borderRightStyle: "solid",
    overflowY: "auto",
    position: "sticky",
    alignSelf: "start",
    top: 0,
  }),
);

export const MainContent = styled.main({
  height: "100%",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  scrollbarWidth: "thin",
  scrollbarColor: "#d7d7d1 transparent",

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
