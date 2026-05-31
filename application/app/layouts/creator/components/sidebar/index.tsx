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
import Statistic from "@svg/icons/chart-dots-2.svg";
import Logo from "@svg/icon.svg";
import { useAsyncValue } from "react-router";
export default function Sidebar() {
  const value  : any= useAsyncValue();

  return (
    <Base.Wrapper>
      <Base.Navbar>
        <Logo />
      </Base.Navbar>
      <Base.Main>
        <SidebarMenu icon={Home}>Home</SidebarMenu>
        <SidebarMenu icon={Heart}>Live Donation</SidebarMenu>
        <SidebarMenu icon={ShoppingCart}>Shop</SidebarMenu>
        <SidebarMenu icon={Statistic}>Analitik</SidebarMenu>
        <Base.Separator>FITUR UTAMA</Base.Separator>
        <SidebarMenu icon={Video}>Stream Overlay</SidebarMenu>
        <SidebarMenu icon={Messages}>Messages</SidebarMenu>
        <SidebarMenu icon={Integration}>Integration</SidebarMenu>
        <SidebarMenu icon={Settings}>Settings</SidebarMenu>
        <SidebarMenu icon={Puzzle}>API</SidebarMenu>
      </Base.Main>
      <Base.Bottom>
        <SidebarFooter />
      </Base.Bottom>
    </Base.Wrapper>
  );
}
