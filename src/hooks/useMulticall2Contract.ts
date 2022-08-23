import MULTICALL2_ABI from "../config/abis/multicall2.json";
import { Multicall2 } from "../config/abis/types";
import { MULTICALL2_ADDRESSES } from "../config/constants";
import { useContract } from "./useContract";

export function useMulticall2Contract() {
    return useContract<Multicall2>(
        MULTICALL2_ADDRESSES,
        MULTICALL2_ABI,
        false,
    ) as Multicall2;
}
