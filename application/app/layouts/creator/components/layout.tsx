import type { ReactNode } from "react";

import * as Base from "./styled/layout.styled";
import Sidebar from "./sidebar";
import { useAsyncValue } from "react-router";

export const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <Base.Wrapper>
      <Base.Sidebar>
        <Sidebar />
      </Base.Sidebar>
      <Base.MainContent>{children}</Base.MainContent>
    </Base.Wrapper>
  );
};
