import Carousel from "@component/carousel-cards/Carousel";
import { Image } from "@component/image";
import { Banner } from "services/main/models";
import StyledBanners from "./homepagecss/Banners.style";
import { bannerPlaneImg } from "@constants/images";
import { Col, Row } from "antd";
import { Button, Text } from "..";

const Banners: React.FC = () => {
  // const [, bannerData] = useAsync(apiGetBanners, {
  //   callOnFirst: true,
  // });
  // const banners = useMemo(
  //   () =>
  //     bannerData?.data?.data?.map((img) => ({
  //       ...img,
  //       image: ,
  //     })) || [],
  //   [bannerData]
  // );

  const banners = [{ id: 1, image: bannerPlaneImg }];

  return (
    <StyledBanners className="mb-4">
      <div className="max-w-screen-2xl mx-auto relative">
        <Carousel className="h-[273px] md:h-[480px] xl:h-[640px]">
          {banners?.map((banner: Banner) => {
            let { id, image } = banner;
            return (
              <div key={id} className="carousel-box h-full">
                <Image src={image} className="h-full" />
              </div>
            );
          })}
        </Carousel>

        <Row className="overlay p-[24px] md:p-[64px]">
          <Col xs={24} md={16}>
            <Text className="title">KYOTO - NÔNG NGHIỆP CÔNG NGHỆ</Text>
            <Text className="description my-2 md:my-4">
              Giải pháp công nghệ hiện đại cho nông nghiệp góp phần gia tăng
              năng suất tối ưu hoá sức lao động mang lại hiệu quả cao cho lĩnh
              vực Nông - Ngư - Cơ Việt Nam
            </Text>
            <Row className="gap-4">
              <Button className="register-btn">Đăng Ký</Button>
              <Button className="more-btn">Xem Thêm</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </StyledBanners>
  );
};

export { Banners };
