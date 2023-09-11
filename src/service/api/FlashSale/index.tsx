import { FLashSaleApi } from "core/contants/api-path/api-path";
import ApiGet from "@/hooks/api-get";

export const getListproduct = (product_id: int) => {
  return ApiGet(`${FLashSaleApi.GET_LIST + "/" + product_id}`);
};

 ;

export const convertDataSubjects = (object: ObjectConstructor) => {
  const objectValues = Object.values(object || {});

  return objectValues.map((i) => ({ label: i, value: i })) || [];
}