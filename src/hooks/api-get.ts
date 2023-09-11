import axiosConfig from "core/axios";
import useSWRMutation from "swr/mutation";

const ApiGet = (url: string, onSuccess?: () => void) => {
  return useSWRMutation(
    url,
    (url, { arg }: { arg: any }) => {
      return axiosConfig.get(url, arg).then((res: any) => res.data);
    },
    {
      onSuccess: onSuccess ? onSuccess : () => {},
    }
  );
};

export default ApiGet;
