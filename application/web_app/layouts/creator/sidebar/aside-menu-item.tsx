import type { Component, ComponentType, ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import css from "./module/aside-menu-item.module.css";
import clsx from "clsx";
export const AsideMenuItem = ({
  children,
  icon: Icon,
  badge,
  to,
}: {
    badge?:number,
  icon: ComponentType<any>;
  children: ReactNode;
} & NavLinkProps) => {
  return (
    <NavLink className={clsx(css.menu_item)} to={to}>
      <div className={clsx(css.menu_content)}>
        {Icon ? <Icon/> : null}
        <span className={css.menu_name}>{children}</span>
      </div>
      {badge ? <span className={css.badge}>{badge}</span> : null}
    </NavLink>
  );
};
