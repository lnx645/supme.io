import {
  Input as InputBase,
  type InputProps as AriaInputProps,
} from "react-aria-components";
import css from "./css.module.css";
import clsx from "clsx";

export interface CustomInputProps extends AriaInputProps {
  inputSize?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label?: string;
  leftIcon?: React.ReactNode;
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
  id,
  ...props
}: CustomInputProps) => {
  return (
    <div className={css.wrapper}>
      {/* 1. UBAH DIV INI JADI LABEL */}
      <label
        className={clsx(
          css.inputContainer,
          css[`size-${inputSize}`],
          css[`color-${color}`],
          css[`radius-${radius}`],
          className
        )}
      >
        {leftIcon && <span className={css.icon}>{leftIcon}</span>}

        <div className={css.inputWrapper}>
          <InputBase
            id={id}
            className={css.inputElement}
            placeholder={props.placeholder || " "}
            {...props}
          />
          
          {label && (
            /* 2. UBAH LABEL INI JADI SPAN */
            <span className={css.floatingLabel}>
              {label}
            </span>
          )}
        </div>

        {rightIcon && <span className={css.icon}>{rightIcon}</span>}
      </label>
    </div>
  );
};