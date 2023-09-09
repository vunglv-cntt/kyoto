import React from "react";
import styled from "styled-components";
import Card from "@component/Card";
import CategorySectionCreator from "../CategorySectionCreator";
import Icon1 from "@component/logo/logo1";
import Logo2 from "@component/logo/logo2";
import Logo4 from "@component/logo/logo4";
import Logo5 from "@component/logo/logo5";
import Logo6 from "@component/logo/logo6";
// Styled-components cho thẻ card
const CardWrapper = styled.div`
  width: 100%;
  height: 264px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Căn chỉnh các phần tử theo chiều ngang giữa thẻ card */
  align-items: center; /* Căn chỉnh các phần tử theo chiều dọc giữa thẻ card */
`;


const CardItem = styled.div`
  width: 189px;
  height: 168px;
  // border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Logo = styled.img`
  max-width: 100%;
  max-height: 80px;
`;


const Text = styled.p`
  text-align: center;
`;

function Section5() {
  return (
    <CategorySectionCreator>
      <Card
        style={{
          marginBottom: "35px",
          width: "100%",
          height: "264px",
          borderRadius: "30px",
        }}
      >
        <div >
          <CardWrapper>
            <CardItem>
              <Icon1 />
              <Text>Text 1</Text>
            </CardItem>

            <CardItem>
              <Logo2 />
              <Text>Text 1</Text>
            </CardItem>

            <CardItem>
              <Icon1 />
              <Text>Text 1</Text>
            </CardItem>

            <CardItem>
              <Logo4 />
              <Text>Text 4</Text>
            </CardItem>

            <CardItem>
              <Logo5 />
              <Text>Text 5</Text>
            </CardItem>

            <CardItem>
              <Logo6 />
              <Text>Text 6</Text>
            </CardItem>
          </CardWrapper>
        </div>
      </Card>
    </CategorySectionCreator>
  );
}

export default Section5;
