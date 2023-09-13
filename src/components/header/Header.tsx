// import Container from "../Container";
import React, { Fragment } from "react";
import { Row, Col, Menu, Typography, Card } from "antd";
import { color } from "styled-system";
import Logo from "./Logo";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const { Title } = Typography;
const menuItemStyle = {
  margin: "0 10px",
  fontWeight: "bold",
  fontSize: "16px",
  fontFamily: "Be Vietnam Pro, sans-serif",
};
const menuItemStyleTop = {
  fontFamily: "SF Pro Text, sans-serif",
  margin: "0 2px",
  fontWeight: "bold",
  marginTop : "20px",
  fontSize: "15px",
  letterSpacing: "0em",
  color: " #00ADEF",
  display: "flex",
};
const menuItemStylepplus = {
  fontFamily: "SF Pro Text, sans-serif",
  margin: "0 25px",
  marginTop : "21px",
  fontWeight: "bold",
  letterSpacing: "0em",
  fontSize: "15px",
  color: "#DF3E23",
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
  marginTop: "14px",
};
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <Fragment>
      <Card style={{ width: "100%", height: "178px" }}>
        <div className="header">
          <Row>
            <Col span={24}>
              <Row>
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
                <Col span={12}>
                  <Menu mode="horizontal" style={{marginLeft : "50px"}}>
                    <Menu.Item key="home" style={menuItemStyleTop}>
                      <div style={{ display: "flex" }}>
                        <img
                          src="/assets/images/logos/Place.png"
                          alt="logo"
                          style={logoImageStyleIcon}
                        />
                        8:00 đến 17:30 thứ 2 đến thứ 7
                      </div>
                    </Menu.Item>
                    <Menu.Item key="warranty" style={menuItemStyleTop}>
                      <div style={{ display: "flex" }}>
                        <img
                          src="/assets/images/logos/phone.png"
                          alt="logo"
                          style={logoImageStyleIcon}
                        />
                        0377 222 777
                      </div>
                    </Menu.Item>
                    <Menu.Item key="agents" style={menuItemStyleTop}>
                      <div style={{ display: "flex" }}>
                        <img
                          src="/assets/images/logos/Place.png"
                          alt="logo"
                          style={logoImageStyleIcon}
                        />
                        63 Cửa hàng
                      </div>
                    </Menu.Item>

                    <Menu.SubMenu style={menuItemStylepplus} title="Tiếng Việt">
                      <Menu.Item key="english">Tiếng Anh</Menu.Item>
                      <Menu.Item key="vietnamese">
                        <div style={{ display: "flex" }}>
                          <img
                            src="/assets/images/logos/Vietnam.png"
                            alt="logo"
                            style={logoImageStyleIcon}
                          />
                          Tiếng Việt
                        </div>
                      </Menu.Item>
                      <Menu.Item key="french">Tiếng Pháp</Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="jobs" style={menuItemStylepplus}>
                      Đăng Nhập/đăng Ký
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: "30px" }}>
              <Row justify="center">
                <Col span={12}>
                  <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
                    <Menu.Item key="home" style={menuItemStyle}>
                      Trang chủ
                    </Menu.Item>
                    <Menu.Item key="warranty" style={menuItemStyle}>
                      Bảo hành
                    </Menu.Item>
                    <Menu.Item key="agents" style={menuItemStyle}>
                      Hệ thống đại lý
                    </Menu.Item>
                    <Menu.Item key="news" style={menuItemStyle}>
                      Tin tức
                    </Menu.Item>
                    <Menu.Item key="jobs" style={menuItemStyle}>
                      Tuyển dụng
                    </Menu.Item>
                    <Menu.Item key="contact" style={menuItemStyle}>
                      Liên hệ
                    </Menu.Item>
                  </Menu>
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
