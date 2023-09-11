import Banner from "@component/HomePage/Banner";
import BestProduct from "@component/HomePage/BestProduct";
import FlashSale from "@component/HomePage/FlashSale";
import Category from "@component/HomePage/Category";

import ButtonSearch from "@component/HomePage/ButtonSearch";
import BestSeller from "@component/HomePage/BestSeller";
import Distribution from "@component/HomePage/Distribution";
import ShopSystem from "@component/HomePage/ShopSystem";
import Advise from "@component/HomePage/Advise";
import Summary from "@component/HomePage/Summary";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <Category />
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
