import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledProductDetail = styled.div`
  .text {
    flex: 0 0 calc(50% - 10px);
  }
  .promo-button {
    width: 300px;
    border: 1px solid #00adef;
    color: #00adef;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 300px;
  }
  .span-row {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 300px;
  }

  .custom-button {
    width: 145px;
    height: 54px;
    border: 1px solid #00adef;
    color: #00adef;
    display: flex;
    gap: 10px;
  }
  .custom-button-buy {
    width: 145px;
    height: 54px;
    background-color: #f7dd04;
    color: white;
  }
  .custom-button-order {
    width: 145px;
    height: 54px;
    background-color: #00adef;
    color: white;
  }
  .add-to-cart-button {
    width: 300px;
    height: 44px;
    background-color: #00adef;
    color: white;
  }
  .add-to-cart {
    margin-top: 15px;
    background-color: #00adef;
    color: #ffffff;
  }
  .price-span {
    color: #f7dd04;
  }
  .order-span {
    color: #00adef;
  }
  .right-span {
    font-weight: bold;
  }
  /* CSS cho màn hình lớn hơn hoặc bằng 768px (tablet và desktop) */
  @media (min-width: 768px) {
    .custom-row {
      display: flex;
    }

    .custom-col {
      flex: 1;
      margin: 0 12px; /* Khoảng cách giữa các cột */
    }
  }

  /* CSS cho màn hình nhỏ hơn 768px (màn hình điện thoại) */
  @media (max-width: 767px) {
    .custom-row {
      flex-direction: column; /* Hiển thị các cột theo chiều dọc */
    }

    .custom-col {
      margin: 0; /* Xóa khoảng cách giữa các cột */
    }
  }
`;
