import { Text } from "@component/text";
import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  number?: number;
  label?: string;
  rightHeaderElement?: ReactNode;
  children?: ReactNode;
};

const TemplateStep = (props: Props) => {
  const {
    number = 0,
    label,
    rightHeaderElement = null,
    children = null,
  } = props;
  return (
    <StyledStep>
      <div className="center-row justify-between">
        <div className="flex gap-3 mb-3">
          <span className="step-index">{number}</span>
          <Text className="label">{label}</Text>
        </div>
        {rightHeaderElement}
      </div>
      {children}
    </StyledStep>
  );
};

const StyledStep = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;

  .step-index {
    background-color: var(--app-main-color);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .label {
    font-weight: 500;
    font-size: 24px;
  }


`;

export { TemplateStep };
