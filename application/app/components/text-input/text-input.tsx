import { useId, useState } from "react";
import EyeShow from "./icons/show.svg";
import EyeHide from "./icons/hide.svg";
import { type InputProps as RcaInputProps } from "react-aria-components/Input";
import {
  Container,
  InputBase,
  InputWrapper,
  Label,
  Message,
  RequiredIndicator,
  Placeholder,
  type InputState,
  PasswordToggle,
} from "./styled";

type InputProps = {
  placeholder: string;
  state?: InputState;
  showPw?: boolean;
  name?: string;
  error?: string;
} & RcaInputProps;

export const TextInput = ({
  placeholder,
  error,
  name,
  state = "default",
  type,
  required,
  disabled,
  ...props
}: InputProps) => {
  const id = useId();
  const [showPw, setShowPw] = useState<boolean>(false);

  function showPassword() {
    if (type === "password" && !disabled) {
      setShowPw((prev) => !prev);
    }
  }

  return (
    <Container>
      <Label htmlFor={id} data-disabled={disabled ? "" : undefined}>
        <InputWrapper>
          <InputBase
            type={type === "password" ? (showPw ? "text" : "password") : type}
            id={id}
            key={id}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            state={state}
            {...props}
          />
          <Placeholder state={state} disabled={disabled}>
            {placeholder}
            {required ? <RequiredIndicator>*</RequiredIndicator> : null}
          </Placeholder>
          {type === "password" ? (
            <PasswordToggle
              onClick={showPassword}
              data-el="password-toggle"
              type="button"
              disabled={disabled}
            >
              {showPw ? <EyeShow /> : <EyeHide />}
            </PasswordToggle>
          ) : null}
        </InputWrapper>
        {!!error && !disabled ? (
          <Message state="error">{error}</Message>
        ) : null}
      </Label>
    </Container>
  );
};