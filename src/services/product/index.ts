import http from "../http";
import { GetCategories, GetProducts } from "../main/models";

export const apiGetProductsByCategoryId = (id: string) =>
  http.get<BaseAPIResponse<GetProducts | any>>(`/api/product/category/${id}`);

export const apiGetCategories = () =>
  http.get<BaseAPIResponse<GetCategories | any>>(`/api/category/home/all`);
