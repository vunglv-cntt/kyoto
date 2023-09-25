import React from "react";
import { Button, Col } from "antd";
import { formatCurrency } from "helpers/string";
import styled from "styled-components";

type Props = {
  image: string;
  name: string;
  quantity: number;
  price: number;
  disabled?: boolean;
};

function CartItem({ image, name, quantity, price, disabled }: Props) {
  return (
    <StyledItem>
      <Col span={10}>
        <div style={{ display: "flex" }}>
          <img className="image-card" src={image} alt={name} />
          <div className="product-name">{name}</div>
        </div>
      </Col>
      <Col span={4}>
        <div className="quantity-card">
          <Button disabled={disabled} className="quantity-button subtract">
            -
          </Button>
          <span className="quantity-value">{quantity}</span>
          <Button disabled={disabled} className="quantity-button add">
            +
          </Button>
        </div>
      </Col>
      <Col span={6}>
        <div className="price-product">
          <span className="product-price"> {formatCurrency(price)} / Máy</span>
        </div>
      </Col>
      <Col span={4}>
        <Button disabled={disabled}> X Xóa </Button>
      </Col>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img {
    height: 72px;
  }
  div,
  h1,
  Button {
    flex: 1;
  }
  .product-name {
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  .price-product {
    font-weight: 500;
    font-size: 16px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  .quantity-card {
    width: 122px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }

  .quantity-button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .subtract,
  .add {
    color: #000;  
  }

  .subtract {
    margin-right: 4px;
  }

  .add {
    margin-left: 4px;
  }

  .quantity-value {
    flex: 1;
    text-align: center;
    background-color: #00adef;
    color: #fff;
    border-radius: 4px;
    font-size: 16px
    width:10px;
    padding: 0 10px;
  }
  .product-price{
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
`;

export default CartItem;
