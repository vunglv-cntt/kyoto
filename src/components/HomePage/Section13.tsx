import React from "react";
import styled from "styled-components";
import Card from "@component/Card";
import CategorySectionCreator from "../CategorySectionCreator";
import Box from "@component/Box";
// Styled-components cho container
const Container = styled.div`
  display: flex;
  gap: 25px;
`;


const CardItem = styled(Card)`
  width: 223px;
  height: 307px;
`;

function Section13() {
  return (
    <CategorySectionCreator iconName="gift" title="Khuyến Mãi " seeMoreLink="#">
      <Box style={{ width: "100%" }} my="-0.25rem">

      <Container>
        {/* Thẻ card 1 */}
        <CardItem>
          <p>Card 1</p>
        </CardItem>

        {/* Thẻ card 2 */}
        <CardItem>
          <p>Card 1</p>
        </CardItem>

        {/* Thẻ card 3 */}
        <CardItem>
          <p>Card 1</p>
        </CardItem>

        {/* Thẻ card 4 */}
        <CardItem>
          <p>Card 1</p>
        </CardItem>

        {/* Thẻ card 5 */}

        <CardItem>
          <p>Card 1</p>
        </CardItem>
        </Container>
      </Box>
    </CategorySectionCreator>
  );
}

export default Section13;
