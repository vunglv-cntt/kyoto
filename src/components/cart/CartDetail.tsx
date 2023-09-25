import { useMemo } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetListCart } from "services/cart";
import { Row, Col, Card, Button } from "antd";
import { StyledCartList } from "./Cardstyle/CarStyled";
import { CartTotal } from "./CartTotal";
import CartItem from "./CartItem";
import { CartItems } from "./CartItems";
function CartDetail() {
  const [, cartData] = useAsync(apiGetListCart, {
    callOnFirst: true,
  });
  const cartDetail = useMemo(() => cartData?.data?.data, [cartData]);

  if (!cartDetail) {
    return <span style={{ fontSize: 20 }}>Bạn chưa có sản phẩm nào</span>;
  }
  const { total_price } = cartDetail;
  const products = cartDetail.details.map((detail, index) => ({
    name: detail.product.name,
    price: detail.product.price,
    quantity: detail.quantity,
    image: detail.product.images[0].url,
  }));
  return (
    <StyledCartList className="mt-4">
      <Row gutter={[16, 16]} className="rowStyle">
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
          <Row gutter={[16, 16]} className="title-price">
            <Col span={24}>
              <Card
                className="Col-left"
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap",
                  maxHeight: "450px",
                  overflowY: "auto",
                }}
              >
                <div className="center-row justify-between">
                  <span className="Giohang">Giỏ hàng</span>
                  <span className="deleteAllCart">Xóa tất cả giỏ hàng</span>
                </div>

                <CartItems />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <CartTotal totalPrice={total_price} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col
              className="col-rightDown"
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
            >
              <Card className="Col-right-hand">
                <Card style={{ height: "173px" }}>
                  <Row>
                    <Col>
                      <span style={{ fontWeight: "400" }}>
                        Các hình thức gửi hàng đến khách lẻ
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        display: "flex",
                        marginTop: "15px",
                      }}
                    >
                      <span style={{ display: "flex" }}>
                        Freeship cho đơn hàng từ 10.000.000
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        display: "flex",
                        marginTop: "15px",
                      }}
                    >
                      <Button className="ship">Chành xe</Button>
                      <Button className="ship">GHTK</Button>
                    </Col>
                  </Row>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledCartList>
  );
}

export default CartDetail;
