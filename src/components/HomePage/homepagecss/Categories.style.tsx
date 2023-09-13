import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledCategories = styled.div`
  border-radius: 30px;
  box-shadow: none;
  background-color: transparent;
  @media ${breakpointDevice.md} {
    background-color: #fff;
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
  }

  .ant-row {
    padding: 16px 0;
    @media ${breakpointDevice.md} {
      padding: 24px;
    }
  }

  .ant-col {
    flex-shrink: 0;
    flex-grow: 0;
  }

  .category-box {
    cursor: pointer;
    background-color: #fff;
    align-items: flex-start;
    width: 100%;
    padding: 16px;
    height: 100%;
    border-radius: 16px;
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
    @media ${breakpointDevice.md} {
      padding: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }

  .slick-dots li button {
    background-color: #d9d9d9;
  }

  .slick-dots li.slick-active button {
    background-color: var(--app-main-color);
  }
`;
