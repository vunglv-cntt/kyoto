import { Carousel, CarouselProps } from "antd";
import styled from "styled-components";

const CustomCarousel = (props: CarouselProps) => {
  return <StyledCustomCarousel {...props} />;
};

const StyledCustomCarousel = styled(Carousel)`
  .slick-track {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }
`;

export default CustomCarousel;
