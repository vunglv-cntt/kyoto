import BestProduct from "@component/HomePage/BestProduct";
import FlashSale from "@component/HomePage/FlashSale";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import BestSeller from "@component/HomePage/BestSeller";
import ShopSystem from "@component/HomePage/ShopSystem";
import Advise from "@component/HomePage/Advise";
import {
  Banners,
  Categories,
  Distributors,
  DemoVideo,
} from "@component/HomePage";
import { Container } from "@component/container";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banners />
      <Container className="gap-[40px] mb-4">
        <Categories />
        <ButtonSearch />
        <FlashSale />
        <BestSeller />
        <DemoVideo />
        <BestProduct />
        <Distributors />
        <ShopSystem />
        <Advise />
        <Categories />
      </Container>
    </>
  );
};

export default Home;
