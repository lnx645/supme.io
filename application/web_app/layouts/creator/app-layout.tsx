import { Outlet } from "react-router";
import css from "./module/layout.module.css";
import { Aside } from "./sidebar/aside";
import MenuBar from "@svg/MaterialSymbolsMenuRounded.svg";
import { Button } from "react-aria-components";
import clsx from "clsx";
export const AppLayout = () => {
  return (
    <div className={clsx(css.wrapper, "@container")}>
      <aside className={clsx(css.aside, "@lg:hidden")}>
        <Aside />
      </aside>
      <div className={css.main}>
        <nav className={css.navbar}>
          <div className={css.container}>
            <div className={css.wrapper_navbar}>
              <div>MN</div>
              <Button className={css.navbar_menu}>
                <MenuBar />
              </Button>
            </div>
          </div>
        </nav>
        <div className={css.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
