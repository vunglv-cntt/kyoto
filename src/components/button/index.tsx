import { Button, ButtonProps } from "antd";
import React from "react";

type Props = {
  className?: string;
} & ButtonProps;

const StyledButton = (props: Props) => {
  const { className } = props;
  return <Button {...props} className={`flex items-center ${className}`} />;
};

const ViewMoreButton = (props: Props) => {
  const { className, children = "Xem tất cả" } = props;
  return (
    <Button {...props} className={`${className}`}>
      {children}
    </Button>
  );
};

export { StyledButton as Button, ViewMoreButton };
