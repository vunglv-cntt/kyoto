// import Box from "@component/Box";
import Carousel from "@component/carousel-cards/Carousel";
// import Carousel from "@component/carousel/Carousel";
// import Container from "@component/Container";
import { Image } from "@component/image";
import { useAsync } from "@hooks/useAsync";

import React, { useMemo } from "react";
import { apiGetBanners } from "services/home";
import { Banner } from "services/main/models";
import StyledBanners from "./homepagecss/Banners.style";
import { fontWeight } from "styled-system";

const Banners: React.FC = () => {
  const [, bannerData] = useAsync(apiGetBanners, {
    callOnFirst: true,
  });
  const banners = useMemo(
    () =>
      bannerData?.data?.data?.map((img) => ({
        ...img,
        image: img?.image?.replace(
          "http://kyoto-dev-apis.addevops.store",
          "https://kyoto-api-dev.tasvietnam.com"
        ),
      })) || [],
    [bannerData]
  );
  const titleStyled = {
    fontWeight: "Montserrat",
    fontSize: "60px",
    color :"white",
    marginLeft : "82px"
  };
  return (
    <StyledBanners className="mb-4">
      <div className="max-w-screen-2xl mx-auto relative">
        <Carousel>
          {banners?.map((banner: Banner) => {
            let { id, image } = banner;
            return (
              <div key={id} className="carousel-box h-[273px] md:h-[644px]">
                <Image src={image} />
              </div>
            );
          })}
        </Carousel>

        <div className="overlay">
          <div>
            <div>
              {" "}
              <h1 style={titleStyled}>
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
      </div>
    </StyledBanners>
  );
};

export { Banners };
