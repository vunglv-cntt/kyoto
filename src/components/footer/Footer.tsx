import React, { CSSProperties, useMemo } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Text } from "@component/text";
import { Container } from "@component/container";
import { useAppContext } from "@context/app/AppContext";
// import { formatAddress } from "helpers/address";
import { LocationIcon } from "@assets/icons";
import { Image } from "@component/image";
import {
  facebookImg,
  instagramImg,
  tiktokImg,
  youtubeImg,
  zaloImg,
} from "@constants/images";
import { BranchType } from "services/main/models";
import { useAsync } from "@hooks/useAsync";
import { apiGetBranchs } from "services/branch";

const StyledContainer = styled(Container)`
  .title::before {
    content: "";
    height: 12px;
    width: 4px;
    background-color: #e0e0e0;
    border-radius: 8px;
    margin-right: 6px;
    display: inline-block;
  }
  .title,
  .title2 {
    margin-bottom: 16px;
    color: #ffffff;
    font-weight: 700;
  }

  .text {
    font-size: 12px;
    margin-bottom: 12px;
    color: #fff;
    cursor: pointer;
    width: fit-content;
  }

  .text-white {
    p,
    span {
      color: #fff;
    }
  }
  .hotline {
    color: #f7dd04;
  }
  .end-box {
    p,
    span {
      font-size: 14px;
    }
  }

  .social-box > div {
    border-radius: 4px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    cursor: pointer;
    background-color: #fff;
  }
  @media (max-width: 767px) {
    .text-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .text {
      flex: 0 0 calc(50% - 10px);
      text-align: left;
    }
    .align-right {
      text-align: left;
    }
    .image-notifiedInbranch {
      display: block !important;
    }

    .image-notified {
      display: none !important;
    }
  }
  @media (min-width: 767px) {
    .image-notifiedInbranch {
      display: none !important;
    }
  }
`;

