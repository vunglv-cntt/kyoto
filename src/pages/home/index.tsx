import BestProduct from "@component/HomePage/BestProduct";
import FlashSale from "@component/HomePage/FlashSale";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import BestSeller from "@component/HomePage/BestSeller";
import ShopSystem from "@component/HomePage/ShopSystem";
import Advise from "@component/HomePage/Advise";
import Summary from "@component/HomePage/Summary";
import { Banners, Categories, Distributors } from "@component/HomePage";
import { Container } from "@component/container";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banners />
      <Container className="gap-[40px]">
        <Categories />
        <ButtonSearch />
        <FlashSale />
        <BestSeller />
        <BestProduct />
        <Distributors />
        <ShopSystem />
        <Advise />
        <Summary />
      </Container>
    </>
  );
};

export default Home;
