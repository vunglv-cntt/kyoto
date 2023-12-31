import { Row, Col, Button, Drawer, Menu, Space } from "antd";
import { Container, Text } from "..";
import Link from "next/link";
import { Image } from "@component/image";
import { logoKyotoImg } from "@constants/images";
import styled from "styled-components";
import { breakpointDevice } from "@constants/breakpoints";
import { LocationIcon } from "@assets/icons";
import LanguageDropdown from "@component/dropdown/language-dropdown";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import { useState, useEffect } from "react";
import PhoneIcon from "../../assets/icons/phone";
import LoginDialog from "app/login/page";
import { authStorage } from "helpers/locale-storage";
import router from "next/router";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const logoImageStyleIcon = {
  width: "auto",
  height: "25px",
  verticalAlign: "middle",
  marginRight: "8px",
};

const Header: React.FC<HeaderProps> = () => {
  const accessToken = authStorage.get("auth");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = authStorage.get("auth");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleCartIconClick = () => {
    if (accessToken) {
      // Nếu có access token, chuyển hướng đến trang mong muốn (ví dụ: "/cart")
      router.push("/cart");
    } else {
      // Nếu không có access token, hiển thị cảnh báo
      alert("Vui lòng đăng nhập để xem giỏ hàng.");
    }
  };
  const [openMobileBar, setOpenMobileBar] = useState(false);

  const [isLoginDialogVisible, setLoginDialogVisible] = useState(false);

  const showLoginDialog = () => {
    setLoginDialogVisible(true);
  };

  const closeLoginDialog = () => {
    setLoginDialogVisible(false);
  };

  const infors = [
    {
      label: "8:00 đến 17:30 thứ 2 đến thứ 7",
      icon: <LocationIcon fill="#000" />,
    },
    { label: "0377 222 777", icon: <PhoneIcon /> },
    { label: "63 Cửa hàng", icon: <LocationIcon fill="#000" /> },
  ];

  const navbars = [
    { label: "Trang chủ", href: "/", key: 1 },
    { label: "Bảo hành", href: "/", key: 1 },
    { label: "Hệ thống đại lí", href: "", key: 1 },
    { label: "Tin tức", href: "", key: 1 },
    { label: "Tuyển dụng", href: "", key: 1 },
    { label: "Liên hệ", href: "", key: 1 },
  ];

  const showMobileBar = () => {
    setOpenMobileBar(true);
  };

  const closeMobileBar = () => {
    setOpenMobileBar(false);
  };
  const handleLogout = () => {
    alert("Bạn có muốn đăng xuất ?");
    authStorage.remove("auth");
    authStorage.remove("user");
    window.location.reload();
  };

  return (
    <div className="bg-white">
      <Container>
        {/* Top box */}
        <StyledRowTop
          justify="space-between"
          className="items-center my-4 ju"
          gutter={[16, 16]}
        >
          <Col className="flex lg:hidden">
            <Button
              type="text"
              className="flex items-center"
              onClick={showMobileBar}
            >
              <MenuOutlined className="cursor-pointer" />
            </Button>
            <div className="px-2 lg:px-0" />
          </Col>

          <Col>
            <Link href="/">
              <Image
                src={logoKyotoImg}
                alt="logo"
                className="logo cursor-pointer"
              />
            </Link>
          </Col>

          <Col className="hidden lg:block">
            <Row justify="space-between" gutter={16}>
              {infors.map((info, id) => (
                <Col key={id} className="flex items-center gap-2">
                  {info.icon}
                  <Text className="font-bold">{info.label}</Text>
                </Col>
              ))}
            </Row>
          </Col>

          <Col>
            <Row gutter={16}>
              <Col className="hidden lg:block">
                <LanguageDropdown />
              </Col>

              <Col className="hidden lg:block">
                {isLoggedIn ? (
                  <Text className="font-bold">Xin chào</Text>
                ) : (
                  // Nếu chưa đăng nhập, hiển thị "Đăng Nhập/Đăng Ký"
                  <Text className="font-bold text-[#DF3E23]">
                    <button
                      onClick={showLoginDialog}
                      style={{ cursor: "pointer" }}
                    >
                      Đăng Nhập/Đăng Ký
                    </button>
                  </Text>
                )}
              </Col>

              <Col className="flex items-center">
             
                  <button onClick={handleCartIconClick}>
                    <img
                      src="/assets/images/icons/cart.png"
                      alt="logo"
                      style={logoImageStyleIcon}
                    />
                  </button>
               
                <img
                  src="/assets/images/icons/notifi.png"
                  alt="logo"
                  style={logoImageStyleIcon}
                />
                {isLoggedIn ? (
                  <Button onClick={handleLogout} className="font-bold">
                    Đăng xuất
                  </Button>
                ) : (
                  <div></div>
                )}
              </Col>
            </Row>
          </Col>
        </StyledRowTop>

        {/* Downbox */}
        <StyledRowDown justify="space-between" className="hidden lg:flex mb-4">
          {navbars.map((navbar, id) => (
            <Col key={id}>
              <Link href={navbar.href}>
                <Text
                  className={`text-[20px] cursor-pointer ${
                    id === 0 ? "selected" : ""
                  }`}
                >
                  {navbar.label}
                </Text>
              </Link>
            </Col>
          ))}
        </StyledRowDown>
        <ButtonSearch className="block lg:hidden mb-4" />
      </Container>

      {/* Drawer */}
      <StyledDrawer
        open={openMobileBar}
        onClose={closeMobileBar}
        placement="left"
      >
        <Space direction="vertical" className="w-full">
          <ArrowLeftOutlined
            className="cursor-pointer w-[48px] h-[48px]"
            onClick={closeMobileBar}
          />
          <LanguageDropdown />
          <a onClick={showLoginDialog}>
            <Menu
              className="bg-[transparent]"
              style={{ border: "none" }}
              items={[{ label: "Đăng Nhập/đăng Ký", key: "0" }, ...navbars]}
              defaultSelectedKeys={["0"]}
            ></Menu>
          </a>
        </Space>
      </StyledDrawer>
      <LoginDialog visible={isLoginDialogVisible} onClose={closeLoginDialog} />
    </div>
  );
};

const StyledRowTop = styled(Row)`
  .logo {
    height: 27px;
    width: auto;
    max-width: 200px;
    @media ${breakpointDevice.md} {
      height: 54px;
    }
    img {
      height: 100%;
    }
  }
`;

const StyledRowDown = styled(Row)`
  .selected {
    border-bottom: 2px solid var(--app-sub-color);
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-color: var(--app-main-color);
    span,
    svg {
      color: #fff;
    }
  }

  .ant-drawer-header {
    display: none;
  }
  .ant-menu li {
    padding-inline: 0;
    span {
      padding: 16px;
      font-weight: 600;
    }
  }

  .ant-drawer-content-wrapper {
    width: 75% !important;
  }

  .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Header;
