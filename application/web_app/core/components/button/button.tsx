import clsx from "clsx";
import css from "./button.module.css"; // Sesuaikan dengan path file CSS kamu
import type { ButtonProps } from "./button.types";
import { Button as RCAButton } from "react-aria-components/Button";
export const Button = ({
  children,
  variant = "primary",
  size = "sm",
  radius = "md",
  buttonType = "default",
  className,
  ...props
}: ButtonProps) => {
  return (
    <RCAButton
      className={clsx(
        css["wrapper"],
        css[`variant-${variant}`],
        css[`size-${size}`],
        css[`radius-${radius}`],
        css[`type-${buttonType}`],
        className,
      )}
      {...props}
    >
      {children}
    </RCAButton>
  );
};
