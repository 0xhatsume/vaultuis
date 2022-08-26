import { Web3Provider } from "@ethersproject/providers";

export function getLibrary(provider: any): Web3Provider {
    // const library = new Web3Provider(provider, "any");
    // library.pollingInterval = 15000;
    // return library;
    const library = new Web3Provider(
        provider,
        typeof provider.chainId === 'number'
            ? provider.chainId
            : typeof provider.chainId === 'string'
            ? parseInt(provider.chainId)
            : 'any'
    )
    library.pollingInterval = 15_000
    library.detectNetwork().then((network) => {
    //const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId]
    const networkPollingInterval = 1000 //hardcode here becos most from uniswap lib are ms('1s')
    if (networkPollingInterval) {
        console.debug('Setting polling interval', networkPollingInterval)
        library.pollingInterval = networkPollingInterval
    }
    })
    return library
}
