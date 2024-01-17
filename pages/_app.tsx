import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import "../components/article/article-card.css";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}
