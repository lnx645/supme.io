import { BaseButton } from "@app/components/button";
import { TextInput } from "@app/components/text-input/text-input";
import apiRequest from "@app/core/network/api_request";
import { authStore } from "@app/core/storage/auth_store";
import { Container } from "@app/layouts/app/navbar/styled";
import styled from "@emotion/styled";
import { AxiosError } from "axios";
import { useEffect } from "react";
import {
  useFetcher,
  useNavigate,
  type ActionFunction,
  type LoaderFunction,
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

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  try {
    const req = await apiRequest.post("login", {
      email: data.get("email"),
      password: data.get("password"),
    });
    if (req.status == 200) {
      toast.success("Login Berhasil! Silahkan tunggu");
      return req.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        let dataError = error.response.data;
        if (dataError.message) {
          toast.error(dataError.message);
        }
      }
    }
  }
  return "null";
};
``;

export const loader: LoaderFunction = ({ context }) => {
  return {};
};

export const Component = () => {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const loading = fetcher.state != "idle";
  useEffect(() => {
    if (fetcher.data) {
      navigate("/creator");
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
            required
            autoComplete="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <TextInput
            showPw={true}
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
          />
          <LoginButton isDisabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </LoginButton>
        </Form>
      </Wrapper>
    </Container>
  );
};
