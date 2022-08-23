import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { RPC } from "../config/constants";

const DEFAULT_CHAIN_ID = parseInt(process.env.DEFAULT_CHAIN_ID??"1");
const SUPPORTED_CHAIN_IDS = process.env.SUPPORTED_CHAIN_IDS.split(",").map(
    (v) => parseInt(v),
);

export const injected = new InjectedConnector({
    supportedChainIds: SUPPORTED_CHAIN_IDS,
});

// TODO: support multi chains
export const walletconnect = new WalletConnectConnector({
    rpc: { [DEFAULT_CHAIN_ID]: RPC[DEFAULT_CHAIN_ID] },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

// bscconnector will default to bsc mainnet unless explicitly specified
export const bscConnector = new BscConnector({
    supportedChainIds: [DEFAULT_CHAIN_ID === 97 ? 97 : 56],
});

export * from "./NetworkConnector";
