// import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
// import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import { useAsync } from "@hooks/useAsync";

import React, { Fragment } from "react";
import { apiGetBanners } from "services/home";

const Section1: React.FC = () => {
  const [, banners] = useAsync(apiGetBanners, {
    callOnFirst: true,
  });

  console.log(banners);

  return (
    <Fragment>
      <Container pb="2rem">
        <CarouselCard1 />
      </Container>
    </Fragment>
  );
};

export default Section1;
