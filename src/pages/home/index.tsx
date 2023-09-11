import BestProduct from "@component/HomePage/BestProduct";
import FlashSale from "@component/HomePage/FlashSale";
import ButtonSearch from "@component/HomePage/ButtonSearch";
import BestSeller from "@component/HomePage/BestSeller";
import Distribution from "@component/HomePage/Distribution";
import ShopSystem from "@component/HomePage/ShopSystem";
import Advise from "@component/HomePage/Advise";
import Summary from "@component/HomePage/Summary";
import { Banners, Categories } from "@component/HomePage";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banners />
      <Categories />
      <ButtonSearch />
      <FlashSale />
      <BestSeller />
      <BestProduct />
      <Distribution />
      <ShopSystem />
      <Advise />
      <Summary />
    </>
  );
};

export default Home;
