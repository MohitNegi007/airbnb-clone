import "../styles/globals.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps } from "next/app";
const progress = new ProgressBar({
  size: 4,
  color: "#FE59E",
  className: "z-50",
  delay: 100,
});
Router.events.on("routerChangeStart", progress.start);
Router.events.on("routerChangeComplete", progress.finish);
Router.events.on("routerChangeError", progress.finish);
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
