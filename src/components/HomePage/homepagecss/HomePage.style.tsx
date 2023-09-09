
import styled from "styled-components";
import { getTheme } from "../../../utils/utils";

const StyledHome = styled.div`
/* CSS cho component Advise */
.card-container {
  width: 100%;
  height: 644px;
  border-radius: 30px;
  padding: 1rem;
}

.card-content {
  display: flex;
  height: 100%;
}

.left-column {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.title {
  margin-right: 1rem;
}

.input-row {
   justify-content: space-between;
}

.text-input {
  flex: 1;
  margin-right: 1rem;
  width: 219px;
  height: 48px;
}

.textarea {
  width: 462px;
  height: 48px;
  margin-top: 1rem;
}

.submit-button {
  width: 462px;
  height: 48px;
  margin-top: 1rem;
}

.right-column {
  flex: 1;
}

`;
export default StyledHome;