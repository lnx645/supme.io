import type { ReactNode } from "react";
import css from "./module/aside-menu-gorup.module.css";
export const AsideMenuGroup = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <div className={css.menu_group}>
      <div className={css.menu_header}>
        <span className={css.menu_label}>{label}</span>
      </div>
      <div className={css.menu_content}>{children}</div>
    </div>
  );
};
