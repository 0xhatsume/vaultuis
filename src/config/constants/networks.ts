import sample from "lodash/sample";
import { ChainId } from "../typings";

export const RPC = {
    [ChainId.MAINNET]:
        "https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC",
    [ChainId.ROPSTEN]:
        "https://eth-ropsten.alchemyapi.io/v2/cidKix2Xr-snU3f6f6Zjq_rYdalKKHmW",
    [ChainId.RINKEBY]:
        "https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD",
    [ChainId.GÖRLI]:
        "https://eth-goerli.alchemyapi.io/v2/Dkk5d02QjttYEoGmhZnJG37rKt8Yl3Im",
    [ChainId.KOVAN]:
        "https://eth-kovan.alchemyapi.io/v2/6OVAa_B_rypWWl9HqtiYK26IRxXiYqER",
    [ChainId.FANTOM]: "https://rpcapi.fantom.network",
    [ChainId.FANTOM_TESTNET]: "https://rpc.testnet.fantom.network",
    [ChainId.MATIC]: "https://rpc-mainnet.maticvigil.com",
    [ChainId.MATIC_TESTNET]: "https://rpc-mumbai.matic.today",
    [ChainId.XDAI]: "https://rpc.xdaichain.com",
    [ChainId.BSC]: sample([
        "https://bsc-dataseed.binance.org/",
        "https://bsc-dataseed1.defibit.io/",
        "https://bsc-dataseed1.ninicoin.io/",
        "https://bsc-dataseed2.defibit.io/",
        "https://bsc-dataseed3.defibit.io/",
        "https://bsc-dataseed4.defibit.io/",
        "https://bsc-dataseed2.ninicoin.io/",
        "https://bsc-dataseed3.ninicoin.io/",
        "https://bsc-dataseed4.ninicoin.io/",
        "https://bsc-dataseed1.binance.org/",
        "https://bsc-dataseed2.binance.org/",
        "https://bsc-dataseed3.binance.org/",
        "https://bsc-dataseed4.binance.org/",
    ]),
    [ChainId.BSC_TESTNET]: sample([
        "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "https://data-seed-prebsc-2-s1.binance.org:8545/",
        "https://data-seed-prebsc-1-s2.binance.org:8545/",
        "https://data-seed-prebsc-2-s2.binance.org:8545/",
        "https://data-seed-prebsc-1-s3.binance.org:8545/",
        "https://data-seed-prebsc-2-s3.binance.org:8545/",
    ]),
    [ChainId.MOONBASE]: "https://rpc.testnet.moonbeam.network",
    [ChainId.AVALANCHE]: "https://api.avax.network/ext/bc/C/rpc",
    [ChainId.FUJI]: "https://api.avax-test.network/ext/bc/C/rpc",
    [ChainId.HECO]: "https://http-mainnet.hecochain.com",
    [ChainId.HECO_TESTNET]: "https://http-testnet.hecochain.com",
    [ChainId.HARMONY]: "https://explorer.harmony.one",
    [ChainId.HARMONY_TESTNET]: "https://explorer.pops.one",
    [ChainId.OKEX]: "https://exchainrpc.okex.org",
    [ChainId.OKEX_TESTNET]: "https://exchaintestrpc.okex.org",
};

