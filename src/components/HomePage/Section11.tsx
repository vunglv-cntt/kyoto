import React from "react";
import styled from "styled-components";
import Card from "@component/Card";
import CategorySectionCreator from "../CategorySectionCreator";
// import HoverBox from "@component/HoverBox";
// import LazyImage from "@component/LazyImage";
import Box from "@component/Box";
// import Link from "next/link";
// Styled-components cho container
const Container = styled.div`
  display: flex;
  gap: 25px;
`;


const CardItem = styled(Card)`
  width: 291px;
  height: 408px;
`;

function Section11() {
  return (
    <CategorySectionCreator
      iconName="gift"
      title="Sản Phẩm Nổi Bật "
      seeMoreLink="#"
    >
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
        </Container>
      </Box>
    </CategorySectionCreator>
  );
}

export default Section11;
