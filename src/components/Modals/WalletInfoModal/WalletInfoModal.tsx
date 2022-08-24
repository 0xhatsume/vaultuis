import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGhost, Frame, Overlay } from "../../../components";
import { NETWORKS } from "../../../config/constants";
import { useActiveWeb3React, useTimeout } from "../../../hooks";
import { hideModal } from "../../../redux/application";
import {
    ActionsWrapper,
    AddressInfo,
    AddressInfoTitle,
    IconCopy,
    IconNewWindow,
    PlainButton,
    Title,
} from "./WalletInfoModal.styles";

export const WalletInfoModal = () => {
    const dispatch = useDispatch();
    const { account, chainId, deactivate } = useActiveWeb3React();
    const router = useRouter();
    const [copied, toggleCopied] = useState(false);

    useTimeout(() => toggleCopied(false), copied ? 3000 : null);

    const handleHideModal = () => dispatch(hideModal("WalletInfoModal"));

    const handleCopyAddress = async () => {
        if (navigator.clipboard && navigator.permissions) {
            await navigator.clipboard.writeText(account);
            toggleCopied(true);
        } else if (document.queryCommandSupported("copy")) {
            const ele = document.createElement("textarea");
            ele.value = account;
            document.body.appendChild(ele);
            ele.select();
            document.execCommand("copy");
            document.body.removeChild(ele);
            toggleCopied(true);
        }
    };

    const handleLogout = () => {
        deactivate();
        router.push("/");
        dispatch(hideModal("WalletInfoModal"));
    };

    return (
        <Overlay onClickOutside={handleHideModal}>
            <Frame width="428px" padding="30px" onClose={handleHideModal}>
                <Title>{`My Wallet`}</Title>
                <AddressInfo>
                    <AddressInfoTitle>{`Wallet Connected`}</AddressInfoTitle>
                    {account}
                </AddressInfo>
                <ActionsWrapper>
                    <a
                        href={`${NETWORKS[chainId].explorer}/address/${account}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <PlainButton>
                            {`View On Explorer`}
                            <IconNewWindow />
                        </PlainButton>
                    </a>
                    <PlainButton onClick={handleCopyAddress}>
                        {!copied
                            ? `Copy Address`
                            : `Copied!`}
                        <IconCopy />
                    </PlainButton>
                </ActionsWrapper>
                <ButtonGhost
                    height={56}
                    onClick={handleLogout}
                >{`Logout`}</ButtonGhost>
            </Frame>
        </Overlay>
    );
};
