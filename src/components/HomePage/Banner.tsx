import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Container from "@component/Container";
import { useAsync } from "@hooks/useAsync";

import React, { Fragment } from "react";
import { apiGetBanners } from "services/home";

const Banner: React.FC = () => {
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

export default Banner;