export const NETWORKS = {
    [ChainId.MAINNET]: {
        chainId: "0x1",
        chainName: "Ethereum",
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
        },
        rpc: "https://mainnet.infura.io/v3",
        explorer: "https://etherscan.com",
    },
    [ChainId.ROPSTEN]: {
        chainId: "0x3",
        chainName: "Ropsten",
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
        },
        rpc: "https://eth-ropsten.alchemyapi.io/v2/cidKix2Xr-snU3f6f6Zjq_rYdalKKHmW",
        explorer: "https://ropsten.etherscan.io",
    },
    [ChainId.RINKEBY]: {
        chainId: "0x4",
        chainName: "Rinkeby",
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
        },
        rpc: "https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD",
        explorer: "https://rinkeby.etherscan.io",
    },
    [ChainId.GÖRLI]: {
        chainId: "0x5",
        chainName: "Görli",
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
        },
        rpc: "https://eth-goerli.alchemyapi.io/v2/Dkk5d02QjttYEoGmhZnJG37rKt8Yl3Im",
        explorer: "https://goerli.etherscan.io",
    },
    [ChainId.KOVAN]: {
        chainId: "0x2a",
        chainName: "Kovan",
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
        },
        rpc: "https://eth-kovan.alchemyapi.io/v2/6OVAa_B_rypWWl9HqtiYK26IRxXiYqER",
        explorer: "https://kovan.etherscan.io",
    },
    [ChainId.MATIC]: {
        chainId: "0x89",
        chainName: "Matic",
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpc: "https://rpc-mainnet.maticvigil.com",
        explorer: "https://explorer-mainnet.maticvigil.com",
    },
    [ChainId.MATIC_TESTNET]: {
        chainId: "0x13881",
        chainName: "Mumbai Testnet",
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpc: "https://rpc-mumbai.matic.today",
        explorer: "https://explorer-mumbai.maticvigil.com",
    },
    [ChainId.FANTOM]: {
        chainId: "0xfa",
        chainName: "Fantom",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
        },
        rpc: "https://rpcapi.fantom.network",
        explorer: "https://ftmscan.com",
    },
    [ChainId.FANTOM_TESTNET]: {
        chainId: "0xfa2",
        chainName: "Fantom Testnet",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
        },
        rpc: "https://rpc.testnet.fantom.network",
        explorer: "https://explorer.testnet.fantom.network",
    },
    [ChainId.XDAI]: {
        chainId: "0x64",
        chainName: "xDai",
        nativeCurrency: {
            name: "xDai Token",
            symbol: "xDai",
            decimals: 18,
        },
        rpc: "https://rpc.xdaichain.com",
        explorer: "https://blockscout.com/poa/xdai",
    },
    [ChainId.BSC]: {
        chainId: "0x38",
        chainName: "Binance Smart Chain",
        nativeCurrency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
        },
        blocksPerDay: 28800,
        rpc: "https://bsc-dataseed.binance.org",
        explorer: "https://bscscan.com",
    },
    [ChainId.BSC_TESTNET]: {
        chainId: "0x61",
        chainName: "Binance Chain Testnet",
        nativeCurrency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
            icon: "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850",
        },
        blocksPerDay: 28800,
        // wrappedToken: WBNB[ChainId.BSC_TESTNET],
        rpc: "https://data-seed-prebsc-2-s3.binance.org:8545",
        explorer: "https://testnet.bscscan.com",
    },
    // [ChainId.ARBITRUM]: {}
    // [ChainId.MOONBASE]: {}
    [ChainId.AVALANCHE]: {
        chainId: "0xA86A",
        chainName: "Avalanche",
        nativeCurrency: {
            name: "Avalanche Token",
            symbol: "AVAX",
            decimals: 18,
        },
        rpc: "https://api.avax.network/ext/bc/C/rpc",
        explorer: "https://explorer.avax.network",
    },
    [ChainId.FUJI]: {
        chainId: "0xA869",
        chainName: "Fuji Testnet",
        nativeCurrency: {
            name: "Avalanche Token",
            symbol: "AVAX",
            decimals: 18,
        },
        rpc: "https://api.avax-test.network/ext/bc/C/rpc",
        explorer: "https://cchain.explorer.avax-test.network",
    },
    [ChainId.HECO]: {
        chainId: "0x80",
        chainName: "Heco",
        nativeCurrency: {
            name: "Heco Token",
            symbol: "HT",
            decimals: 18,
        },
        rpc: "https://http-mainnet.hecochain.com",
        explorer: "https://hecoinfo.com",
    },
    [ChainId.HECO_TESTNET]: {
        chainId: "0x100",
        chainName: "Heco Testnet",
        nativeCurrency: {
            name: "Heco Token",
            symbol: "HT",
            decimals: 18,
        },
        rpc: "https://http-testnet.hecochain.com",
        explorer: "https://testnet.hecoinfo.com",
    },
    [ChainId.HARMONY]: {
        chainId: "0x63564C40",
        chainName: "Harmony One",
        nativeCurrency: {
            name: "One Token",
            symbol: "ONE",
            decimals: 18,
        },
        rpc: "https://api.s0.t.hmny.io",
        explorer: "https://explorer.harmony.one/",
    },
    [ChainId.HARMONY_TESTNET]: {
        chainId: "0x6357D2E0",
        chainName: "Harmony Testnet",
        nativeCurrency: {
            name: "One Token",
            symbol: "ONE",
            decimals: 18,
        },
        rpc: "https://api.s0.b.hmny.io",
        explorer: "https://explorer.pops.one",
    },
    [ChainId.OKEX]: {
        chainId: "0x42",
        chainName: "OKEx",
        nativeCurrency: {
            name: "OKEx Token",
            symbol: "OKT",
            decimals: 18,
        },
        rpc: "https://exchainrpc.okex.org",
        explorer: "https://www.oklink.com/okexchain",
    },
    [ChainId.OKEX_TESTNET]: {
        chainId: "0x41",
        chainName: "OKEx Testnet",
        nativeCurrency: {
            name: "OKEx Token",
            symbol: "OKT",
            decimals: 18,
        },
        rpc: "https://exchaintestrpc.okex.org",
        explorer: "https://www.oklink.com/okexchain-test/",
    },
};
