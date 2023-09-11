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
      className={`text-default font-16 ${className}`}
    />
  );
};

export { Text };
