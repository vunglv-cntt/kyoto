import { BaseTextArea } from "@component/input";
import React from "react";
import styled from "styled-components";

type Props = {};

const Note = (props: Props) => {
  return (
    <StyledNote className="content-box">
      Ghi chú
      <BaseTextArea className="mt-4" rows={4} placeholder="Nhập ghi chú" />
    </StyledNote>
  );
};

const StyledNote = styled.div``;

export { Note };
