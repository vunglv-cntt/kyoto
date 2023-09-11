import http from "../http";
import { GetBanners, GetCategories } from "../main/models";

export const apiGetBanners = () =>
  http.get<BaseAPIResponse<GetBanners | any>>(`/api/banner`);

export const apiGetCategories = () =>
  http.get<BaseAPIResponse<GetCategories | any>>(`/api/category/home/all`);
