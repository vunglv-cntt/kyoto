import { Banners, Categories } from "@component/HomePage";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import FlashSale from "@component/HomePage/FlashSale";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";

type Props = {};

const Product = (props: Props) => {
  return (
    <main>
      <Banners />
      <Container className="gap-[40px]">
        <Categories />
        <ButtonSearch />
        <FlashSale />
      </Container>
    </main>
  );
};

Product.layout = AppLayout;

export default Product;
