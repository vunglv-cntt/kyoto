import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { AppProvider } from "../contexts/app/AppContext";
import { GlobalStyles } from "../utils/globalStyles";
import { theme } from "../utils/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import antTheme from "themes/ant-theme";
import withUserApiData from "hocs/withUserApiData";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: any) => {
  let Layout = Component.layout || Fragment;

  return (
    <ConfigProvider theme={antTheme}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <GlobalStyles />
        <AppProvider>
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withUserApiData(App);
