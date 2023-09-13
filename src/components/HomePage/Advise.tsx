import { Col, Form, Row } from "antd";
import { StyledAdvise } from "./homepagecss/Advise.style";
import { Text } from "@component/text";
import { BaseInput, BaseTextArea } from "@component/input";
import { Button } from "@component/button";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const Advise: React.FC<HeaderProps> = ({ className }) => {
  return (
    <StyledAdvise>
      <Col xs={24} md={10} className={`px-4 py-6 ${className}`}>
        <Text className="title">TƯ VẤN MIỄN PHÍ</Text>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item name="firstname">
              <BaseInput placeholder="Họ" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastname">
              <BaseInput placeholder="Tên" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="email">
              <BaseInput placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="phonenumber">
              <BaseInput placeholder="Số điện thoại" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="note">
              <BaseTextArea rows={3} placeholder="Nội dung quan tâm" />
            </Form.Item>
          </Col>
        </Row>

        <Text className="my-3">
          Vui lòng để lại thông tin để được tư vấn miễn phí
        </Text>

        <Button htmlType="submit" className="px-3 py-2 w-full">
          Gửi đi
        </Button>
      </Col>

      <Col xs={24} md={14}>
        {/* <Googlemap
          mapContainerClassName="h-[294px] md:h-[100%] "
          marks={[{ lat: 10.858889, lng: 106.675362 }]}
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3773185870277!2d106.67278917597018!3d10.858879389294968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529cb26eabf65%3A0xb1ccae323f7ca7ab!2zNyBLaHUgQmnhu4d0IFRo4buxLCBUaOG6oW5oIFh1w6JuLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1694613776782!5m2!1svi!2s"
          width="100%"
          loading="lazy"
          className="h-[294px] md:h-[100%]"
        ></iframe>
      </Col>
    </StyledAdvise>
  );
};

export default Advise;
