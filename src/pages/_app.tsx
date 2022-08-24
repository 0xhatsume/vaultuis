import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from 'next/app';
import Head from "next/head";
import { Provider } from "react-redux";
import { NETWORK_CONTEXT_NAME } from '../config/constants';
import { getLibrary } from "../utils/getLibrary";
import { ThemeProvider } from "../theme";
import store from "../redux/store";
import { Header, Modals, Notifications, Updaters } from "../components";
import { StrictMode } from "react";

const Web3ProviderNetwork = createWeb3ReactRoot(NETWORK_CONTEXT_NAME);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
    <Head>
        <title>Crypto Tester UI</title>
        <meta name="description" content="Test Defi/Crypto Stuff" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" type="image/png" />
        <link rel="apple-touch-icon" href="img/ui/system/touch.png" />
    </Head>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeProvider>
            <Header/>
            <Component {...pageProps} />
            <Modals/>
            <Notifications/>
            <Updaters/>
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
    </StrictMode>
  )
}

export default MyApp
