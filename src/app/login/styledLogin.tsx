import { breakpointDevice } from "@constants/breakpoints";
import { Row } from "antd";
import styled from "styled-components";

export const StyledLogin = styled.div`
  .form-container {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
  }

  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .input-container {
    margin-bottom: 20px;
  }

  .input-container input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .password-toggle {
    display: flex;
    align-items: center;
  }

  .password-toggle button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #007bff;
    margin-left: 5px;
  }

  .login-button {
    width: 100%;
    padding: 10px;
    height:50%;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .register-button {
    margin-top: 10px;
    font-size: 16px;
    color: #007bff;
    cursor: pointer;
    height:50%;
  }

  /* CSS cho modal */
  .modal-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .modal-content {
    padding: 20px;
  }

  .modal-footer {
    text-align: center;
    margin-top: 20px;
  }

  .login-button-modal {
    width: 100%;
    height: 50%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button-modal:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
