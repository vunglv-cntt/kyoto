import { Row } from "antd";
import styled from "styled-components";

export const StyledDistributors = styled(Row)`
  .button {
    font-weight: 600;
  }

  .left-button {
  }

  .right-button {
    border: 2px solid var(--app-main-color);
    color: var(--app-main-color);
    background-color: #fff;
  }

  .distributor {
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
    background-color: #fff;
    padding: 32px;
    text-align: center;
    border-radius: 10px;

    .title {
      color: #00ADEF;
      font-weight: 700;
      font-size: 40px;
      line-height: 1.45;
    }

    .description {
      font-weight: 500;
    }
  }
`;
