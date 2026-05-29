import styled from "@emotion/styled";
import { Input } from "react-aria-components/Input";

export type InputState = "default" | "error" | "warning" | "success";

const stateColor = {
  default: "#86868b",
  error: "#e30000",
  warning: "#ff9500",
  success: "#34c759",
};

export const RequiredIndicator = styled.span({
  color: "red",
  display: "inline-flex",
  placeItems: "center",
  marginLeft: 3,
});

export interface StateProps {
  state?: InputState;
}

export const Container = styled.div({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
});

export const TextLength = styled.div({
  position: "absolute",
  right: 10,
  fontSize: 9,
  fontWeight: 600,
  top: 10,
});
export const PasswordToggle = styled.button({
  position: "absolute",
  opacity: 0,
  background: "none",
  marginRight: 3,
  color: "#86868b",
  border: "none",
  right: 0,
  transition:"all 0.4s ease-in-out"
});
export const Label = styled.label({
  position: "relative",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  [`&:focus-within,&:active`]: {
    "button[data-el='password-toggle']": {
      opacity: 1,
    },
  },
});

export const InputWrapper = styled.div({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export const InputBase = styled(Input)<StateProps>(({ state = "default" }) => ({
  width: "100%",
  padding: "16px 8px 8px 10px",
  appearance: "none",
  background: "#fff",
  border: `1px solid ${stateColor[state]}`,
  borderRadius: "8px",
  boxSizing: "border-box",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  color: "rgb(82, 82, 82)",

  "&::placeholder": {
    color: "transparent",
  },

  "&:focus ~ span, &:not(:placeholder-shown) ~ span": {
    transform: "translate(10px, 4px) scale(0.75)",
    color: stateColor[state],
    fontWeight: 600,
  },
  "&:-webkit-autofill ~ span": {
    transform: "translate(10px, 4px) scale(0.75)",
    color: stateColor[state],
    fontWeight: 600,
  },
  "&[data-focused]": {
    borderColor: stateColor[state],
    boxShadow: `0 0 0 3px ${stateColor[state]}33`,
  },
}));

export const Placeholder = styled.span<StateProps>(({ state = "default" }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  transform: "translate(10px, 14px) scale(1)",
  transformOrigin: "top left",
  fontSize: "14px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "start",
  color: stateColor[state],
  pointerEvents: "none",
  transition:
    "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease-in-out",
}));

export const Message = styled.div<StateProps>(({ state = "default" }) => ({
  marginTop: "2px",
  fontSize: "12px",
  color: stateColor[state],
  paddingLeft: "4px",
  fontWeight: 500,
}));
