import { Input } from "@web/core/components/input";
import css from "./module/style.module.css";
import { Button } from "@web/core/components/button/button";
import {
  data,
  useFetcher,
  useNavigate,
  type ActionFunction,
} from "react-router";
import { http } from "@web/core/network/api_client";
import RingSpinner from "@web/core/components/spinner/LoadingSpinner";
import { toast } from "sonner";
import { useEffect, useMemo } from "react";

export const action: ActionFunction = async ({ request }) => {
  const adata = await request.formData();
  const [email, password] = [adata.get("email"), adata.get("password")];
  try {
    const req = await http.post("api/login", {
      email,
      password,
    });
    return {
      success: true,
    };
  } catch (error: any) {
    return {
      message: error?.message,
      errors: error?.errors,
    };
  }
};

export const Component = () => {
  const fetcher = useFetcher();
  const errors = useMemo(() => fetcher.data?.errors, [fetcher.data?.errors]);
  const loading = fetcher.state != "idle";
  const navigate = useNavigate();
  useEffect(() => {
    if (fetcher.data) {
      console.log(fetcher.data);

      if (fetcher.data?.success) {
        navigate("/creator");
      }
      if (fetcher.data?.message && !errors) {
        toast.error(fetcher.data?.message);
      }
    }
  }, [fetcher.data]);
  return (
    <div className={css.login}>
      <div className={css.login_wrapper}>
        <div className={css.login_title}>
          <span>Login</span>
          <p className={css.login_description}>Login Untuk Memulai</p>
        </div>
        <fetcher.Form method="POST" className={css.form}>
          <Input
            errors={errors?.email}
            disabled={loading}
            name="email"
            type="text"
            inputSize="xs"
            label="Email / Username"
          />
          <Input
            errors={errors?.password}
            disabled={loading}
            name="password"
            type="password"
            inputSize="xs"
            label="Password"
          />
          <div className={css.button_form}>
            <Button isDisabled={loading} type="submit">
              {loading ? <RingSpinner /> : "Login"}
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
