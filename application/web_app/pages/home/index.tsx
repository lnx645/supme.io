import { Button } from "@web/core/components/button/button";
import css from "./css.module.css";
import { Input } from "@web/core/components/input";
import { useId } from "react";
export const Component = () => {
  return (
    <div className={css.wrapper}>
     
      <Input  radius="lg" inputSize="sm" type="email" name="email" label="Email" />
      <Input  radius="lg" inputSize="sm" type="password" label="Password" />
      <Button>Login</Button>
    </div>
  );
};
