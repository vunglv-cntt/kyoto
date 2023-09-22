import Breadcrumbs from "@component/breadcrumbs";
import { Col, Row, Space } from "antd";
import { PaymentMethods, ShipInformation, TemplateStep } from "./components";
import { Text } from "@component/text";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <>
      <Breadcrumbs />

      <Row gutter={[24, 24]}>
        <Col md={16} xs={24}>
          <Space direction="vertical" size={16} className="w-full">
            <TemplateStep
              number={1}
              label="Giỏ hàng"
              rightHeaderElement={
                <Text className="text-[#112950]">Xóa tất cả giỏ hàng</Text>
              }
            />
            <TemplateStep number={2} label="Thông tin giao hàng">
              <ShipInformation />
            </TemplateStep>
            <TemplateStep number={3} label="Thông tin tài khoản ">
              <PaymentMethods />
            </TemplateStep>
          </Space>
        </Col>

        <Col md={8} xs={24}>
          Right bar
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
