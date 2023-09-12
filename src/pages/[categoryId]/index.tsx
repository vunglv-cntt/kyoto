import { Banners, Categories } from "@component/HomePage";
import Advise from "@component/HomePage/Advise";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import FlashSale from "@component/HomePage/FlashSale";
import Breadcrumbs from "@component/breadcrumbs";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";

type Props = {};

const Category = (props: Props) => {
  return (
    <main>
      <Banners />
      <Container className="gap-[40px] mb-6">
        <Categories />
        <ButtonSearch />
        <Breadcrumbs />
        <FlashSale />
        <Advise />
        <Categories />
      </Container>
    </main>
  );
};

Category.layout = AppLayout;

export default Category;
