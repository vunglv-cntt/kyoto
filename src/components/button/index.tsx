import { NextIcon } from "@assets/icons";
import { Button, ButtonProps } from "antd";

type Props = {
  className?: string;
} & ButtonProps;

const StyledButton = (props: Props) => {
  const { className } = props;
  return (
    <Button
      {...props}
      className={`
        flex items-center text-white justify-center 
        px-3 py-2 h-[auto]
        font-[500] bg-[var(--app-main-color)] 
        ${className}`}
    />
  );
};

const ViewMoreButton = (props: Props) => {
  const { className, children = "Xem tất cả" } = props;
  return (
    <Button
      {...props}
      className={`flex items-center gap-2 font-[600] text-[var(--app-main-color)] ${className}`}
      type="link"
    >
      {children} <NextIcon />
    </Button>
  );
};

export { StyledButton as Button, ViewMoreButton };
