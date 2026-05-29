import Explore from "@svg/compas.svg";
import Search from "@svg/search.svg";
import Notification from "@svg/notification.svg";
import Login from "@svg/login.svg";
import Store from "@svg/store.svg";
import { MenuItemMobile, Wrapper } from "./styled";

export const MobileNavbar = () => {
  return (
    <Wrapper data-id="nav-menu-mobile">
      <MenuItemMobile to={"/explore"}>
        <Explore />
      </MenuItemMobile>
      <MenuItemMobile to={"/search"}>
        <Search />
      </MenuItemMobile>
      <MenuItemMobile to={"/login.php"}>
        <Store />
      </MenuItemMobile>
      <MenuItemMobile to={"/store"}>
        <Notification />
      </MenuItemMobile>
    </Wrapper>
  );
};
