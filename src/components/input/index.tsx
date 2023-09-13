import { Input, InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import styled from "styled-components";

type Props = {} & InputProps;

const { TextArea } = Input;

const BaseInput = (props: Props) => {
  const { className } = props;
  return (
    <Input
      {...props}
      size="large"
      className={`${commonCss} ${className}`}
    />
  );
};

const BaseTextArea = (props: TextAreaProps) => {
  const { className } = props;

  return (
    <TextArea
      {...props}
      size="large"
      className={`${commonCss} ${className}`}
    />
  );
};

const commonCss = `py-[10px] px[16px]`;

export { BaseInput, BaseTextArea };
