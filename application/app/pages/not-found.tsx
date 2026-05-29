import styled from "@emotion/styled";
import { Link } from "react-router";

const NotFoundContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
  color: "#212529",
  fontFamily: "system-ui, -apple-system, sans-serif",
  textAlign: "center",
  padding: "0 20px",
});

const ErrorCode = styled.h1({
  fontSize: "6rem",
  fontWeight: "800",
  margin: "0",
  color: "#e63946",
  letterSpacing: "4px",
});

const ErrorMessage = styled.h2({
  fontSize: "2rem",
  margin: "10px 0 20px 0",
  color: "#343a40",
});

const Description = styled.p({
  fontSize: "1.1rem",
  color: "#6c757d",
  maxWidth: "450px",
  marginBottom: "30px",
  lineHeight: "1.5",
});

const HomeButton = styled(Link)({
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "600",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops! Halaman tidak ditemukan.</ErrorMessage>
      <Description>
        Maaf, halaman yang Anda cari mungkin telah dihapus, dipindah, atau Anda
        salah memasukkan URL.
      </Description>
      <HomeButton to="/">Kembali ke Beranda</HomeButton>
    </NotFoundContainer>
  );
}
