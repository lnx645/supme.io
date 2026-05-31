import { TextInput } from "@app/components/text-input/text-input";
import { Wrapper,SubmitButton, FormWrapper } from "./styled/sign-form.styled";
import { Button } from "@app/components/button";

export const SignForm = () => {
  return (
    <Wrapper>
      <h2>DAFTAR AKUN</h2>
      <FormWrapper>
        <TextInput value={"dadanhidyt@gmail.com"} disabled placeholder="Email Anda" />
        <TextInput placeholder="Nama Lengkap" />
        <TextInput type="password" placeholder="Kata Sandi" />
        <TextInput type="password" placeholder="Verifikasi Kata Sandi" />
        <SubmitButton>Next</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};
