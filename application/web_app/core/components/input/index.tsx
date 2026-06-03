import React, { useMemo, useState, useEffect } from "react";
import {
  Input as InputBase,
  type InputProps as AriaInputProps,
} from "react-aria-components";
import css from "./css.module.css";
import clsx from "clsx";
import ErrorIcon from "@svg/error.svg";
import { X } from "lucide-react";

export interface CustomInputProps extends Omit<AriaInputProps, 'prefix'> {
  inputSize?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label?: string;
  name?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: React.ReactNode; 
  suffix?: React.ReactNode; 
  isClearable?: boolean;    
  errors?: Object;
  onClear?: () => void;     
  maxLength?: number; // Tambahkan tipedata eksplisit untuk kenyamanan autocomplete
}

export const Input = ({
  inputSize = "md",
  color = "default",
  radius = "md",
  label,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  isClearable = false,
  className,
  errors,
  name,
  id,
  onClear,
  onChange,
  maxLength,
  ...props
}: CustomInputProps) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleClear = () => {
    setValue("");
    if (onClear) onClear();
    
    const inputEl = document.getElementById(id || "") as HTMLInputElement;
    if (inputEl) {
      inputEl.value = "";
      inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  // Hitung jumlah karakter saat ini
  const currentLength = typeof value === "string" ? value.length : String(value ?? "").length;

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
          css[`size-${inputSize}`],
          css[`color-${inputColor}`],
          css[`radius-${radius}`],
          className
        )}
      >
        {leftIcon && <span className={css.icon}>{leftIcon}</span>}
        {prefix && <span className={css.prefix}>{prefix}</span>}

        <div className={css.inputWrapper}>
          <InputBase
            {...props}
            name={name}
            id={id}
            value={value}
            maxLength={maxLength}
            onChange={handleInputChange}
            className={css.inputElement}
            placeholder={props.placeholder || ""}
          />
        </div>

        {/* TOMBOL CLEAR */}
        {isClearable && value && (
          <button
            type="button"
            className={css.clearButton}
            onClick={handleClear}
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )}

        {/* CHARACTER COUNTER (Muncul otomatis jika properti maxLength diisi) */}
        {maxLength !== undefined && (
          <span className={css.characterCounter}>
            {currentLength}/{maxLength}
          </span>
        )}

        {suffix && <span className={css.suffix}>{suffix}</span>}
        {rightIcon && <span className={css.icon}>{rightIcon}</span>}
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