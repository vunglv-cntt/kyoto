import Googlemap from "./Googlemaps";
import { Col, Form, Row } from "antd";
import { StyledAdvise } from "./homepagecss/Advise.style";
import { Text } from "@component/text";
import { BaseInput, BaseTextArea } from "@component/input";
import { Button } from "@component/button";
import { useAppContext } from "@context/app/AppContext";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const Advise: React.FC<HeaderProps> = ({ className }) => {
  const { state } = useAppContext();
  return (
    <StyledAdvise>
      <Col xs={24} md={10} className="px-4 py-6">
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
        <Googlemap
          mapContainerClassName="h-[294px] md:h-[100%] "
          marks={state.branch.branches}
        />
      </Col>
    </StyledAdvise>
  );
};

export default Advise;
