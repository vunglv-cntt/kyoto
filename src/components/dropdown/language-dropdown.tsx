import React from "react";
import { Text } from "..";
import { Dropdown, MenuProps, Row, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

type Props = {};

const LanguageDropdown = (props: Props) => {
  const items: MenuProps["items"] = [
    {
      label: <LanguageBox text="Tiếng Việt" />,
      key: "0",
    },
  ];

  return (
    <div className="flex items-center gap-1">
      <Dropdown trigger={["click"]} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <LanguageBox text="Tiếng Việt" />
            <CaretDownOutlined />{" "}
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

const LanguageBox = ({ text }) => {
  return (
    <Row className="flex gap-1">
      <img src="/assets/images/logos/Vietnam.png" alt="logo" />
      <Text className="font-bold text-[#DF3E23]">{text}</Text>
    </Row>
  );
};

export default LanguageDropdown;
