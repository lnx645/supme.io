import type { ReactNode } from "react";

import * as Base from "./styled/layout.styled";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Base.Wrapper>
      <Base.Sidebar>Olsear</Base.Sidebar>
      <Base.MainContent>{children}</Base.MainContent>
    </Base.Wrapper>
  );
};
