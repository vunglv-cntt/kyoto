// import Container from "../Container"; 
import StyledHeader from "./HeaderStyle";
import React from "react";
import { Row, Col, Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ReadOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const { Title } = Typography;

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <div className="header">
        <Row justify="space-between" align="middle">
          <Col span={12}>
            <Row justify="start" align="middle">
              <Col span={4}>
                <Title level={3}>Logo</Title>
              </Col>
              <Col span={16}>
                <Menu mode="horizontal" theme="dark" className="top-menu">
                  <Menu.Item key="location">Địa điểm</Menu.Item>
                  <Menu.SubMenu title="Ngôn ngữ">
                    <Menu.Item key="english">Tiếng Anh</Menu.Item>
                    <Menu.Item key="vietnamese">Tiếng Việt</Menu.Item>
                    <Menu.Item key="french">Tiếng Pháp</Menu.Item>
                  </Menu.SubMenu>
                  <Menu.Item key="login">
                    <Button type="primary">Đăng nhập</Button>
                  </Menu.Item>
                  <Menu.Item key="register">
                    <Button type="primary">Đăng ký</Button>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Trang chủ
              </Menu.Item>
              <Menu.Item key="warranty" icon={<SafetyCertificateOutlined />}>
                Bảo hành
              </Menu.Item>
              <Menu.Item key="agents" icon={<TeamOutlined />}>
                Hệ thống đại lý
              </Menu.Item>
              <Menu.Item key="news" icon={<ReadOutlined />}>
                Tin tức
              </Menu.Item>
              <Menu.Item key="jobs" icon={<PhoneOutlined />}>
                Tuyển dụng
              </Menu.Item>
              <Menu.Item key="contact">Liên hệ</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </StyledHeader>
  );
};

export default Header;
