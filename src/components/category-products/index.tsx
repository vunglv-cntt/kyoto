import { Product } from "@component/product";
import { Title } from "@component/title";
import { Col, Row } from "antd";
import React, { memo } from "react";
import { ProductType } from "services/main/models";

type Props = {
  categoryName: string;
  products?: ProductType[];
};

const CategoryProducts = memo((props: Props) => {
  const { categoryName = "", products = [] } = props;

  return (
    <div>
      <Title>{categoryName}</Title>

      {/* Products */}
      <Row gutter={[16, 16]} className="mt-4">
        {products.map((product) => (
          <Col key={product.id} className="w-[50%] md:w-[20%]">
            <Product {...{ product }} />
          </Col>
        ))}
      </Row>
    </div>
  );
});

export { CategoryProducts };
