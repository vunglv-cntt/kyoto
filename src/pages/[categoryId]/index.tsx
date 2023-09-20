import { Banners, Categories, Features } from "@component/HomePage";
import Advise from "@component/HomePage/Advise";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import ProductCategoryDetail from "@component/HomePage/ProductCategoryDetail";
import Breadcrumbs from "@component/breadcrumbs";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import useNavigate from "@hooks/useNavigate";

type Props = {};

const Category = (props: Props) => {
  const { categoryId } = useNavigate().router.query;

  console.log(categoryId);

  return (
    <main>
      <Banners />
      <Container className="gap-[40px] mb-6">
        <Categories />
        <ButtonSearch />
        <Breadcrumbs />
        <ProductCategoryDetail id={categoryId} />
        <Advise />
      </Container>
      <Features />
    </main>
  );
};

Category.layout = AppLayout;

export default Category;
