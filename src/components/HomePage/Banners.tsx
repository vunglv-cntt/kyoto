// import Box from "@component/Box";
import Carousel from "@component/carousel-cards/Carousel";
// import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import Image from "@component/Image";
import { useAsync } from "@hooks/useAsync";

import React, { Fragment, useMemo } from "react";
import { apiGetBanners } from "services/home";
import { Banner } from "services/main/models";
import StyledBanners from "./homepagecss/Banners.style";

const Banners: React.FC = () => {
  const [, bannerData] = useAsync(apiGetBanners, {
    callOnFirst: true,
  });
  const banners = useMemo(() => bannerData.data?.data || [], [bannerData]);

  console.log(banners);

  const contentStyle: React.CSSProperties = {};

  return (
    <StyledBanners className="mb-4">
      <Container pb="2rem">
        <Carousel>
          {banners?.map((banner: Banner) => {
            let { id, image } = banner;
            return (
              <div
                key={id}
                style={contentStyle}
                className="h-[273px] md:h-[404px]"
              >
                <Image src={image} />
              </div>
            );
          })}
        </Carousel>
        <div className="overlay">
          <div>
            <div>
              {" "}
              <h1 className="banner-text">
                KYOTO - NÔNG NGHIỆP <br /> CÔNG NGHỆ
              </h1>{" "}
            </div>
            <div>
              {" "}
              <h4 className="banner-text">
                Giải pháp công nghệ hiện đại cho nông nghiệp góp phần gia tăng
                năng
                <br /> suất tối ưu hoá sức lao động mang lại hiệu quả cao cho
                lĩnh vực Nông - <br /> Ngư - Cơ Việt Nam
              </h4>{" "}
            </div>
            <div>
              {" "}
              <button className="banner-button">Đăng Ký</button>
              <button className="banner-button-1">Xem Thêm</button>
            </div>
          </div>
        </div>
      </Container>
    </StyledBanners>
  );
};

export { Banners };
