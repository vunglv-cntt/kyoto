import { Button, ButtonProps } from "antd";
import React from "react";

type Props = {
  className?: string;
} & ButtonProps;

const StyledButton = (props: Props) => {
  const { className } = props;
  return <Button {...props} className={`flex items-center ${className}`} />;
};

export { StyledButton as Button };
