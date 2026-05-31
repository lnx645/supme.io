import type { ComponentType, ReactNode } from "react";
import { SidebarMenuBase as Base } from "./styled";

type Props = {
  children: ReactNode;
  icon: ComponentType<any>;
};
export const SidebarMenu = ({ children, icon: Icon }: Props) => {
  return (
    <Base.Wrapper>
      {Icon ? (
        <Base.Icon>
          <Icon />
        </Base.Icon>
      ) : null}
      <Base.LabelText>{children}</Base.LabelText>
      <Base.Indicator></Base.Indicator>
    </Base.Wrapper>
  );
};
