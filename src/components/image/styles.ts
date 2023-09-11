import styled from "styled-components";

export const StyledImage = styled.img`
  .kyoto-image {
    display: block;
    padding-bottom: 100%;
    position: relative;
    width: 100%;
  }

  .kyoto-image img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .kyoto-image.ratio16x9 {
    padding-bottom: calc(9 / 16 * 100%);
  }

  .kyoto-image.ratio42x159 {
    padding-bottom: calc(42 / 159 * 100%);
  }

  .kyoto-image.ratio1x1 {
    padding-bottom: 100%;
  }

  .kyoto-image.contain img {
    object-fit: contain;
  }

  .kyoto-image.cover img {
    object-fit: cover;
  }
`;
