import { Input, InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import styled from "styled-components";

type Props = {} & InputProps;

const { TextArea } = Input;

const BaseInput = (props: Props) => {
  return <StyledBaseInput {...props} size="large" />;
};

const BaseTextArea = (props: TextAreaProps) => {
  return <StyledTextAreaInput {...props} size="large" />;
};

const commonCss = `
padding: 10px 16px !important;
`;

const StyledBaseInput = styled(Input)`
  ${commonCss}
`;

const StyledTextAreaInput = styled(TextArea)`
  ${commonCss}
`;

export { BaseInput, BaseTextArea };
