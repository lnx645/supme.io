import { BaseButton } from "@app/components/button";
import { TextInput } from "@app/components/text-input/text-input";
import apiRequest from "@app/core/network/api_request";
import { hasObjectKey, joinObject } from "@app/core/utils/object";
import { Container } from "@app/layouts/app/navbar/styled";
import styled from "@emotion/styled";
import { AxiosError } from "axios";
import { useEffect } from "react";
import {
  useFetcher,
  useNavigate,
  type ActionFunction,
} from "react-router";
import { toast } from "sonner";

export const Wrapper = styled.div({
  display: "flex",
  padding: 10,
  maxWidth: 420,
  margin: "auto",
  marginTop: 50,
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
});

const Form = styled.form({
  display: "grid",
  flex: 1,
  width: "100%",
  gridTemplateColumns: "repeat(1fr)",
  gap: 10,
});

const Header = styled.div({
  textAlign: "center",
});
const Title = styled.h1({
  fontSize: 28,
  fontWeight: 800,
});
const Desctipion = styled.span({
  fontSize: 14,
});

const LoginButton = styled(BaseButton)({
  height: 42,
});

type UserResponse = {
  user: any;
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  try {
    const req = await apiRequest.post<UserResponse>("login", {
      email: data.get("email"),
      password: data.get("password"),
    });

    if (req.status != 200) {
      return {
        success: false,
        message: "Login gagal silahkan cobalagi!",
      };
    }
    return {
      success: true,
      message: "Login berhasil, Silahkan tunggu sebentar!",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      const errData = error.response?.data;
      if (errData) {
        if (errData?.password || errData?.email) {
          return { success: false, errors: errData };
        }
        if (errData.message) {
          return { success: false, message: errData.message };
        }
      }
    }
  }
  return false;
};

export const Component = () => {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const loading = fetcher.state != "idle";
  useEffect(() => {
    if (fetcher.data) {
      const status = fetcher.data?.success;
      if (status) {
        toast(fetcher.data?.message);
        navigate("/creator");
      }
    }
  }, [fetcher.data]);
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Masuk ke Akunmu</Title>
          <Desctipion>Silahkan login untuk melanjutkan</Desctipion>
        </Header>
        <Form as={fetcher.Form} method="POST">
          <TextInput
            autoFocus
            autoComplete="email"
            type="email"
            name="email"
            placeholder="Email"
            state={
              hasObjectKey(fetcher.data?.errors, "email") ? "error" : "default"
            }
            error={joinObject(fetcher.data?.errors?.email)}
          />
          <TextInput
            showPw={true}
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            state={
              hasObjectKey(fetcher.data?.errors, "password")
                ? "error"
                : "default"
            }
            error={joinObject(fetcher.data?.errors?.password)}
          />
          <LoginButton isDisabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </LoginButton>
        </Form>
      </Wrapper>
    </Container>
  );
};
