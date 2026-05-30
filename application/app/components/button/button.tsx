import { BaseButton } from "./styled";
import styled from "@emotion/styled"
const Title = styled.span({
  fontWeight: 600,
  fontSize: 14,
});
const Button = ({ children }: any) => {
  return (
    <BaseButton>
      <Title>{children}</Title>
    </BaseButton>
  );
};

export  {Button};
