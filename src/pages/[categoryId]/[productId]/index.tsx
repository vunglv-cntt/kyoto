import { Categories } from "@component/HomePage";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import useNavigate from "@hooks/useNavigate";
import ProductDetail from "@ui/product";
type Props = {};

const Product = (props: Props) => {
  const { productId } = useNavigate().router.query;
  console.log(productId, "ProductID");
  return (
    <main>
      <Container className="gap-[40px]">
        <ProductDetail id={productId} />
      </Container>
      <Categories />
    </main>
  );
};

Product.layout = AppLayout;

export default Product;
