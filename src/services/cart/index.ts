import http from "../http";
import { GetCart } from "../main/models";
import { authStorage } from "helpers/locale-storage";
import { AddCart } from "../main/models";

import axiosConfig from "core/axios";

const authenToken = authStorage.get("auth");

export const apiGetListCart = () =>
  http.get<BaseAPIResponse<GetCart | any>>(`/api/cart`, {
    headers: {
      Authorization: authenToken ? `Bearer ${authenToken}` : "",
    },
  });
