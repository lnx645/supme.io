import * as Style from "./styled";
import Icon from "../../../../svg/icon.svg";
import { Button3d } from "@app/components/button/button3d";
import { NavMenu } from "../menu";
import { mq } from "@app/utils/mq";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { MobileNavbar } from "../mobile-navbar";
import { useEffect } from "react";
import {Button} from "@app/components/button";

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
              <Button>Join as Creator</Button>
            </Right>
          </Style.Col>
        </Style.Row>
      </Style.Container>
      {/* NAVBAR MOBILE */}
      {createPortal(<MobileNavbar />, document.body)}
      {/* END:NAVBAR MOBILE */}
    </Style.Wrapper>
  );
};
