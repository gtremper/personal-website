import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
