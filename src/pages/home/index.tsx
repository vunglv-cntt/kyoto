import Section11 from "@component/HomePage/Section11";
import Section13 from "@component/HomePage/Section13";

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
      <Section13 />
      <BestSeller />
      <Section11 />
      <Distribution />
      <ShopSystem />
      <Advise />
      <Summary />
    </>
  );
};

export default Home;
