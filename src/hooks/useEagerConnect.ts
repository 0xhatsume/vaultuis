import {
    UnsupportedChainIdError,
    useWeb3React as useWeb3ReactCore,
} from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "../connectors";
import { setupNetwork } from "../utils";
import { useActiveWeb3React } from "./useActiveWeb3React";

export function useEagerConnect() {
    const { activate, active } = useWeb3ReactCore(); // specifically using useWeb3ReactCore because of what this hook does
    const [tried, setTried] = useState(false);

    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(async (error) => {
                    if (error instanceof UnsupportedChainIdError) {
                        const hasSetup = await setupNetwork();
                        if (hasSetup) {
                            activate(injected);
                        }
                    }
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

    // if the connection worked, wait until we get confirmation of that to flip the flag
    useEffect(() => {
        if (active) {
            setTried(true);
        }
    }, [active]);

    return tried;
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export function useInactiveListener(suppress = false) {
    const { active, error, activate } = useActiveWeb3React();

    useEffect(() => {
        const { ethereum } = window as any;

        if (ethereum && ethereum.on && !active && !error && !suppress) {
        const handleChainChanged = () => {
            // eat errors
            activate(injected, undefined, true).catch((error) => {
            console.error('Failed to activate after chain changed', error)
            })
        }

        const handleAccountsChanged = (accounts: string[]) => {
            if (accounts.length > 0) {
            // eat errors
            activate(injected, undefined, true).catch((error) => {
                console.error('Failed to activate after accounts changed', error)
            })
            }
        }

        ethereum.on('chainChanged', handleChainChanged)
        ethereum.on('accountsChanged', handleAccountsChanged)

        return () => {
            if (ethereum.removeListener) {
            ethereum.removeListener('chainChanged', handleChainChanged)
            ethereum.removeListener('accountsChanged', handleAccountsChanged)
            }
        }
        }
        return undefined
    }, [active, error, suppress, activate])
}

