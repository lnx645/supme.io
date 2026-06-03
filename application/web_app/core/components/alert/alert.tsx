import type { ReactNode } from "react";
import css from "./module/css.module.css";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

export const Alert = ({ children }: Props) => {
  return <div className={clsx(css.alert)}>{children}</div>;
};
