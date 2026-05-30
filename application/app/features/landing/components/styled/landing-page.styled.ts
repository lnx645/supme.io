import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";
export const Hero = styled.section(
  mq({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100dvh",
    width: "100%",
    gap: 28,
    padding: [25, 0],
    position: "relative",
    backgroundColor: "#f5f5ee",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 0,
      opacity: 0.6,

      backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
    `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    },

    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  }),
);
export const HeroContent = styled.div({
  maxWidth: 520, // Lebar yang kamu tentukan
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  placeContent: "start",
  justifyContent: "start",
  padding: "20px",
  paddingInline: 0,
  textAlign: "left", // Teks rata kiri biasanya lebih rapi untuk lebar 420px
});

export const HeroHeading = styled.h1({
  fontSize: 42,
  lineHeight: 0.95,
  fontWeight: 900,
  color: "#09090b",
  margin: 0,
  letterSpacing: "-1.5px", // Memberikan kesan lebih rapat dan solid

  // Styling untuk highlight kata "uang" dan "Supme.com" di dalam Object Syntax
  "& span": {
    display: "inline-block",
    backgroundColor: "#a3e635",
    color: "#000000",
    padding: "2px 12px",
    border: "3px solid #000000",
    borderRadius: "8px",
    boxShadow: "4px 4px 0px #000000",
    margin: "4px 4px",
    transform: "rotate(-2deg)",
  },

  "& span:last-child": {
    backgroundColor: "#fbbf24", // Warna berbeda untuk Supme.com
    transform: "rotate(1deg)",
  },
});

export const HeroSubText = styled.p({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.6,
  color: "#a1a1aa",
  margin: 0,
});

export const HeroImage = styled.img({
  width: "100%",
  maxWidth: "350px", // Ukuran proporsional agar tidak mendominasi teks
  objectFit: "contain",
  // Sedikit filter drop-shadow bisa membuat gambar transparan lebih "pop-up"
  filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5))",
});

export const CtaAction = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
});
