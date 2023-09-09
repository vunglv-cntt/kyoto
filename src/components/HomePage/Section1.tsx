// import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
// import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";

import React, { Fragment } from "react";

const Section1: React.FC = () => {
  return (
    <Fragment>
      <Container pb="2rem">
        <CarouselCard1 />
      </Container>
    </Fragment>
  );
};

export default Section1;
