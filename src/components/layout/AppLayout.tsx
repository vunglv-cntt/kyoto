import Footer from "@component/footer/Footer";
import Header from "@component/header/Header";
import Sticky from "@component/sticky/Sticky";
import Topbar from "@component/topbar/Topbar";
import Head from "next/head";
import React from "react";
import StyledAppLayout from "./AppLayoutStyle";
type Props = {
  title?: string;
  navbar?: React.ReactChild;
  children?: any;
};

const AppLayout: React.FC<Props> = ({
  children,
  navbar,
  title = "Kyoto Tool & power Japan",
}) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />

    <Header />

    {navbar && <div className="section-after-sticky">{navbar}</div>}
    {!navbar ? (
      <div className="section-after-sticky">{children}</div>
    ) : (
      children
    )}

    <Footer />
  </StyledAppLayout>
);

export default AppLayout;
