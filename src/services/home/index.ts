import http from "../http";
import { GetBanners } from "../main/models";

export const apiGetBanners = () =>
  http.get<BaseAPIResponse<GetBanners | any>>(`/api/banner`);
