import type { ReactNode } from "react";
import css from "./module/style.module.css";
export const Label = ({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) => {
  return (
    <label htmlFor={id} className={css.label}>
      {children}
    </label>
  );
};
