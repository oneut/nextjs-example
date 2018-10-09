import React from 'react'
import App from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

const isServer = typeof window !== "undefined";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (isServer) {
      NProgress.start();
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (isServer) {
      NProgress.done();
    }

    return { pageProps }
  }
}
