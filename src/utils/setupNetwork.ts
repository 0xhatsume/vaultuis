import { RPC } from "../config/constants";

/**
 * Prompt the user to add active network on Metamask, or switch if the wallet is on a different network
 */
export async function setupNetwork() {
    const provider = (window as any).ethereum;
    if (provider) {
        const chainId = parseInt(process.env.DEFAULT_CHAIN_ID??"1", 10);
        try {
            await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`,
                        rpcUrls: [RPC[chainId]],
                    },
                ],
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    } else {
        console.error(
            "Can't setup the network on metamask because window.ethereum is undefined",
        );
        return false;
    }
}
