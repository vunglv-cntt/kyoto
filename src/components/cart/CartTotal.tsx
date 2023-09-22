import { PATHS } from "@constants/routes";
import { Button, Card } from "antd";
import { formatCurrency } from "helpers/string";
import Link from "next/link";
import React from "react";
import { Text } from "..";
import styled from "styled-components";

type Props = {
  totalPrice?: number;
  hideOrderBtn?: boolean;
};

const CartTotal = (props: Props) => {
  const { totalPrice = 0, hideOrderBtn = false } = props;
  return (
    <Card className="Col-right">
      <Text className="font-[500]">Tổng Tiền</Text>
      <div className="total-price center-row gap-3 justify-between mt-6 mb-3">
        <Text> Tạm tính: </Text>
        <Text> {formatCurrency(totalPrice)} </Text>
      </div>

      <StyledBtns className="center-row gap-3">
        <Button className="btn-buynow"> Mua Ngay</Button>
        {!hideOrderBtn && (
          <Link href={PATHS.checkout}>
            <Button className="btn-order">Đặt hàng</Button>
          </Link>
        )}
      </StyledBtns>
    </Card>
  );
};

const StyledBtns = styled.div`
  button {
    font-weight: 600;
    height: 54px;
    border: 5px;
    color: #ffffff;
    flex: 1;
  }
  .btn-buynow {
    background-color: #f7dd04;
  }
  .btn-order {
    background-color: #00adef;
  }
`;

export { CartTotal };
