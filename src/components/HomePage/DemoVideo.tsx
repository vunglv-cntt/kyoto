import { Text } from "@component/text";
import { breakpointDevice } from "@constants/breakpoints";
import { Col, Row } from "antd";
import styled from "styled-components";
import { ViewMoreButton } from "..";

type Props = {};

const DemoVideo = (props: Props) => {
  return (
    <StyledDemoVideo>
      <Col xs={24} md={12}>
        <iframe
          width="100%"
          className="h-[375px] md:h-[558px]"
          src="https://www.youtube.com/embed/cio0_6dN21w?si=avyX2cCLyYGFnF5y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Col>

      <Col xs={24} md={12} className="right-bar min-h-[300px]">
        <Text className="title">KYOTO VIỆT NAM</Text>

        <Text className="description mt-4">
          Máy bay nông nghiệp KYOTO là một loại máy bay không người lái được
          thiết kế đặc biệt để phun thuốc trừ sâu, phân bón và các loại hóa chất
          khác lên đồng ruộng và vườn trồng. Với sự kết hợp giữa công nghệ điều
          khiển tự động và cảm biến thông minh, máy bay nông nghiệp KYOTO có khả
          năng điều chỉnh độ cao, tốc độ và lượng chất lượng phun để đảm bảo sự
          chính xác và hiệu quả cao nhất.
        </Text>

        <Row className="justify-start md:justify-end">
          <ViewMoreButton className="p-0 mt-4">Xem thêm</ViewMoreButton>
        </Row>
      </Col>
    </StyledDemoVideo>
  );
};

const StyledDemoVideo = styled(Row)`
  .right-bar {
    background-color: var(--app-main-color);
    padding: 16px;
    @media ${breakpointDevice.md} {
      padding: 48px;
    }

    span,
    p {
      color: #fff;
    }
  }

  .title {
    font-weight: 800;
    font-size: 32px;
    @media ${breakpointDevice.md} {
      font-size: 48px;
    }
  }

  .title:after {
    content: "";
    background-color: var(--app-sub-color);
    height: 3px;
    display: block;
    width: 35%;
  }

  .description {
  }
`;

export { DemoVideo };
