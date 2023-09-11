import http from "../http";
import { Banner } from "./types";

export const apiGetBanners = () =>
  http.get<BaseAPIResponse<Banner>>(`/api/banner`);
