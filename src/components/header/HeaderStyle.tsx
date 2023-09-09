import styled from "styled-components";
import { layoutConstant } from "utils/constants";
import { getTheme } from "../../utils/utils";

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  height: 178px;
  background: ${getTheme("colors.body.paper")};

  .logo {
    img {
      display: block;
    }
  }
  .icon-holder {
    span {
      font-size: 12px;
      line-height: 1;
      margin-bottom: 4px;
    }
    h4 {
      margin: 0px;
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
    }
    div {
      margin-left: 6px;
    }
  }

  .user {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    height: ${layoutConstant.mobileHeaderHeight};

    .logo,
    .icon-holder,
    .category-holder {
      display: none;
    }
    .header-right {
      display: none !important;
    }
  }
  .navbarStyleText-1 {
    margin-top: 45px;
    margin-left: 57px
  }
  .navbarStyleText {
    margin-top: -5px
  }

  .logo{
    margin-top: 10px
  }
`;

export default StyledHeader;
