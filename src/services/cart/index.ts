import http from "../http";
import { AddProductToCart, GetCart } from "../main/models";

export const apiGetListCart = () =>
  http.get<BaseAPIResponse<GetCart | any>>(`/api/cart`);

export const apiAddProductToCart = (data: AddProductToCart) =>
  http.post<BaseAPIResponse<any>>(`/api/cart`, data);
