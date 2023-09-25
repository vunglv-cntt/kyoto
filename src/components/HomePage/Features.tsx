import styled from "styled-components";
import { useAsync } from "@hooks/useAsync";
import { apiGetCategories } from "services/home";
import { useMemo } from "react";
import { Col, Row } from "antd";
import { Text } from "@component/text";
import Link from "next/link";
import { PATHS } from "@constants/routes";
import CustomCarousel from "@component/carousel-cards/Carousel";
import { Container } from "..";
import {
  GiftIcon,
  GuaranteeIcon,
  HeadphoneIcon,
  NoteIcon,
  SettingIcon,
  ShipcarIcon,
} from "@assets/icons";
import { breakpointDevice } from "@constants/breakpoints";

const Features = () => {
  const features = [
    {
      icon: <HeadphoneIcon />,
      title: "Tư vấn miễn phí",
      description:
        "Tổng đài hổ trợ tư vấn 24/7 đảm bảo giải đáp nhanh chóng mọi lúc",
    },
    {
      icon: <NoteIcon />,
      title: "Đặt đơn hàng",
      description: "Đặt đơn hàng tại website hoặc ứng dụng KYOTO Việt Nam ",
    },
    {
      icon: <ShipcarIcon />,
      title: "Giao hàng",
      description:
        "Giao hàng tận nơi hoặc theo yêu cầu của khách hàng qua chành xe",
    },
    {
      icon: <SettingIcon />,
      title: "Hướng dẫn kỹ thuật",
      description:
        "Luôn có kỹ thuật viên chuyên nghiệp kinh nghiệm hướng dẫn tận tu",
    },
    {
      icon: <GuaranteeIcon />,
      title: "Bảo hành ",
      description:
        "Bảo hành chính hãng, thời gian bảo hành 12 tháng đối với toàn bộ",
    },
    {
      icon: <GiftIcon stroke="#00ADEF" />,
      title: "Chăm sóc & hậu mãi",
      description:
        "Chương trình sau bán hàng và chăm sóc khách hàng thường xuyên",
    },
  ];
  return (
    <StyledFeatures>
      <Container className="py-[24px]">
        <Row
          gutter={[16, 16]}
          className="flex-nowrap overflow-x-scroll styled-scroll py-[16px]"
        >
          {features.map((feature, id) => (
            <Col key={id} className="basis-[224px] lg:basis-1/6">
              <FeatureBox {...feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </StyledFeatures>
  );
};

const FeatureBox = (feature: any) => {
  let { icon, title, description } = feature;

  return (
    <div className="feature-box h-full flex flex-col gap-2 justify-between">
      <div>
        {icon}
        <Text className="font-bold">{title}</Text>
        <Text style={{ fontSize: 12 }}>{description}</Text>
      </div>

      <Text className="font-bold cursor-pointer" style={{ fontSize: 12 }}>
        Xem thêm
      </Text>
    </div>
  );
};

const StyledFeatures = styled.div`
  box-shadow: 0px -4px 20px 0px rgba(2, 53, 95, 0.1);

  .ant-col {
    flex-shrink: 0;
    flex-grow: 0;
  }
  .feature-box {
    box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
    padding: 16px;
    border-radius: 16px;
    @media ${breakpointDevice.md} {
      padding: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export { Features };
