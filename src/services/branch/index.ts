import http from "../http";
import { GetBranchs } from "../main/models";

export const apiGetBranchs = () =>
  http.get<BaseAPIResponse<GetBranchs | any>>(`/api/branch`);