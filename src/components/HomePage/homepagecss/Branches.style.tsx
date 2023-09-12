import { breakpointDevice } from "@constants/breakpoints";
import styled from "styled-components";

const StyledBranches = styled.div`
  /* CSS cho component Advise */
  .branch-box {
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
    border-radius: 16px;
    background-color: #fff;

    .image {
      height: 200px;
      @media ${breakpointDevice.md} {
        height: 420px;
      }

      img {
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
      }
    }

    .name {
      font-size: 20px;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
    }
  }
`;
export default StyledBranches;
