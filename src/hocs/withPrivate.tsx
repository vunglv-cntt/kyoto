import React from "react";

import { PATHS } from "constants/routes";
import { DOMAIN } from "constants/schema";
import { useAsync } from "../hooks/useAsync";
import { authStorage } from "helpers/locale-storage";
import useNavigate from "@hooks/useNavigate";

export const withPrivate =
  (WrappedComponent: React.FC<any>) => (props: any) => {
    const { router } = useNavigate();
    const token = authStorage.get("token");

    // useAsync({
    //   onSuccess: (res) => {},
    //   onFailed: () => {
    //     router.push(PATHS.home);
    //   },
    //   callOnFirst: token,
    // });

    if (!token) {
      router.push(PATHS.home);
      console.log("show login form");
    }

    return <WrappedComponent {...props} />;
  };
