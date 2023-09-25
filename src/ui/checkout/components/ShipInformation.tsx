import { BaseInput } from "@component/input";
import { Text } from "@component/text";
import { Button, Row } from "antd";
import React, { useMemo, useState } from "react";
import styled from "styled-components";

type Props = {};

const ShipInformation = (props: Props) => {
  const [shipInfos, setShipInfos] = useState({
    address: "113 Bàu Chinh, Xã Bàu Chinh, Huyện Châu Đức, Bà Rịa - Vũng Tàu",
  });
  const [editFields, setEditFields] = useState({
    address: false,
  });

  const onClickEditAddress = () => {
    onToggleEditFields("address");
  };

  const onToggleEditFields = (field: string) => {
    setEditFields({ ...editFields, [field]: !editFields[field] });
  };

  const informations = useMemo(
    () => [
      {
        label: "Họ & Tên",
        value: <Text className="font-bold">Nguyễn Anh Ba</Text>,
      },
      {
        label: "Địa Chỉ",
        value: editFields["address"] ? (
          <BaseInput
            value={shipInfos.address}
            onChange={(e) =>
              setShipInfos({ ...shipInfos, address: e.target.value })
            }
          />
        ) : (
          shipInfos.address
        ),
        rightElement: (
          <Button type="text" onClick={onClickEditAddress}>
            {editFields["address"] ? "Xong" : "Chỉnh sửa"}
          </Button>
        ),
      },
      { label: "Số Điện Thoại", value: "0943123456" },
    ],
    [shipInfos, editFields]
  );

  return (
    <StyledShipInformation>
      {informations.map((information, idx) => {
        var isLastInfo = idx === informations.length - 1;
        var { rightElement } = information;
        return (
          <div
            className={`center-row mb-${
              isLastInfo ? 0 : 2
            } justify-between gap-3`}
            key={idx}
          >
            <div className="center-row gap-3 flex-[1]">
              <Text className="whitespace-nowrap">{information.label}:</Text>
              {information.value}
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
