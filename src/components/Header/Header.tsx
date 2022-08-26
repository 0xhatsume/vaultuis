import { useWeb3React } from "@web3-react/core";
import { NETWORK_CONTEXT_NAME } from '../../config/constants';
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActiveWeb3React, 
            useEagerConnect, useInactiveListener, 
        useScroll } from "../../hooks";
import { network } from "../../connectors";
import { setStickyHeader, showModal } from "../../redux/application";
import { useIsStickyHeader } from "../../redux/application/hooks";
import {
            CTA,
            CTALink,
            Logo,
            LogoLink,
            Navicon,
            Navigation,
            NavLink,
            Starburst,
            StyledHeader,
} from "./Header.styles";
import { Wallet } from "./Wallet";

export const Header = () => {
    
    const router = useRouter();
    const dispatch = useDispatch();

    const { active, account } = useWeb3React();
    const { active: networkActive, error: networkError, 
            activate: activateNetwork, account: activeAccount } = useWeb3React(NETWORK_CONTEXT_NAME);
    const [activeNavicon, setActiveNavicon] = useState(false);
    const isStickyHeader = useIsStickyHeader();

    const triedEager = useEagerConnect();
    // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
    useEffect(() => {
        if (triedEager && !networkActive && !networkError && !active) {
        activateNetwork(network)
        }
    }, [triedEager, networkActive, networkError, activateNetwork, active])

    // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
    useInactiveListener(!triedEager)

    const isActive = (route: string) => {
        if (route !== "/") return router.pathname.startsWith(route);
        return router.pathname == route;
    };

    const scrollFn = useCallback(() => {
        if (typeof window !== "undefined") {
            const shouldSticky = window.scrollY > 50;
            if (shouldSticky && !isStickyHeader) {
                dispatch(setStickyHeader(true));
            }
            if (!shouldSticky && isStickyHeader) {
                dispatch(setStickyHeader(false));
            }
        }
    }, [dispatch, isStickyHeader]);
    useScroll(scrollFn);

    const handleClickConnectWallet = () => {
        setActiveNavicon(false);
        dispatch(showModal("SelectWalletModal"));
    };

    // useEffect(() => {
    //     if(account){
    //         const wallet
    //     }
    // }, [active, account])
    const { account: dominantAccount } = useActiveWeb3React();
    return (
        <StyledHeader sticky={isStickyHeader}>
            <Link href="/" passHref>
                <LogoLink
                    active={activeNavicon}
                    onClick={() => setActiveNavicon(false)}
                >
                    Logo Placeholder
                </LogoLink>
            </Link>
            <Navigation active={activeNavicon}>
                
                {!dominantAccount ? (
                    <Link href="/" passHref>
                        <CTALink onClick={handleClickConnectWallet}>
                            <CTA
                                height={34}
                            >{`Connect Wallet`}</CTA>
                        </CTALink>
                    </Link>
                ) : (
                    <Wallet />
                )}
            </Navigation>
            <Navicon
                active={activeNavicon}
                onClick={() => setActiveNavicon(!activeNavicon)}
            >
                <div />
            </Navicon>
        </StyledHeader>
    );
};
