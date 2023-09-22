import { Image } from "@component/image";
import { Text } from "@component/text";
import { Radio, Space } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {};

const PaymentMethods = (props: Props) => {
  const methods = [
    {
      icon: null,
      label: "Tiền mặt",
      description: "Thanh toán bằng tiền mặt khi nhận hàng",
    },
    {
      icon: null,
      label: "Thanh toán điểm VIP",
      description: "Điểm tích VIP",
    },
    {
      icon: null,
      label: "Tiền mặt",
      description: "Thanh toán bằng tiền mặt khi nhận hàng",
    },
    {
      icon: null,
      label: "Tiền mặt",
      description: "Thanh toán bằng tiền mặt khi nhận hàng",
    },
    {
      icon: null,
      label: "Tiền mặt",
      description: "Thanh toán bằng tiền mặt khi nhận hàng",
    },
  ];

  return (
    <Space size={16} direction="vertical" className="w-full">
      {methods.map((method, idx) => (
        <StyledMethod key={idx}>
          <div className="center-row justify-between gap-3">
            <div className="center-row gap-3">
              <Image src={"koko/d.jpg"} alt="img" />
              <div>
                <Text className="font-bold">{method.label}</Text>
                <Text className="text-[12px]">{method.description}</Text>
              </div>
            </div>
            <Radio />
          </div>
        </StyledMethod>
      ))}
    </Space>
  );
};

const StyledMethod = styled.div`
  border-radius: 12px;
  border: 1px solid var(--app-border-color);
  padding: 8px;
`;

export { PaymentMethods };
