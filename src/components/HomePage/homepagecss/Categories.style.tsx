import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledCategories = styled(Row)`
  border-radius: 30px;
  padding: 16px;
  box-shadow: none;
  background-color: transparent;
  @media ${breakpointDevice.md} {
    background-color: #fff;
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
  }

  .ant-col {
    flex-shrink: 0;
    flex-grow: 0;
  }

  .category-box {
    cursor: pointer;
    background-color: #fff;
    width: 100%;
    padding: 16px;
    @media ${breakpointDevice.md} {
      padding: 0;
      background-color: transparent;
    }
  }
`;
