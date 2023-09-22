import { Text } from "@component/text";
import { Button, Row } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {};

const ShipInformation = (props: Props) => {
  const informations = [
    { label: "Họ & Tên", value: "Nguyễn Anh Ba", valueClass: "font-bold" },
    {
      label: "Địa Chỉ",
      value: "113 Bàu Chinh, Xã Bàu Chinh, Huyện Châu Đức, Bà Rịa - Vũng Tàu",
      rightElement: <Button type="text">Chỉnh sửa</Button>,
    },
    { label: "Số Điện Thoại", value: "0943123456" },
  ];

  return (
    <StyledShipInformation>
      {informations.map((information, idx) => {
        var isLastInfo = idx === informations.length - 1;
        var { valueClass, rightElement } = information;
        return (
          <div
            className={`center-row mb-${isLastInfo ? 0 : 2} justify-between`}
            key={idx}
          >
            <div className="center-row gap-3">
              <Text>{information.label}:</Text>
              <Text className={valueClass}>{information.value}</Text>
            </div>
            {rightElement}
          </div>
        );
      })}
    </StyledShipInformation>
  );
};

const StyledShipInformation = styled.div`
  border: 1px solid var(--app-border-color);
  border-radius: 4px;
  padding: 16px;
  span {
    font-size: 14px;
    color: #707070;
  }
`;

export { ShipInformation };
