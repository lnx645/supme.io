import styled from "@emotion/styled";
import { Button as RCABtn } from "react-aria-components/Button";

export const BaseButton = styled(RCABtn)({
  "--color-text": "white",
  "--color-button": "var(--color-primary)",
  "--button-border-size": "1px",
  "--button-gradient-size": "12px",
  "--button-shadow": "rgba(0, 0, 0, 0.15)",
  "--button-border": "rgba(0, 0, 0, 0.15)",
  "--button-highlight": "rgba(255, 255, 255, 0.35)",
  "--button-gradient": "rgba(0, 0, 0, 0.08)",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  height: 32,
  paddingInline: 12,
  paddingBlock: 6,
  borderRadius: 10,
  fontSize: 14,
  fontWeight: "bold",
  color: "var(--color-text)",
  textDecoration: "none",
  border: "1px solid transparent",
  backgroundColor: "var(--color-button)",
  outline: "none",
  cursor: "pointer",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  forcedColorAdjust: "none",
  boxShadow: `rgba(255, 255, 255, .4) 0 1px 0 0 inset; `,
  willChange: "scale, box-shadow, background-color, color",
  transitionProperty: "background-color, color, scale, box-shadow",
  transitionDuration: "150ms",
  "&[data-hovered]": {
    backgroundColor: "var(--color-button)",
    color: "var(--color-text)",
  },
  "&[data-pressed]": {
    boxShadow: "none",
  },
  "&[data-focused]": {
    // boxShadow:"0 0 0 4px rgba(0, 149, 255, .15)"
  },
  "&[data-focus-visible]": {
    outline: "2px solid var(--color-button)",
    outlineOffset: "2px",
  },

  "@media (forced-colors: active)": {
    backgroundColor: "ButtonFace",
    color: "ButtonText",
    borderColor: "ButtonBorder",
    border: "1px solid ButtonBorder",
  },
});
const Title = styled.span({
  fontWeight: 600,
  fontSize: 14,
});
const Button = ({ children }: any) => {
  return (
    <BaseButton>
      <Title>{children}</Title>
    </BaseButton>
  );
};

export default Button;
