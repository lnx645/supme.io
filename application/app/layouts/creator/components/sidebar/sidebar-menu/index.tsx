import type { ComponentType, ReactNode } from "react";
import { SidebarMenuBase as Base } from "./styled";
import { useAsyncValue } from "react-router";

type Props = {
  children: ReactNode;
  icon: ComponentType<any>;
  isBlur : boolean,
};
export const SidebarMenu = ({ children, icon: Icon,isBlur }: Props) => {

  const data : any = useAsyncValue()

  return (
    <Base.Wrapper isBlur={isBlur}>
      {Icon ? (
        <Base.Icon>
          <Icon />
        </Base.Icon>
      ) : null}
      <Base.LabelText>{children}</Base.LabelText>
      <Base.Indicator>2</Base.Indicator>
    </Base.Wrapper>
  );
};
