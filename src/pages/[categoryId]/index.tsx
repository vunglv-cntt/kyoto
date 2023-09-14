import { Banners, Categories, Features } from "@component/HomePage";
import Advise from "@component/HomePage/Advise";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import FlashSale from "@component/HomePage/FlashSale";
import Breadcrumbs from "@component/breadcrumbs";
import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import ProductCategoryDetail from "@component/HomePage/ProductCategoryDetail";
import useNavigate from "@hooks/useNavigate";
import { useRouter } from "next/router";
type Props = {};

const Category = (props: Props) => {
  const router = useRouter()
  const {categoryId} = router.query
  console.log("iddd", categoryId);
  
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
