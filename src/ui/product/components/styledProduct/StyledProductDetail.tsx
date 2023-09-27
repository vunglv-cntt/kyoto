import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledProductDetailTab = styled.div`
  .navigation-top {
    height: 100%;
    color: #b2bac6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 17px;
  }

  .navigation-top a {
    text-decoration: none;
    color: #b2bac6;
    margin: 0 10px;
    transition: color 0.3s ease;
  }

  .navigation-top a.active {
    color: #00adef;
  }

  .navigation-top a:hover {
    text-decoration: underline;
  }
  .content {
    color: black;
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
  }

  .horizontal-images {
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  .horizontal-images li {
    margin: 0 10px;
  }

  .horizontal-images img {
 
  
  }
`;
