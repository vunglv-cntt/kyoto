import Home from "./home";
import AppLayout from "@component/layout/AppLayout";

const IndexPage = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
