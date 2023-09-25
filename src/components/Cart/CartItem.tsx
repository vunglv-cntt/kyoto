import React from "react";
import { Button, Col } from "antd";
import { formatCurrency } from "helpers/string";

function CartItem({ image, name, quantity, price }) {
  return (
    <div className="product-item">
      <Col span={10}>
        <div style={{ display: "flex" }}>
          <img className="image-card" src={image} alt={name} />
          <div className="product-name">{name}</div>
        </div>
      </Col>
      <Col span={4}>
        <div className="quantity-card">
          <Button className="quantity-button subtract">-</Button>
          <span className="quantity-value">{quantity}</span>
          <Button className="quantity-button add">+</Button>
        </div>
      </Col>
      <Col span={8}>
        <div className="price-product">
          <span className="product-price"> {formatCurrency(price)} / Máy</span>
        </div>
      </Col>
      <Col span={2}>
        <Button> X Xóa </Button>
      </Col>
    </div>
  );
}

export default CartItem;
