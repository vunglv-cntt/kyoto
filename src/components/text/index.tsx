import { Typography } from "antd";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode | string;
};

const Text = (props: Props) => {
  const { className } = props;

  return (
    <Typography.Text
      {...props}
      className={`text-default text-[16px] block ${className}`}
    />
  );
};

export { Text };