const titleStyle: CSSProperties = {
  lineHeight: "24px",
  alignItems: "center",
};
const Footer: React.FC = () => {
  // const [, branchsData] = useAsync(apiGetBranchs, {
  //   callOnFirst: true,
  // });
  // const branches: BranchType[] = useMemo(() => {
  //   let newBranches =
  //     branchsData?.data?.data?.slice(0, 3)?.map((branch) => ({
  //       ...branch,
  //       lat: branch.latitude,
  //       lng: branch.longitude,
  //     })) || [];

  //   const { dispatch } = useAppContext();
  //   dispatch({ type: "SET_BRANCHES", payload: newBranches });
  //   return newBranches;
  // }, [branchsData]);

  const aboutInfors = {
    title: "Về TND GROUP",
    children: [
      {
        label: (
          <>
            Giới thiệu <b>TND Group</b>
          </>
        ),
        href: null,
      },
      { label: "Chính sách giải quyết khiếu nại", href: null },
      { label: "Chính sách bảo mật thanh toán", href: null },
      { label: "Tuyển dụng", href: null },
      { label: "Liên hệ", href: null },
      { label: "KYOTO VIỆT NAM", href: null },
      { label: "Chính sách giải quyết khiếu nại", href: null },
    ],
  };

  const helperInfors = {
    title: "Hỗ Trợ Khách Hàng",
    children: [
      {
        label: (
          <>
            <b>Hotline</b>
            <b className="hotline"> 0377 222 777</b> (1000đ/phút , 24/7)
          </>
        ),
        href: null,
      },
      { id: 1, label: "Các câu hỏi thường gặp", href: null },
      { id: 2, label: "Hướng dẫn đặt hàng", href: null },
      { id: 3, label: "Phương thức thanh toán", href: null },
      { id: 4, label: "Phương thức vận chuyển", href: null },
      { id: 5, label: "Chính sách đổi trả", href: null },
      { id: 6, label: "CSKH: ctykyoto@gmail.com", href: null },
      { id: 7, label: "Tin tức / Blog", href: null },
    ],
  };

  const bankInfors = {
    title: "Thanh toán",
    children: [
      { image: "/assets/images/payment-card/mastercard.png" },
      { image: "/assets/images/payment-card/JCB.png" },
      { image: "/assets/images/payment-card/visakyoto.png" },
    ],
  };

  const downloadInfors = {
    title: "Tải ứng dụng trên điện thoại",
    children: [{ image: "/assets/images/brands/dowload.png" }],
  };

  const mediaSocialInfors = {
    title: "Kết Nối Với Chúng Tôi",
    children: [
      { image: facebookImg },
      { image: zaloImg },
      { image: youtubeImg },
      { image: tiktokImg },
      { image: instagramImg },
    ],
  };

  const branchInfos = {
    title: "Hệ Thống kênh phân phối",
    children: [
      { id: 1, label: "Ấp Tân Thành, Xã Thanh Bình, Huyện Trảng Bom, Đồng Nai", href: null },
    ],
  };

  return (
    <footer className="bg-[var(--app-main-color)]">
      <StyledContainer className="mx-auto py-[32px] md:py-[60px]">
        <Row gutter={[16, 16]}>
          <Col className="basis-[100%] md:basis-[20%]">
            <Text className="title" style={titleStyle}>
              {aboutInfors.title}
            </Text>
            {aboutInfors.children.map((info, id) => (
              <Text key={id} className="text">
                {info.label}
              </Text>
            ))}

            <img
              className="image-notified"
              src="/assets/images/badges/wmfXpoW 1.png"
              alt="chungnhan"
            />
          </Col>

          <Col className="basis-[100%] md:basis-[20%]">
            <Text className="title" style={titleStyle}>
              {helperInfors.title}
            </Text>
            <div className="text-container">
              {helperInfors.children.map((info) => (
                <Text
                  key={info.id}
                  className={`text ${info.id % 2 === 0 ? "align-right" : ""}`}
                >
                  {info.label}
                </Text>
              ))}
            </div>
          </Col>
          <Col className="basis-[100%] md:basis-[35%]" style={{}}>
            <Text className="title" style={titleStyle}>
              {branchInfos.title}
            </Text>
            {branchInfos.children.map((info, id) => (
              <Text key={id} className="text ">
                <LocationIcon className="inline-block mr-1 mb-1" />
                {info.label}
              </Text>
            ))}
            <img
              className="image-notifiedInbranch"
              src="/assets/images/badges/wmfXpoW 1.png"
              alt="chungnhan"
            />
          </Col>

          <Col className="basis-[100%] md:basis-[25%]">
            <Text className="title" style={titleStyle}>
              {bankInfors.title}
            </Text>
            <Row className="gap-3">
              {bankInfors.children.map((bank) => (
                <Image src={bank.image} alt="img" className="w-[50px]" />
              ))}
            </Row>

            <Text className="title mt-4">{mediaSocialInfors.title}</Text>
            <Row gutter={[8, 8]}>
              {mediaSocialInfors.children.map((bank, id) => (
                <Col key={id} className="social-box">
                  <Image src={bank.image} alt="img" className="w-full" />
                </Col>
              ))}
            </Row>

            <Text className="title mt-4">{downloadInfors.title}</Text>
            <Row className="basis-[100%] md:basis-[19%]">
              <Image src={downloadInfors.children[0].image} alt="img" />
            </Row>
          </Col>
        </Row>

        <div className="w-full border-[1px] border-b-[#828282] border-dashed my-4" />

        <Row>
          <Col span={24} className="text-white text-center end-box">
            <Text className="font-bold text-center">TND GROUP</Text>
            <Text className="my-4">
              Địa chỉ: 7B2 Khu biệt thự Thạnh Xuân, Phường Thạnh Xuân, Quận 12,
              Thành Phố Hồ Chí Minh
            </Text>
            <Text className="mb-4">
              Giấy chứng nhận Đăng ký Kinh doanh số 0313746484 do Sở Kế hoạch và
              Đầu tư Thành phố Hồ Chí Minh
            </Text>
            <Text style={{ color: "black" }} className="font-[500]">
              Thuộc bản quyền TND Group @2023 được phát triển bới
              tasvietnam.com.vn
            </Text>
          </Col>
        </Row>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
