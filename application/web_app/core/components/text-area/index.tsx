import React, { useMemo, useState, useEffect } from "react";
import {
  TextArea as TextAreaBase,
  type TextAreaProps as AriaTextAreaProps,
} from "react-aria-components";
import css from "./css.module.css";
import clsx from "clsx";
import ErrorIcon from "@svg/error.svg";
import { X } from "lucide-react";

export interface CustomTextareaProps extends Omit<AriaTextAreaProps, "prefix"> {
  inputSize?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label?: string;
  name?: string;
  errors?: Object;
  onClear?: () => void;
  maxLength?: number;
  rows?: number;
}

export const Textarea = ({
  inputSize = "md",
  color = "default",
  radius = "md",
  label,
  className,
  errors,
  name,
  id,
  onClear,
  onChange,
  maxLength,
  rows = 3,
  ...props
}: CustomTextareaProps) => {
  const [value, setValue] = useState(props.value ?? props.defaultValue ?? "");

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  const inputColor = useMemo(() => (!!errors ? "danger" : color), [errors]);

  const errorMessage = useMemo(() => {
    if (typeof errors === "object" && errors) {
      return Object.values(errors).join(", ");
    }
    return null;
  }, [errors]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleClear = () => {
    setValue("");
    if (onClear) onClear();

    const textareaEl = document.getElementById(id || "") as HTMLTextAreaElement;
    if (textareaEl) {
      textareaEl.value = "";
      textareaEl.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const currentLength =
    typeof value === "string" ? value.length : String(value ?? "").length;

  return (
    <div className={css.wrapper}>
      {label && (
        <label htmlFor={id} className={css.label}>
          {label}
        </label>
      )}

      <div
        className={clsx(
          css.inputContainer,
          css.textareaContainer,
          css[`size-${inputSize}`],
          css[`color-${inputColor}`],
          css[`radius-${radius}`],
          className,
        )}
      >
        <div className={css.inputWrapper}>
          <TextAreaBase
            {...props}
            name={name}
            id={id}
            value={value}
            maxLength={maxLength}
            onChange={handleInputChange}
            rows={rows}
            className={clsx(css.inputElement, css.textareaElement)}
            placeholder={props.placeholder || ""}
          />
        </div>

        {maxLength !== undefined && (
          <span className={clsx(css.characterCounter, css.textareaCounter)}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>

      {errorMessage && (
        <div className={css.errorfield}>
          <ErrorIcon />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
