import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useActiveWeb3React, useEagerConnect, useScroll } from "../../hooks";
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
    useEagerConnect();
    
    const router = useRouter();
    const dispatch = useDispatch();
    const { active } = useActiveWeb3React();
    const [activeNavicon, setActiveNavicon] = useState(false);
    const isStickyHeader = useIsStickyHeader();

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
                
                {!active ? (
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
