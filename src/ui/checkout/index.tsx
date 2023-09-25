import Breadcrumbs from "@component/breadcrumbs";
import { Col, Row, Space } from "antd";
import {
  ChooseVoucher,
  Note,
  PaymentMethods,
  ShipInformation,
  TemplateStep,
} from "./components";
import { Text } from "@component/text";
import styled from "styled-components";
import { CartItems, CartTotal } from "@component/cart";
import { useAsync } from "@hooks/useAsync";
import { apiGetListCart } from "services/cart";
import { useMemo } from "react";

const Checkout = () => {
  const [, cartData] = useAsync(apiGetListCart, {
    callOnFirst: true,
  });
  const cartDetail = useMemo(() => cartData?.data?.data || {}, [cartData]);

  const { total_price, details } = cartDetail;

  console.log(details);

  return (
    <StyledContent>
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
            >
              <div
                style={{
                  maxHeight: "450px",
                  overflowY: "auto",
                }}
              >
                <CartItems disabled />
              </div>
            </TemplateStep>
            <TemplateStep number={2} label="Thông tin giao hàng">
              <ShipInformation />
            </TemplateStep>
            <TemplateStep number={3} label="Thông tin tài khoản ">
              <PaymentMethods />
            </TemplateStep>
          </Space>
        </Col>

        <Col md={8} xs={24}>
          <Space direction="vertical" size={16} className="w-full">
            <ChooseVoucher />
            <Note />
            <CartTotal totalPrice={total_price} hideOrderBtn />
          </Space>
        </Col>
      </Row>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  .content-box {
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    font-weight: 500;
  }
`;

export default Checkout;
