import { Text } from "@component/text";
import { breakpointDevice } from "@constants/breakpoints";
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {};

const DemoVideo = (props: Props) => {
  return (
    <Row>
      <Col xs={24} md={12}>
        <video />
      </Col>

      <Col xs={24} md={12}>
        <Text className="title">KYOTO VIỆT NAM</Text>

        <Text>
          Máy bay nông nghiệp KYOTO là một loại máy bay không người lái được
          thiết kế đặc biệt để phun thuốc trừ sâu, phân bón và các loại hóa chất
          khác lên đồng ruộng và vườn trồng. Với sự kết hợp giữa công nghệ điều
          khiển tự động và cảm biến thông minh, máy bay nông nghiệp KYOTO có khả
          năng điều chỉnh độ cao, tốc độ và lượng chất lượng phun để đảm bảo sự
          chính xác và hiệu quả cao nhất.
        </Text>
      </Col>
    </Row>
  );
};

const StyledDemoVideo = styled(Row)`
  .title {
    font-weight: 800;
    font-size: 48px;
    @media ${breakpointDevice.md} {
      font-size: 32px;
    }
  }
`;

export default DemoVideo;
