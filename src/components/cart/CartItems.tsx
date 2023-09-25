import { useMemo } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetListCart } from "services/cart";
import { Row, Col, Card } from "antd";
import { StyledCartList } from "./Cardstyle/CarStyled";
import CartItem from "./CartItem";

type Props = {
  disabled?: boolean;
};

function CartItems(props: Props) {
  const { disabled = false } = props;
  const [, cartData] = useAsync(apiGetListCart, {
    callOnFirst: true,
  });
  const cartDetail = useMemo(() => cartData?.data?.data, [cartData]);

  if (!cartDetail) {
    return <span style={{ fontSize: 20 }}>Bạn chưa có sản phẩm nào</span>;
  }
  const products = cartDetail.details.map((detail, index) => ({
    name: detail.product.name,
    price: detail.product.price,
    quantity: detail.quantity,
    image: detail.product.images[0].url,
  }));

  return (
    <StyledCartList>
      <Row>
        <Col span={10}>
          <span className="textAction">Sản phẩm</span>
        </Col>
        <Col className="actionCart" span={4}>
          <span className="textAction">Số lượng</span>
        </Col>
        <Col className="actionCart" span={6}>
          <span className="textAction">Thành tiền</span>
        </Col>
        <Col className="actionCartLast" span={4}>
          <span className="textAction">Thao tác</span>
        </Col>
      </Row>
      <div className="product-container">
        {products.map((product, index) => (
          <CartItem key={index} {...product} {...{ disabled }} />
        ))}
      </div>
    </StyledCartList>
  );
}

export { CartItems };
