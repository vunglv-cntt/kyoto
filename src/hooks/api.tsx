import useSWR from "swr";
// import { authStorage } from "@/helper/locale-storage";
import axiosConfig from "core/axios";
// const authenToken = authStorage.get("auth");

interface IOptions {
  payload?: object;
  filter?: object;
}

const UseApi = (
  method: "get" | "post" | "patch" | "delete",
  url: string | null,
  options?: IOptions
) => {
  const { data, error, mutate } = useSWR(url ? url : null, (url) => {
    if (method === "get" || method === "delete") {
      return axiosConfig[method](url, {
        params: options?.filter,
      })
        .then((res: any) => res.data)
        .catch((error) => {
          // Handle the error
          console.error("Error sending data:", error);
          throw error;
        });
    } else {
      return axiosConfig[method](url, options?.payload)
        .then((res: any) => res.data)
        .catch((error) => {
          // Handle the error
          console.error("Error sending data:", error);
          throw error;
        });
    }
  });

  return {
    data,
    error,
    mutate,
  };
};

export default UseApi;
