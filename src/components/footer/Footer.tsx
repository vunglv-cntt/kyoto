import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Box from "../Box";
import { Row, Col, Menu, Typography, Card } from "antd";

const StyledLink = styled.a`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${getTheme("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme("colors.gray.100")};
  }
`;
const footerText = {
  backgroundColor: "#00ADEF",
  color: "white",
  textAlign: "center" as const,
  padding: "20px 0",
  fontWeight: "Montserrat",
  fontSize: "14px",
};
const imagePayment = {
  display: "flex",
  justifyContent: "left",
};
const lineStyle = {
  borderLeft: "5px solid #E0E0E0 ",
  height: "100%",
  marginLeft: "-7px",
  marginRight: "3px",
  width: "5px",
  borderRadius: "5px",
};
const lineStyleButton = {
  borderLeft: "5px solid #E0E0E0 ",
  height: "100%",
  marginLeft: "-7px",
  marginRight: "3px",
  width: "5px",
  borderRadius: "5px",
  justifyContent: "center",
};
const headerStyle = {
  textAlign: "left" as const,
  display: "inline-block",
  color: "#F7DD04",
  fontSize: "20px",
  marginBottom: "10px",
  lineHeight: "24px",
  alignItem: "center",
};
const headerStylePayment = {
  textAlign: "left" as const,
  display: "inline-block",
  color: "#F7DD04",
  fontSize: "20px",
  marginBottom: "10px",
  lineHeight: "24px",
};

const paragraphStyle: React.CSSProperties = {
  fontWeight: "Montserrat",
  fontSize: "14px",
  color: "white",
  marginBottom: "15px",
  lineHeight: "16px",
};
const paragraphStyleBottom: React.CSSProperties = {
  fontWeight: "Montserrat",
  fontSize: "14px",
  color: "white",
  marginBottom: "15px",
  lineHeight: "16px",
  justifyContent: "center",
  textAlign: "center",
};
const paragraphStyleBottomLast: React.CSSProperties = {
  fontWeight: "Montserrat",
  fontSize: "14px",
  color: "#F7DD04",
  marginBottom: "15px",
  lineHeight: "16px",
  justifyContent: "center",
  textAlign: "center",
};
const columnStyle: React.CSSProperties = {
  marginTop: "50px",
  marginLeft: "70px",
};
const Footer: React.FC = () => {
  return (
    <footer>
      <Box>
        <Box>
          <div
            style={{
              backgroundColor: "#00ADEF",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={4}>
                <div style={columnStyle}>
                  <span style={lineStyle}></span>
                  <h1 style={headerStyle}>Về TND GROUP</h1>
                  <p style={paragraphStyle}>
                    Giới thiệu <b> TND Group </b>
                  </p>
                  <p style={paragraphStyle}>Chính sách giải quyết khiếu nại</p>
                  <p style={paragraphStyle}>Chính sách bảo mật thanh toán</p>
                  <p style={paragraphStyle}>Tuyển dụng</p>
                  <p style={paragraphStyle}>Liên hệ</p>
                  <p style={paragraphStyle}>KYOTO VIỆT NAM</p>
                  <img
                    src="/assets/images/badges/wmfXpoW 1.png"
                    alt="chungnhan"
                  />
                </div>
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <div style={columnStyle}>
                  <span style={lineStyle}></span>
                  <h1 style={headerStyle}>Hỗ Trợ Khách Hàng</h1>
                  <p style={paragraphStyle}>
                    <b>Hotline </b> 0377 222 777 (1000đ/phút, 24/7)
                  </p>
                  <p style={paragraphStyle}>Các câu hỏi thường gặp</p>
                  <p style={paragraphStyle}>Hướng dẫn đặt hàng</p>
                  <p style={paragraphStyle}>Phương thức thanh toán</p>
                  <p style={paragraphStyle}>Phương thức vận chuyển</p>
                  <p style={paragraphStyle}>Chính sách đổi trả</p>
                  <p style={paragraphStyle}>CSKH: ctykyoto@gmail.com</p>
                  <p style={paragraphStyle}>Tin tức / Blog</p>
                </div>
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <div style={columnStyle}>
                  <span style={lineStyle}></span>
                  <h1 style={headerStyle}>Hệ Thống kênh phân phối</h1>
                  <p style={paragraphStyle}>
                    141 Phan Đăng Lưu, P.7, Q. Phú Nhuận
                  </p>
                  <p style={paragraphStyle}>
                    314 Đ. Trường Chinh, P.13, Q. Tân Bình
                  </p>
                  <p style={paragraphStyle}>
                    198A Mã Lò, P. Bình Trị Đông A, Q. Bình Tân
                  </p>
                  <p style={paragraphStyle}>
                    236K Lê Văn Sỹ, P. 1, Q. Tân Bình
                  </p>
                  <p style={paragraphStyle}>
                    388 - 390 Nguyễn Thị Thập, P. Tân Quy, Q.7
                  </p>
                  <p style={paragraphStyle}>410 Hậu Giang, Phường 12, Quận 6</p>
                  <p style={paragraphStyle}>509 Quang Trung, Quận Gò Vấp</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={4}>
                <div style={columnStyle}></div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6}>
                <div style={columnStyle}>
                  {" "}
                  <span style={lineStyleButton}></span>
                  <h1 style={headerStylePayment}>Thanh toán</h1>
                  <div style={imagePayment}>
                    <img
                      src="/assets/images/payment-card/mastercard.png"
                      alt="payment"
                    />
                    <img
                      src="/assets/images/payment-card/JCB.png"
                      alt="payment"
                    />
                    <img
                      src="/assets/images/payment-card/visakyoto.png"
                      alt="payment"
                    />
                  </div>
                </div>
                <div style={columnStyle}>
                  {" "}
                  <span style={lineStyleButton}></span>
                  <h1 style={headerStylePayment}>Kết Nối Với Chúng Tôi</h1>
                  <div style={imagePayment}>
                    <img
                      src="/assets/images/brands/socical.png"
                      alt="payment"
                    />
                  </div>
                </div>
                <div style={columnStyle}>
                  {" "}
                  <span style={lineStyleButton}></span>
                  <h1 style={headerStylePayment}>
                    Tải ứng dụng trên điện thoại
                  </h1>
                  <div style={imagePayment}>
                    <img
                      src="/assets/images/brands/dowload.png"
                      alt="payment"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24}>
                <div style={footerText}>TND GROUP</div>
                <p style={paragraphStyleBottom}>
                  Địa chỉ: 7B2 Khu biệt thự Thạnh Xuân, Phường Thạnh Xuân, Quận
                  12, Thành Phố Hồ Chí Minh
                </p>
                <p style={paragraphStyleBottom}>
                  Giấy chứng nhận Đăng ký Kinh doanh số 031555666 do Sở Kế hoạch
                  và Đầu tư Thành phố Hồ Chí Minh cấp ngày 23/10/2017
                </p>
                <p style={paragraphStyleBottomLast}>
                  Thuộc bản quyền TND Group @2023 được phát triển bới
                  tasvietnam.com.vn
                </p>
              </Col>
            </Row>
          </div>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
