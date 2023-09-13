// import Container from "../Container";
import React, { Fragment } from "react";
import { Row, Col, Menu, Typography, Card } from "antd";
import Logo from "./Logo";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const { Title } = Typography;
const menuItemStyle = {
  flex: 1,
  textAlign: "center" as const,
  fontWeight: "normal",
  fontSize: "18px",
  fontFamily: "Montserrat, sans-serif",
};
const menuItemStyleTop = {
  fontFamily: "Montserrat, sans-serif",
  textAlign: "left" as const,
  fontWeight: "bold",
  fontSize: "13px",
  color: " #00ADEF",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 20px",
};
const menuItemStylepplus = {
  fontFamily: "Montserrat, sans-serif",
  textAlign: "left" as const,
  fontWeight: "bold",
  fontSize: "13px",
  color: " #DF3E23",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 20px",
};
const logoImageStyle = {
  // width: '241px',
  height: "85px",
};
const logoImageStyleIcon = {
  width: "auto",
  height: "20px",
  verticalAlign: "middle",
  marginRight: "8px",
};
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <Fragment>
      <Card style={{ width: "100%", height: "178px" }}>
        <div className="header">
          <Row>
            <Col span={24}>
              <Row justify="center">
                <Col
                  style={{ textAlign: "right", marginRight: "30px" }}
                  span={6}
                >
                  <a href="/link-cua-trang-chu">
                    <img
                      src="/assets/images/logokyoto.svg"
                      alt="logo"
                      style={{ ...logoImageStyle, float: "right" }}
                    />
                  </a>
                </Col>
                <Col span={16}>
                  <div style={{ display: " flex", marginTop: "25px" , width : "100%"}}>
                    <div key="warranty" style={menuItemStyleTop}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <img
                            src="/assets/images/logos/Place.png"
                            alt="logo"
                            style={logoImageStyleIcon}
                          />
                        </div>
                        <div>
                          <span>8:00 đến 17:30 thứ 2 đến thứ 7</span>
                        </div>
                      </div>
                    </div>
                    <div key="warranty" style={menuItemStyleTop}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <img
                            src="/assets/images/logos/phone.png"
                            alt="logo"
                            style={logoImageStyleIcon}
                          />
                        </div>
                        <div>
                          <span>0377 222 777</span>
                        </div>
                      </div>
                    </div>
                    <div key="agents" style={menuItemStyleTop}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <img
                            src="/assets/images/logos/Place.png"
                            alt="logo"
                            style={logoImageStyleIcon}
                          />
                        </div>
                        <div>
                          <span> 63 Cửa hàng</span>
                        </div>
                      </div>
                    </div>

                    <div key="vietnamese" style={menuItemStylepplus}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <img
                            src="/assets/images/logos/Vietnam.png"
                            alt="logo"
                            style={logoImageStyleIcon}
                          />
                        </div>
                        <div>
                          <span> Tiếng Việt</span>
                        </div>
                      </div>
                    </div>

                    <div key="jobs" style={menuItemStylepplus}>
                      <a
                        href="
                      "
                      >
                         <span style={{color : "#DF3E23"}}>  Đăng Nhập/đăng Ký</span>
                      </a>
                    </div>
                    <img
                      src="/assets/images/icons/cart.png"
                      alt="logo"
                      style={logoImageStyleIcon}
                    />
                    <img
                      src="/assets/images/icons/notifi.png"
                      alt="logo"
                      style={logoImageStyleIcon}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: "30px" }}>
              <Row justify="center">
                <Col span={20}>
                  <div style={{ display: "flex" }}>
                    <div key="home" style={menuItemStyle}>
                      <a href="">Trang chủ</a>
                    </div>
                    <div key="warranty" style={menuItemStyle}>
                      <a href="">Bảo hành</a>
                    </div>
                    <div key="agents" style={menuItemStyle}>
                      <a href="">Hệ thống đại lí</a>
                    </div>
                    <div key="news" style={menuItemStyle}>
                      <a href="">Tin tức</a>
                    </div>
                    <div key="jobs" style={menuItemStyle}>
                      <a href="">Tuyển dụng</a>
                    </div>
                    <div key="contact" style={menuItemStyle}>
                      <a href="">Liên hệ</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </Fragment>
  );
};

export default Header;
