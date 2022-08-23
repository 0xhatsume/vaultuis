import React, { ReactNode } from "react";
import { NETWORKS } from "../../../config/constants";
import { useActiveWeb3React } from "../../../hooks/useActiveWeb3React";
import { HashLink, HashWrapper } from "./TransactionNotification.styles";

interface Props {
    hash: string;
    children: ReactNode;
}

export const TransactionNotification = (props: Props) => {
    const { hash, children } = props;
    const { chainId } = useActiveWeb3React();

    return (
        <div>
            Success
            <HashWrapper>
                Hash:
                <HashLink
                    href={`${NETWORKS[chainId]?.explorer}/tx/${hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {hash}
                </HashLink>
            </HashWrapper>
            {children}
        </div>
    );
};
