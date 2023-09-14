import { useEffect, useMemo, useState } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductsByCategoryId } from "services/product";
import { CategoryProducts } from "@component/category-products";
import axios from "axios";
import { Categories } from "./Categories";
import { useRouter } from "next/router";
// Styled-components cho container

function ProductCategoryDetail({ id }) {
  console.log(id, "id category");

  const [, productsData] = useAsync(apiGetProductsByCategoryId, {
    callOnFirst: true,
    callOnFirstArgs: [id],
  });
  const products = useMemo(() => productsData?.data?.data, [productsData]);
  console.log("products", products);

  return (
    <CategoryProducts categoryName="Danh sách sản phẩm" products={products} />
  );
}

export default ProductCategoryDetail;
