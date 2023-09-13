import { useMemo } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductsByCategoryId } from "services/product";
import { CategoryProducts } from "@component/category-products";
import { Categories } from "./Categories";
// Styled-components cho container

function ProductCategoryDetail({ id }) {
  console.log(id, "id category");
  const [, productsData] = useAsync(apiGetProductsByCategoryId, {
    callOnFirst: true,
    callOnFirstArgs : [id]
  });
  const products = useMemo(() => productsData?.data?.data, [productsData]);

  return (
    <CategoryProducts categoryName="DAnh sách sản phẩm" products={products} />
  );
}

export default ProductCategoryDetail;
