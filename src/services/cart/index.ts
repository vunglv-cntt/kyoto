import { authStorage } from "helpers/locale-storage";
import http from "../http";
import { AddProductToCart, GetCart } from "../main/models";

const authenToken = authStorage.get("auth");

export const apiGetListCart = () =>
  http.get<BaseAPIResponse<GetCart | any>>(`/api/cart`, {
    headers: {
      ...(authenToken
        ? {
            Authorization: `Bearer ${authenToken}`,
          }
        : {}),
    },
  });

export const apiAddProductToCart = (data: AddProductToCart) =>
  http.post<BaseAPIResponse<any>>(`/api/cart`, data);
