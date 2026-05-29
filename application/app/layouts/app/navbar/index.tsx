import * as Style from "./styled";
import Icon from "../../../../svg/icon.svg";
import { Button3d } from "@app/components/button/button3d";
import { NavMenu } from "../menu";
import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";

const Right = styled.div(
  mq({
    display: ["block", "block"],
  }),
);

export const Navbar = () => {
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Row>
          <Style.Col position="left">
            <Style.Logo>
              <Icon />
            </Style.Logo>
            <NavMenu />
          </Style.Col>
          <Style.Col position="right">
            <Right>
              <Button3d>Join as Creator</Button3d>
            </Right>
          </Style.Col>
        </Style.Row>
      </Style.Container>
    </Style.Wrapper>
  );
};
