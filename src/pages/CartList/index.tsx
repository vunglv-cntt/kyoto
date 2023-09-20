import { Banners } from "@component/HomePage";

import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import CartDetail from "@component/Cart/CartDetail";
type Props = {};

const CartList = (props: Props) => {
  return (
    <main>
      <Container className="gap-[40px] mb-6">
        <CartDetail />
      </Container>
    </main>
  );
};

CartList.layout = AppLayout;

export default CartList;
