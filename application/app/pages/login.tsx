import { Button3d } from "@app/components/button/button3d";
import { TextInput } from "@app/components/text-input/text-input";
import styled from "@emotion/styled";
import {
  useFetcher,
  type ActionFunction,
  type LoaderFunction,
} from "react-router";

export const Wrapper = styled.div({
  display: "flex",
  padding: 10,
  maxWidth: 320,
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

export const action: ActionFunction = ({ request }) => {
  console.log(request);

  return {};
};

export const loader: LoaderFunction = ({ context }) => {
  console.log(context);

  return {};
};

export const Component = () => {
  const fetcher = useFetcher();
  return (
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
        <Button3d>Login</Button3d>
      </Form>
    </Wrapper>
  );
};
