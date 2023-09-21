import React from "react";
import Link from "next/dist/client/link";
import { Modal, Form, Input, Button } from "antd";
import { DOMAIN } from "@constants/schema";
import { authStorage } from "helpers/locale-storage";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import Register from "app/register/page";
type LoginDialogProps = {
  visible: boolean;
  onClose: () => void;
};
const { Item } = Form;

const LoginDialog: React.FC<LoginDialogProps> = ({ visible, onClose }) => {
  const router = useRouter();
  const [values, setValues] = useState({
    phone_number: "",
    password: "",
  });
  const [isLoginDialogVisible, setLoginDialogVisible] = useState(false);

  const showLoginDialog = () => {
    setLoginDialogVisible(true);
  };

  const closeLoginDialog = () => {
    setLoginDialogVisible(false);
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleChangePasswordStatus = () =>
    setIsPasswordShown((status) => !status);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = async () => {
    try {
      const payload = {
        phone_number: values.phone_number,
        password: values.password,
      };
      // Make API request to authenticate user
      const response: any = await fetch(`${DOMAIN}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const { data } = await response.json();
        const accessToken = data.accessToken;

        await authStorage.set("auth", accessToken);
        console.log(authStorage, "authth");

        window.location.reload();
        onClose();
        console.log("vungle2001");
      } else {
        // Handle login error
        alert("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.");
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };
  const isLoginBtnDisabled = !values.phone_number || !values.password;
  return (
    <Modal
      title="Đăng Nhập/Đăng Ký"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div>
        <div>
          <p>Chào Mừng Đăng nhập</p>
          <Form
            onSubmitCapture={() => {}}
            onFinish={onFinish}
            className={""}
            onChange={(e) => onChangeInput(e as any)}
          >
            <Item>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="phone_number"
                className={"styles.input"}
                placeholder={"Số điện thoại"}
              />
            </Item>

            <Item>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="password"
                type={isPasswordShown ? "text" : "password"}
                className={"styles.input"}
                placeholder={"Password"}
                suffix={
                  isPasswordShown ? (
                    <Button onClick={() => handleChangePasswordStatus()}>
                      Hidden Password
                    </Button>
                  ) : (
                    <Button onClick={() => handleChangePasswordStatus()}>
                      Show Password
                    </Button>
                  )
                }
              />
            </Item>

            <Button
              disabled={isLoginBtnDisabled}
              // className={cn([
              //   "mt-[68px]",
              //   "font-medium",
              //   isLoginBtnDisabled
              //     ? styles.loginBtnDisabled
              //     : styles.loginBtnActive,
              // ])}
              htmlType="submit"
            >
              Đăng Nhập
            </Button>
            <Button onClick={showLoginDialog}>Tạo tài khoản mới</Button>
          </Form>
        </div>
      </div>
      <Register visible={isLoginDialogVisible} onClose={closeLoginDialog} />
    </Modal>
  );
};

export default LoginDialog;
