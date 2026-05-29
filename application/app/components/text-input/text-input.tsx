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
  ...props
}: InputProps) => {
  const id = useId();
  const [showPw, setShowPw] = useState<boolean>(false);
  function showPassword() {
    if (type === "password") {
      setShowPw(!showPw);
    }
  }

  return (
    <Container>
      <Label htmlFor={id}>
        <InputWrapper>
          <InputBase
            type={type == "password" ? (showPw ? "text" : "password") : type}
            id={id}
            key={id}
            name={name}
            required={required}
            placeholder="Email"
            state={state}
            {...props}
          />
          <Placeholder state={state}>
            {placeholder}
            {required ? <RequiredIndicator>*</RequiredIndicator> : null}
          </Placeholder>
          {type == "password" ? (
            <PasswordToggle
              onClick={showPassword}
              data-el="password-toggle"
              type="button"
            >
              {showPw ? <EyeShow /> : <EyeHide />}
            </PasswordToggle>
          ) : null}
        </InputWrapper>
        {!!error ? <Message state="error">{error}</Message> : null}
      </Label>
    </Container>
  );
};
