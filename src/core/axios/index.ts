import { authStorage } from "helpers/locale-storage";
import { removeUndefinedKeys } from "helpers/removeUndefined";
import message from "antd/es/message";
import * as axios from "axios";
const authenToken = authStorage.get("auth");

const headerSetting = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: authenToken ? `Bearer ${authenToken}` : "",
};

const axiosConfig = axios.default.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
  headers: removeUndefinedKeys(headerSetting),
});
 
axiosConfig.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Edit response config

    return response;
  },
  (error) => {
    console.log("error---", error);

    if (
      (error?.response?.status == 401 ||
        (error?.response?.status == 400 &&
          error?.response?.data?.data.error_code === "AUTH_EXPIRED")) &&
      typeof window !== "undefined"
    ) {
      window.location.href = "/login";
    } else {
      message.error(
        error?.response?.data?.errors?.message || error?.response?.data?.data?.message ||
          "Hệ thống bảo trì, vui lòng quay lại sau!"
      );
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
