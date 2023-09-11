import { CategoryProducts } from "@component/category-products";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductsByCategoryId } from "services/product";
import { useMemo } from "react";

function BestSeller() {
  const [, productsData] = useAsync(apiGetProductsByCategoryId, {
    callOnFirst: true,
    callOnFirstArgs: ["13"],
  });
  const products = useMemo(() => productsData?.data?.data, [productsData]);

  return <CategoryProducts categoryName="Mua nhiều nhất" products={products} />;
}

export default BestSeller;
