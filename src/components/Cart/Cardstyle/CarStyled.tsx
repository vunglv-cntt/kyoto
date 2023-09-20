import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledCartList = styled.div`
  .rowStyle {
    margin-top: 88px;
    margin-bottom: 147px;
  }
  .Col-left {
    height: 453px;
  }
  .Col-right {
    height: 196px;
    
  }
  .Col-right-hand {
    height: 226px;
  }
  .col-rightDown {
    margin-top: 32px;
  }
  .image-card {
    width: 72px;

    height: 72px;
  }
  .product-container {
    display: flex;
    flex-direction: column;
  }

  .product-item {
    display: flex;
    align-items: center; 
    margin-bottom: 10px; 
  }

 
  .product-item img {
    height: 72px;  
  }

  .product-item div,
  .product-item h1,
  .product-item Button {
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
  .Giohang {
    font-size: 24px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  .deleteAllCart {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
  .actionCart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actionCartLast {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .textAction {
    font-size: 14px;
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
 
 .col-left-price{
  text-align: left;
 }  
 .row-second-price{
  padding-top:25px
 }
 .btn-price{
  padding-top:15px
 }
 .priceTotalTitle{
  font-weight:500;
  font-height:bold;
  font-size:24px;
  font-family: "Montserrat", sans-serif;
 }
 .text-totalprice{
  font-weight:400;
  font-height:bold;
  font-size:14px;
  font-family: "Montserrat", sans-serif;
 }
 .btn-buynow{
  width: 140px;
  height: 54px;
  border: 5px;
  background-color:#F7DD04;
  color: #FFFFFF
 }
 .btn-order{
  width: 200px;
  height: 54px;
  border: 5px;
  background-color:#00ADEF;
  color: #FFFFFF
 }
 .ship{
  height:30px;
  border : 20px;
  margin: 5px;
  border: 1px solid;
 }
`;
