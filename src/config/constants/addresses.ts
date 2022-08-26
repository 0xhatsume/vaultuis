import { ChainId } from "../../config/typings";

export const MULTICALL2_ADDRESSES: { [key in ChainId]?: string } = {
    [ChainId.BSC]: "0x2DdDA466870F5Aca28ccEd1BD9749De2f6c90312",
    [ChainId.BSC_TESTNET]: "0xC895f62b0fcFA0aDb6b390A834EF44ac2503aaaF",
    [ChainId.MAINNET]: "0x1F98415757620B543A52E61c46B32eB19261F984"
};