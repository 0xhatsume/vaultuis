import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import { RPC } from "../config/constants";

const DEFAULT_CHAIN_ID = parseInt(process.env.DEFAULT_CHAIN_ID??'1' as string , 10);
export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(
    RPC[DEFAULT_CHAIN_ID],
);

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> {
    const { library, chainId, ...web3React } = useWeb3React();
    const libraryRef = useRef(library);
    const [provider, setprovider] = useState(library || simpleRpcProvider);

    useEffect(() => {
        if (library !== libraryRef.current) {
            setprovider(library || simpleRpcProvider);
            libraryRef.current = library;
        }
    }, [library]);

    return {
        library: provider,
        chainId: chainId ?? DEFAULT_CHAIN_ID,
        ...web3React,
    };
}
