import { ChakraProvider } from "@chakra-ui/react";
import theme from "config/ui/theme";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
