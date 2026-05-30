import styled from "@emotion/styled";
import { Button } from "react-aria-components";

export const Wrapper = styled.div({
  paddingInline: "10px",
  display: "flex",
  paddingTop: 10,
  flexDirection: "column",
  // Bisa gunakan var(--color-secondary) atau warna teks khusus yang kita bahas (#52524a)
  color: "#52524a",
});

export const SocialGrid = styled.div({
  display: "flex",
  flexWrap: "wrap", // Diubah ke wrap agar aman menumpuk ke bawah jika layar sempit
  gap: "8px",
  alignItems: "center", // Agar sejajar secara vertikal

  "& > *": {
    // --- TAMBAHAN PENTING UNTUK MENENGAHKAN ICON SVG ---
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff", // Wajib ada agar tidak tembus pandang
    // ----------------------------------------------------

    border: "2px solid var(--color-secondary)",
    width: "40px",
    height: "40px",
    borderRadius: "6px",
    color: "var(--color-secondary)",
    cursor: "pointer",
    boxShadow: "2px 2px 0px var(--color-secondary)",
    textDecoration: "none",
    transition: "all 0.1s ease-in-out", // Transisi biar snappy/halus saat ditekan

    "&:hover": {
      backgroundColor: "#ebebe4",
      transform: "translate(-2px, -2px)",
      boxShadow: "4px 4px 0px var(--color-secondary)",
    },

    "&:active": {
      transform: "translate(2px, 2px)",
      boxShadow: "0px 0px 0px var(--color-secondary)",
    },
  },

  "& svg": {
    width: "20px",
    height: "20px",
  },
});

export const Copyright = styled.span({
  fontSize: "12px",
  userSelect: "none",
  fontWeight: "bold",
  color: "#09090b", // Teks copyright lebih tegas
});

export const Text = styled.span({
  fontSize: "12px",
  userSelect: "none",
});

export const BackToApp = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "4px",
  marginTop: "12px",
  fontWeight: 600,
  borderRadius: "4px",
  fontSize: "12px",
  color: "#09090b",
  userSelect: "none",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "4px 0",
  outline: "none",
  transition: "color 0.2s ease",

  "&:hover": {
    color: "#52524a", 
  },

  "& svg": {
    width: "20px",
    height: "20px",
  },
});

export const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const Content = styled.div({
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
});
