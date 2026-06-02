import {
  Input as InputBase,
  type InputProps as AriaInputProps,
} from "react-aria-components";
import css from "./css.module.css";
import clsx from "clsx";
import { useMemo } from "react";
import ErrorIcon from "@svg/error.svg";
export interface CustomInputProps extends AriaInputProps {
  inputSize?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label?: string;
  name?: string;
  leftIcon?: React.ReactNode;
  errors?: Object;
  rightIcon?: React.ReactNode;
}

export const Input = ({
  inputSize = "md",
  color = "default",
  radius = "md",
  label,
  leftIcon,
  rightIcon,
  className,
  errors,
  name,
  id,
  ...props
}: CustomInputProps) => {
  const inputColor = useMemo(() => (!!errors ? "danger" : color), [errors]);
  let errorMessage = useMemo(() => {
    if (typeof errors === "object" && errors) {
      return Object.values(errors).join(",");
    }
    return null;
  }, [errors]);

  return (
    <div className={css.wrapper}>
      <label
        className={clsx(
          css.inputContainer,
          css[`size-${inputSize}`],
          css[`color-${inputColor}`],
          css[`radius-${radius}`],
          className,
        )}
      >
        {leftIcon && <span className={css.icon}>{leftIcon}</span>}

        <div className={css.inputWrapper}>
          <InputBase
            name={name}
            id={id}
            className={css.inputElement}
            placeholder={props.placeholder || " "}
            {...props}
          />

          {label && <span className={css.floatingLabel}>{label}</span>}
        </div>
        {rightIcon && <span className={css.icon}>{rightIcon}</span>}
      </label>
      {errorMessage ? (
        <div className={css.errorfield}>
          <ErrorIcon />
          <span>{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
};
