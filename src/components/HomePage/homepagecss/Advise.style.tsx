import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledAdvise = styled(Row)`
  box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
  background-color: #fff;
  border-radius: 16px;

  .title {
    font-weight: 900;
    font-size: 26px;
    color: var(--app-main-color);
    @media ${breakpointDevice.md} {
      font-size: 40px;
    }
  }

  input, textarea {
    background-color: var(--app-input-bg);
  }
`;
