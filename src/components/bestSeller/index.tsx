import { Col, Row } from "antd";
import React, { memo } from "react";
import { ProductType } from "services/main/models";
import { ProductBestSeller } from "@component/product-bestseller";
import { Title } from "@component/title";
type Props = {
  categoryName: string;
  products?: ProductType[];
};

const BestSellerProduct = memo((props: Props) => {
  const { categoryName = "", products = [] } = props;

 

  return (
    <div>
    <Title>{categoryName}</Title>

    {/* Products */}
    <Row gutter={[16, 16]} className="mt-4">
      {products.map((product) => (
        <Col key={product.id} className="w-[50%] md:w-[20%]">
          <ProductBestSeller {...{ product }} />
        </Col>
      ))}
    </Row>
  </div>
  );
});

export { BestSellerProduct };
