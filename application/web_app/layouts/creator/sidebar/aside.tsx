import { useAsyncValue } from "react-router";
import css from "./module/sidebar.module.css";
import { useMemo } from "react";
export const Aside = () => {
  const value: any = useMemo(() => useAsyncValue(), []);

  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>dada</nav>
      <div className={css.main}>
        sd
      </div>
      <footer className={css.footer}>
        <div className={css.avatar}></div>
        <div className={css.footer_user}>
          <span className={css.footer_user_name}>{value?.user?.name}</span>
          <span className={css.footer_role}>@{value?.user?.username}</span>
        </div>
      </footer>
    </div>
  );
};
