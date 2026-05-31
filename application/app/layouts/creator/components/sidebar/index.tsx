import SidebarFooter from "./sidebar-footer";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarBase as Base } from "./sidebar.styled";
import Home from "@svg/icons/home.svg";
import Heart from "@svg/icons/heart.svg";
import ShoppingCart from "@svg/icons/shopping-cart.svg";
import Video from "@svg/icons/video-minus.svg";
import Messages from "@svg/icons/message.svg";
import Integration from "@svg/icons/link.svg";
import Settings from "@svg/icons/settings.svg";
import Puzzle from "@svg/icons/puzzle.svg";
import JoinCreator from "@svg/icons/users-plus.svg";
import Statistic from "@svg/icons/chart-dots-2.svg";
import Logo from "@svg/icon.svg";
import { useAsyncValue } from "react-router";
export default function Sidebar() {
  const val: any = useAsyncValue();

  const isCreator = val?.user?.is_creator;
  console.log(isCreator);

  return (
    <Base.Wrapper>
      <Base.Navbar>
        <Logo />
      </Base.Navbar>
      <Base.Main>
        {!isCreator ? (
          <SidebarMenu isBlur={false} icon={JoinCreator}>
            JOIN CREATOR
          </SidebarMenu>
        ) : null}
        <SidebarMenu isBlur={!isCreator} icon={Home}>
          Home
        </SidebarMenu>
        <SidebarMenu isBlur={!isCreator} icon={Heart}>
          Live Donation
        </SidebarMenu>

        <SidebarMenu isBlur={!isCreator} icon={Statistic}>
          Analitik
        </SidebarMenu>
        <Base.Separator>FITUR UTAMA</Base.Separator>
        <SidebarMenu isBlur={!isCreator} icon={Video}>
          Stream Overlay
        </SidebarMenu>
        <SidebarMenu isBlur={!isCreator} icon={Messages}>
          Messages
        </SidebarMenu>
        <SidebarMenu isBlur={!isCreator} icon={Integration}>
          Integration
        </SidebarMenu>
        <SidebarMenu isBlur={!isCreator} icon={Settings}>
          Settings
        </SidebarMenu>
        <SidebarMenu isBlur={!isCreator} icon={Puzzle}>
          API
        </SidebarMenu>
      </Base.Main>
      <Base.Bottom>
        <SidebarFooter />
      </Base.Bottom>
    </Base.Wrapper>
  );
}
