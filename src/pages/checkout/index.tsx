import { Container } from "@component/container";
import AppLayout from "@component/layout/AppLayout";
import CheckoutDetail from "@ui/checkout";
type Props = {};

const Checkout = (props: Props) => {
  return (
    <main>
      <Container className="gap-[40px] mb-6">
        <CheckoutDetail />
      </Container>
    </main>
  );
};

Checkout.layout = AppLayout;

export default Checkout;
