import { Product } from "@component/product";
import { Text } from "@component/text";
import React from "react";
import { ProductType } from "services/main/models";

type Props = {
  categoryName: string;
  products?: ProductType[];
};

const CategoryProducts = (props: Props) => {
  const { categoryName = "", products = [] } = props;

  return (
    <div>
      <Text>{categoryName}</Text>

      {/* Products */}
      {products.map((product) => (
        <Product />
      ))}
    </div>
  );
};

export { CategoryProducts };
