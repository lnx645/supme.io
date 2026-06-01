import { Input } from "@web/core/components/input";
import css from "./module/style.module.css";
import { Button } from "@web/core/components/button/button";
import { useFetcher, type ActionFunction } from "react-router";
import { http } from "@web/core/network/api_client";
import RingSpinner from "@web/core/components/spinner/LoadingSpinner";
import { toast } from "sonner";

export const action: ActionFunction = async ({ request }) => {
  toast.error("loremdajdslkd sdisoidusoi dsud")
  const adata = await request.formData();
  const [email_or_username, password] = [
    adata.get("email"),
    adata.get("password"),
  ];
  try {
    await http.post("api/login", { email_or_username, password });
  } catch (error) {
    console.log(error);
  }
};

export const Component = () => {
  const fetcher = useFetcher();
  const loading = fetcher.state != "idle";
  return (
    <div className={css.login}>
      <div className={css.login_wrapper}>
        <div className={css.login_title}>
          <span>Login</span>
          <p className={css.login_description}>Login Untuk Memulai</p>
        </div>
        <fetcher.Form method="POST" className={css.form}>
          <Input
            disabled={loading}
            name="email_or_username"
            type="text"
            inputSize="xs"
            label="Email / Username"
          />
          <Input
            disabled={loading}
            name="password"
            type="password"
            inputSize="xs"
            label="Password"
          />
          <div className={css.button_form}>
            <Button isDisabled={loading} type="submit">
             {loading ?  <RingSpinner/> : "Login"}
            </Button>
            <Button variant="soft-blue">Lupa Password?</Button>
            <div className={css.button_register_link}>
              <Button variant="ghost">Buat Akun Baru</Button>
            </div>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};
