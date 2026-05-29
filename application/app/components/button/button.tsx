import styled from "@emotion/styled";

const BaseButton = styled.button({
  "--sk-button-background": "#0071e3",
  "--sk-button-background-hover": "#0076df",
  "--sk-button-background-active": "#006edb",
  "--sk-button-border-color": "transparent",

  background: "var(--sk-button-background)",
  borderWidth: 1,
  borderColor: "var(--sk-button-border-color)",
  borderStyle: "solid",
  outline: "none",
  color: "white",
  padding: "7px 15px",
  borderRadius: 8,
  cursor: "pointer",
  ":hover": {
    background: "var(--sk-button-background-hover)",
  },
  ":active": {
    background: "var(--sk-button-background-active)",
  },
});
const Title = styled.span({
    fontWeight:600,
  fontSize: 14,
});
const Button = () => {
  return (
    <BaseButton>
      <Title>Login</Title>
    </BaseButton>
  );
};

export default Button;
