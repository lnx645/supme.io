import styled from "@emotion/styled";

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 16,
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderLeft:"none",
  borderRadius: 0,
  padding: "12px 20px",
});

const IconCircle = styled.div({
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "#FAEEDA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: 20,
  color: "#BA7517",
});

const TextGroup = styled.div({
  flex: 1,
});

const Title = styled.p({
  margin: "0 0 2px",
  fontSize: 14,
  fontWeight: 500,
  color: "#111827",
});

const Subtitle = styled.p({
  margin: 0,
  fontSize: 13,
  color: "#6b7280",
});

const JoinButton = styled.a({
  flexShrink: 0,
  background: "#BA7517",
  color: "#fff",
  fontSize: 13,
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: 8,
  textDecoration: "none",
  whiteSpace: "nowrap",
  "&:hover": {
    background: "#9a5f0e",
  },
});

export const JoinAlert = () => {
  return (
    <Wrapper>
      <IconCircle>⭐</IconCircle>
      <TextGroup>
        <Title>Belum jadi creator?</Title>
        <Subtitle>Nikmati fitur eksklusif untuk creator dan mulai bagikan kontenmu.</Subtitle>
      </TextGroup>
      <JoinButton href="/creator/register">Daftar creator</JoinButton>
    </Wrapper>
  );
};