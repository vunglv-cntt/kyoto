import React from "react";
import styled from "styled-components";
import Card from "@component/Card";
// Styled-components cho thẻ card
const CardWrapper = styled.div`
  width: 100%;
  height: 264px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; 
`;


const CardItem = styled.div`
  width: 189px;
  height: 168px;
  border: 1px solid #ccc;
  margin: 7.5px; 
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Styled-components cho logo
const Logo = styled.img`
  max-width: 100%;
  max-height: 80px;
`;

// Styled-components cho văn bản
const Text = styled.p`
  text-align: center;
`;

function CustomCard() {
  return (
    <Card style={{marginBottom: "35px"}}>
      <div style={{textAlign : "center"}} >
      <CardWrapper >
        {/* Phần tử 1 */}
        <CardItem>
          <Logo src="/path/to/logo1.png" alt="Logo 1" />
          <Text>Text 1</Text>
        </CardItem>

        {/* Phần tử 2 */}
        <CardItem>
          <Logo src="/path/to/logo2.png" alt="Logo 2" />
          <Text>Text 2</Text>
        </CardItem>

        {/* Phần tử 3 */}
        <CardItem>
          <Logo src="/path/to/logo3.png" alt="Logo 3" />
          <Text>Text 3</Text>
        </CardItem>

        {/* Phần tử 4 */}
        <CardItem>
          <Logo src="/path/to/logo4.png" alt="Logo 4" />
          <Text>Text 4</Text>
        </CardItem>

        {/* Phần tử 5 */}
        <CardItem>
          <Logo src="/path/to/logo5.png" alt="Logo 5" />
          <Text>Text 5</Text>
        </CardItem>

        {/* Phần tử 6 */}
        <CardItem>
          <Logo src="/path/to/logo6.png" alt="Logo 6" />
          <Text>Text 6</Text>
        </CardItem>
      </CardWrapper>

      </div>
    </Card>
  );
}

export default CustomCard;
