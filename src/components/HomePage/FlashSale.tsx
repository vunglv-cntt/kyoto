import { useMemo } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductsByCategoryId } from "services/product";
import { CategoryProducts } from "@component/category-products";
// Styled-components cho container

function FlashSale() {
  const [, productsData] = useAsync(apiGetProductsByCategoryId, {
    callOnFirst: true,
    callOnFirstArgs: ["25"],
  });
  const products = useMemo(() => productsData?.data?.data, [productsData]);

  return <CategoryProducts categoryName="Khuyến mãi" products={products} />;
}

export default FlashSale;
