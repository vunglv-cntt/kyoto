import { useMemo, useState } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetListCart } from "services/cart";
import { Row, Col, Card, Button } from "antd";
import { StyledCartList } from "./Cardstyle/CarStyled";

import { formatCurrency } from "helpers/string";
import styled from "styled-components";
import Link from "next/link";
import { PATHS } from "@constants/routes";

function CartDetail() {
  const [, cartData] = useAsync(apiGetListCart, {
    callOnFirst: true,
  });
  const cartDetail = useMemo(() => cartData?.data?.data, [cartData]);
  console.log("products", cartDetail);

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
    <StyledCartList>
      <div>
        <Row gutter={[16, 16]} className="rowStyle">
          <Col xs={24} sm={24} md={24} lg={24} xl={16}>
            <Card
              className="Col-left"
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
                maxHeight: "450px",
                overflowY: "auto",
              }}
            >
              <Row gutter={[16, 16]} className="title-price">
                <Col span={24}>
                  <Row>
                    <Col span={12} style={{ justifyContent: "flex-start" }}>
                      <span className="Giohang">Giỏ hàng</span>
                    </Col>

                    <Col span={12} style={{ textAlign: "right" }}>
                      <span className="deleteAllCart">Xóa tất cả giỏ hàng</span>
                    </Col>
                  </Row>

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
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <div className="product-container">
                    {products.map((product, index) => (
                      <div key={index} className="product-item">
                        <Col span={10}>
                          <div style={{ display: "flex" }}>
                            <img
                              className="image-card"
                              src={product.image}
                              alt={product.name}
                            />
                            <div className="product-name">{product.name}</div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className="quantity-card">
                            <Button className="quantity-button subtract">
                              -
                            </Button>
                            <span className="quantity-value">
                              {product.quantity}
                            </span>
                            <Button className="quantity-button add">+</Button>
                          </div>
                        </Col>
                        <Col span={8}>
                          <div className="price-product">
                            <span className="product-price">
                              {" "}
                              {formatCurrency(product.price)} / Máy
                            </span>
                          </div>
                        </Col>
                        <Col span={2}>
                          <Button> X Xóa</Button>
                        </Col>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card className="Col-right">
                  <div className="row-left-price">
                    <Row style={{ height: "100%" }}>
                      <Col
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div className="tite-ToltalPrice">
                          <span className="priceTotalTitle"> Tổng Tiền</span>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row style={{ height: "100%" }} className="row-second-price">
                    <Col
                      span={8}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                      }}
                    >
                      <div className="total-price">
                        <span className="text-totalprice"> Tạm tính: </span>
                      </div>
                      <div className="btn-price">
                        <Button className="btn-buynow"> Mua Ngay</Button>
                      </div>
                    </Col>

                    <Col
                      span={16}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "right",
                      }}
                    >
                      <div className="price-after">
                        <span className="text-totalprice">
                          {" "}
                          {formatCurrency(total_price)}{" "}
                        </span>
                      </div>
                      <div className="btn-price">
                        <Link href={PATHS.checkout}>
                          <Button className="btn-order">Đặt hàng</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Card>
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
      </div>
    </StyledCartList>
  );
}

export default CartDetail;
