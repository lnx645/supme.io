import { Button } from "@web/core/components/button/button";
import css from "./css.module.css";
import { Input } from "@web/core/components/input";
import { useEffect } from "react";
export const Component = () => {
  useEffect(() => {
    console.log("OKE SUCCESS");
    
  }, []);
  return (
    <div className={css.wrapper}>
      <p className="font-sans font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
        delectus dolorum molestias corporis ut. Commodi autem repellat similique
        vel maxime quo voluptates, deleniti molestias, accusamus aperiam ipsum
        blanditiis itaque architecto.
      </p>
      <Input
        radius="lg"
        inputSize="sm"
        type="email"
        name="email"
        label="Email"
      />
      <Input
        disabled
        value={"YAYAN"}
        radius="lg"
        inputSize="sm"
        type="password"
        label="Password"
      />
      <Button>Login</Button>
    </div>
  );
};
