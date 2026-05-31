import { BaseButton } from "@app/components/button";
import styled from "@emotion/styled";
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
export const FormWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const SubmitButton = styled(BaseButton)({
    padding:20,
})
