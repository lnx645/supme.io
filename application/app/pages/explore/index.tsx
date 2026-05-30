import { CreatorLists } from "@app/features/explore/components/creator-lists";
import * as Styled from "./styled";
import { CreatorCategoryLists } from "@app/features/explore";
import { Container } from "@app/layouts/app/navbar/styled";

export const Component = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.PageTitle>Explore Creator</Styled.PageTitle>
        <Styled.Main>
          <CreatorCategoryLists />
          <CreatorLists />
        </Styled.Main>
      </Styled.Wrapper>
    </Container>
  );
};
