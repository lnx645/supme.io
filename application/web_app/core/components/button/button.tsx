import { Button as RCAButton, type ButtonProps } from "react-aria-components";
import clsx from "clsx";
import css from "./button.module.css";
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <RCAButton
      className={clsx(
        css["wrapper"],
        css["variant-primary"],
        css["size-sm"],
        css["radius-md"],
        css["type-default"],
      )}
      {...props}
    >
      {children}
    </RCAButton>
  );
};
