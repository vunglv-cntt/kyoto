import { Banners, Categories, Features } from "@component/HomePage";
import Advise from "@component/HomePage/Advise";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import FlashSale from "@component/HomePage/FlashSale";
import Breadcrumbs from "@component/breadcrumbs";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import useNavigate from "@hooks/useNavigate";

type Props = {};

const Category = (props: Props) => {
  const { categoryId } = useNavigate().router.query;

  return (
    <main>
      <Banners />
      <Container className="gap-[40px] mb-6">
        <Categories />
        <ButtonSearch />
        <Breadcrumbs />
        <FlashSale />
        <Advise />
      </Container>
      <Features />
    </main>
  );
};

Category.layout = AppLayout;

export default Category;
