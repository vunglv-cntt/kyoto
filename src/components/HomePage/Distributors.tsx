import { Col, Row } from "antd";
import { Title } from "@component/title";
import { Text } from "@component/text";
import { Button } from "@component/button";
import { StyledDistributors } from "./homepagecss/Distributors.style";
import { shipBoxImg, shipCarImg, shipImg, shipMapImg } from "@constants/images";
import { Image } from "@component/image";

function Distributors() {
  const informations = [
    { icon: shipBoxImg, text: "300+", description: "Cửa hàng phân phối" },
    { icon: shipCarImg, text: "1,000+", description: "Giao hàng tận nơi", className: "mt-0 md:mt-[16px]" },
    { icon: shipImg, text: "500", description: "Nhập khẩu chính hãng", className: "mt-0 md:mt-[-16px]" },
    { icon: shipMapImg, text: "80", description: "Hậu mãi", className: "" },
  ];

  return (
    <StyledDistributors gutter={[32, 16]}>
      <Col xs={24} md={12}>
        <Title>Kênh phân phối chính</Title>

        <Text className="mt-4 mb-6">
          Hơn 100 đại lý phân phối tại tất cả các tỉnh thành phố, giao hàng tận
          nơi bảo hành và hậu mãi chu đáoHơn 100 đại lý phân phối tại tất cả các
          tỉnh thành phố, giao hàng tận nơi bảo hành và hậu mãi chu đáoHơn 100
          đại lý phân phối tại tất cả các tỉnh thành phố, giao hàng tận nơi bảo
          hành và hậu mãi chu đáo
        </Text>

        <Row className="gap-4">
          <Button className="button left-button">Get Started</Button>
          <Button className="button right-button">Learn more</Button>
        </Row>
      </Col>
      <Col xs={24} md={12}>
        <Row gutter={[16, 16]}>
          {informations.map((information, id) => (
            <Col
              key={id}
              xs={24}
              md={12}
              className={information?.className}
            >
              <div className="distributor">
                <Image
                  src={information.icon}
                  alt="icon"
                  className="flex justify-center"
                />
                <Text className="title">{information.text}</Text>
                <Text className="description">{information.description}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </StyledDistributors>
  );
}

export { Distributors };
