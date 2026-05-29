import styled from "@emotion/styled";
import type { ReactNode } from "react";

import { Button as RacButton } from "react-aria-components";

export const Base = styled(RacButton)({
  "--btn-face": "var(--color-primary)", // Biru terang (Bagian depan)
  "--btn-shadow": "#d3591f", // Biru gelap (Bagian bayangan/kedalaman 3D)
  "--btn-text": "#FFFFFF",

  // --- Layout & Typography ---
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%", // Bawaan dari .button-19 (bisa dihapus kalau mau lebarnya dinamis)
  padding: "13px 16px",
  borderRadius: 16, // Radius cukup besar khas gaya neo-brutal/duolingo
  boxSizing: "border-box",

  fontFamily: "din-round, sans-serif", // Sesuai dengan aslinya
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: "0.8px",
  lineHeight: "20px",
  textTransform: "uppercase",
  color: "var(--btn-text)",

  // --- Appearance Dasar ---
  appearance: "none",
  backgroundColor: "var(--btn-face)",
  border: "none",
  outline: "none",
  cursor: "pointer",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  touchAction: "manipulation",

  // --- Efek 3D Normal ---
  // Kita pakai box-shadow 4px ke bawah, ini menggantikan trik 'border-bottom'
  boxShadow: "0 4px 0 var(--btn-shadow)",
  transform: "translateZ(0)", // Hardware acceleration agar render lebih mulus
  willChange: "transform, box-shadow, filter",

  // =======================================================
  // STANDAR REACT ARIA COMPONENTS STATES
  // =======================================================

  // 1. Hover State
  "&[data-hovered]": {
    filter: "brightness(1.1)", // Mencerahkan warna dasar
  },

  // 2. Pressed State (Ditekan)
  "&[data-pressed]": {
    // Tombol turun sejauh 4px (tepat seukuran shadow), shadow dihilangkan
    transform: "translateY(4px) translateZ(0)",
    boxShadow: "0 0px 0 var(--btn-shadow)",
  },

  // 3. Disabled State
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.6,
    filter: "grayscale(0.4)", // Opsional: Sedikit pudar/abu-abu saat nonaktif
  },

  // 4. Focus Visible (Aksesibilitas Keyboard)
  "&[data-focus-visible]": {
    outline: "2px solid var(--btn-shadow)",
    outlineOffset: 2,
  },
});
type Props = {
  children: ReactNode;
};
export const Button3d = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

