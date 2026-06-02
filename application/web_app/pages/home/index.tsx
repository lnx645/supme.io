import css from "./css.module.css";

import { useAsyncValue } from "react-router";
export const Component = async () => {
  const data: any = useAsyncValue();
  return <div className={css.wrapper}>da </div>;
};
