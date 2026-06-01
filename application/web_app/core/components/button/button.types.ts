import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { type ButtonProps as BTNPrps } from "react-aria-components/Button";
export type ButtonVariant =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "purple"
  | "orange"
  | "indigo"
  | "teal"
  | "dark"
  | "ghost"
  | "ghost-green"
  | "ghost-red"
  | "ghost-purple"
  | "soft-blue"
  | "soft-green"
  | "soft-purple"
  | "soft-orange"
  | "soft-red";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export type ButtonType = "default" | "icon";

export interface ButtonProps extends BTNPrps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  buttonType?: ButtonType;
}
