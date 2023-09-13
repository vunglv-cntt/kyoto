import { breakpointDevice } from "@constants/breakpoints";
import styled from "styled-components";

const StyledBanners = styled.div`
  /* CSS cho component Advise */
  position: relative;

  .image-header {
    width: 100%;
  }
  /* Banner.css */
  .banner-container {
    position: relative;
    width: 100%;
  }

  .banner-image {
    width: 100%;
    height: auto;
  }

  .slick-list {
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    width: 100%;
    align-items: flex-end;
    @media ${breakpointDevice.md} {
      align-items: center;
    }
    span,
    p {
      color: #fff;
    }

    .title {
      font-size: 16px;
      font-weight: 800;
      @media ${breakpointDevice.md} {
        font-size: 32px;
      }
      @media ${breakpointDevice.lg} {
        font-size: 60px;
      }
    }

    .description {
      font-size: 14px;
      @media ${breakpointDevice.md} {
        font-size: 16px;
      }
    }
    button {
      font-weight: 600;
      width: 124px;

      @media ${breakpointDevice.md} {
        width: 136px;
      }
    }

    .register-btn {
      background-color: var(--app-sub-color);
    }
    .more-btn {
      background-color: transparent;
      border: 1px solid #fff;
    }
  }

  .content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .banner-text {
    color: white;
    margin-left: 75px;
    position: relative;
    z-index: 2;
  }

  .banner-button:hover {
    background-color: #0079b6;
  }

  .carousel-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default StyledBanners;
