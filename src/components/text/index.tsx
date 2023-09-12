import { Typography, TypographyProps } from "antd";
import { CSSProperties, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode | string;
  style?: CSSProperties;
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
