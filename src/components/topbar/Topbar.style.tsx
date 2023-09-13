import { breakpointDevice } from "@constants/breakpoints";
import styled from "styled-components";

const StyledTopbar = styled.div`
  background-color :var(--app-main-color);
  color: white;
  font-size: 12px;
  height: 38px;
  
  @media ${breakpointDevice.md} {
    height: 56px;
  }

  .topbar-left {
    .logo {
      display: none;
      img {
        display: block;
        height: 36px;
      }
    }
    span {
      margin-left: 10px;
    }
    @media only screen and (max-width: 900px) {
      .logo {
        display: block;
      }
      *:not(.logo) {
        display: none;
      }
    }
  }

  .topbar-right {
    .link {
      padding-right: 30px;
      color: white;
    }
    .dropdown-handler {
      cursor: pointer;
      img {
        height: 14px;
        border-radius: 4px;
      }
      span {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    @media only screen and (max-width: 900px) {
      .link {
        display: none;
      }
    }
  }
`;

export default StyledTopbar;
