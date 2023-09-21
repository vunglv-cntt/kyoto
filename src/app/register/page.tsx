import React from "react";
import { Modal,Form, Input, Button } from "antd";
import { DOMAIN } from "@constants/schema";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
type RegisterProps = {
  visible: boolean;
  onClose: () => void;
};
const Register: React.FC<RegisterProps> = ({ visible, onClose }) => {
  const router = useRouter();
  const { Item } = Form;
  const [values, setValues] = useState({
    phone_number: "",
    password: "",
    email: "",
    name: "",
    address: "",
    city: "",
    district: "",
    ward: "",
  });

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
        email: values.email,
        name: values.name,
        address: values.address,
        city: values.city,
        district: values.district,
        ward: values.ward,
      };
      // Make API request to register user
      const response: any = await fetch(`${DOMAIN}/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        const { data } = await response.json();
        const accessToken = data.accessToken;
        alert("Đăng kí thành công");
        router.push("/");
      } else {
        // Handle login error
        alert("Đăng ký thất bại, vui lòng kiểm tra lại thông tin.");
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };
  const isLoginBtnDisabled =
    !values.phone_number ||
    !values.password ||
    !values.email ||
    !values.name ||
    !values.address ||
    !values.city ||
    !values.district ||
    !values.ward;
  return (
    <Modal
    title=" Đăng Ký Tài Khoản"
    open={visible}
    onCancel={onClose}
    footer={null}
  >
    <div>
      <span> Đăng ký tài khoản </span>
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
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="email"
            className={""}
            placeholder={"Email"}
          />
        </Item>
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="name"
            className={"styles.input"}
            placeholder={"Họ tên"}
          />
        </Item>
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="address"
            className={"styles.input"}
            placeholder={"Địa chỉ"}
          />
        </Item>
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="city"
            className={"styles.input"}
            placeholder={"Thành phố"}
          />
        </Item>
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="district"
            className={"styles.input"}
            placeholder={"Quận/huyện"}
          />
        </Item>
        <Item>
          <Input
            onChange={(e) => onChangeInput(e)}
            name="ward"
            className={"styles.input"}
            placeholder={"Xã/Phường"}
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
          Đăng kí
        </Button>
      </Form>
    </div>
    </Modal>
  );
}
export default Register;
