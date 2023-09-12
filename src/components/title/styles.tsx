import { breakpointDevice } from "@constants/breakpoints";
import { Typography } from "antd";
import styled from "styled-components";

export const StyledTitle = styled(Typography.Text)`
  font-weight: 800;
  font-size: 16px;
  border-bottom: 4px solid var(--app-main-color);
  @media ${breakpointDevice.md} {
    font-size: 36px;
  }
`;
