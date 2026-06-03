import { Outlet } from "react-router";
import css from "./module/layout.module.css";
import { Aside } from "./sidebar/aside";
export const AppLayout = () => {
  return (
    <div className={css.wrapper}>
      <aside className={css.aside}>
        <Aside />
      </aside>
      <div className={css.main}>
        <nav className={css.navbar}>WJWJJW</nav>
        <div className={css.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
