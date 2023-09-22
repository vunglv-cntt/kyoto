import { GiftIcon } from "@assets/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {};

const ChooseVoucher = (props: Props) => {
  return (
    <StyledChooseVoucher className="content-box">
      Mã giảm giá
      <Button icon={<GiftIcon stroke="var(--app-sub-color)" />}>
        Sử dụng mã khuyến mãi
      </Button>
    </StyledChooseVoucher>
  );
};

const StyledChooseVoucher = styled.div`
  font-weight: 500;
  button {
    width: 100%;
    border: 2px solid var(--app-main-color);
    color: var(--app-main-color);
    font-weight: 500;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 24px;
    }
  }
`;

export { ChooseVoucher };
