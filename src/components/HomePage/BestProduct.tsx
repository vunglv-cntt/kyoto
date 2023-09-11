import { useMemo } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductsByCategoryId } from "services/product";
import { CategoryProducts } from "@component/category-products";

function BestProduct() {
  const [, productsData] = useAsync(apiGetProductsByCategoryId, {
    callOnFirst: true,
    callOnFirstArgs: ["13"],
  });
  const products = useMemo(() => productsData?.data?.data, [productsData]);

  return (
    <CategoryProducts categoryName="Sản Phẩm Nổi Bật" products={products} />
  );
}

export default BestProduct;
