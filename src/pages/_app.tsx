import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { NETWORK_CONTEXT_NAME } from '../config/constants';
import { getLibrary } from "../utils/getLibrary";
import { ThemeProvider } from "../theme";
import store from "../redux/store";

const Web3ProviderNetwork = createWeb3ReactRoot(NETWORK_CONTEXT_NAME);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default MyApp
