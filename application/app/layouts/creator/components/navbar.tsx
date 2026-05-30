import * as Base from "@app/layouts/app/navbar/styled";

import Styled from "@emotion/styled";

const BaseNavbar = Styled(Base.Wrapper)({
  "--nav-height": "56px",
  paddingInline: 10,
  background: "#fff",
  backdropFilter: "blur(0)",
});

export const Navbar = () => {
  return (
    <BaseNavbar>
      <Base.Row>
        <Base.Col position="left">MENU</Base.Col>
        <Base.Col position="right">MENU</Base.Col>
      </Base.Row>
    </BaseNavbar>
  );
};
