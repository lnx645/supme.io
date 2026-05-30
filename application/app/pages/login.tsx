import { BaseButton } from "@app/components/button";
import { TextInput } from "@app/components/text-input/text-input";
import apiRequest from "@app/core/network/api_request";
import { Container } from "@app/layouts/app/navbar/styled";
import styled from "@emotion/styled";
import Loading from "@svg/icons/LineMdLoadingAltLoop.svg";
import { AxiosError } from "axios";
import {
  useFetcher,
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
  console.log(data.get("email"));
  try {
    const req = await apiRequest.post("login", {
      email: data.get("email"),
      password: data.get("password"),
    });
    if (req.status == 200) {
      toast.success("Login Berhasil! Silahkan tunggu");
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
  return {};
};
``;

export const loader: LoaderFunction = ({ context }) => {
  console.log(context);

  return {};
};

export const Component = () => {
  const fetcher = useFetcher();

  const loading = fetcher.state != "idle";

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
