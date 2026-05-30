import { Item, Wrapper } from "./styled";
export const NavMenu = () => {
  return (
    <Wrapper>
      <Item to={"/explore"}>
        <span>Explore</span>
      </Item>
      <Item to={"/search"}>
        <span>Search</span>
      </Item>
      <Item to={"/store"}>
        <span>Store</span>
      </Item>
      <Item to={"/creator"}>
        <span>Creator</span>
      </Item>
    </Wrapper>
  );
};
