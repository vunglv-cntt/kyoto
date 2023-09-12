import { NextIcon } from "@assets/icons";
import { Button, ButtonProps } from "antd";

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
    <Button
      {...props}
      className={`flex items-center gap-2 font-[500] text-[#1F86C8] ${className}`}
      type="link"
    >
      {children} <NextIcon />
    </Button>
  );
};

export { StyledButton as Button, ViewMoreButton };
