import { Item, Wrapper } from "./styled";

import Explore from "../../../../svg/compas.svg";
import Search from "../../../../svg/search.svg";
import Login from "../../../../svg/login.svg";

export const NavMenu = () => {
  return (
    <Wrapper>
      <Item to={"/explore"}>
        <Explore />
        <span>Explore</span>
      </Item>
      <Item to={"/search"}>
        <Search />
        <span>Search</span>
      </Item>
      <Item to={"/login.php"}>
        <Login />
        <span>Login</span>
      </Item>
    </Wrapper>
  );
};
