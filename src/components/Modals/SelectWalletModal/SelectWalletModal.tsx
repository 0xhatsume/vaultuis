import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Frame, Overlay } from "../../../components";
import { bscConnector, injected, walletconnect } from "../../../connectors";
import { useActiveWeb3React } from "../../../hooks";
import { hideModal, showNotification } from "../../../redux/application";
import { setupNetwork } from "../../../utils";
import {
    Option,
    OptionInner,
    OptionList,
    Title,
} from "./SelectWalletModal.styles";

export const SelectWalletModal = () => {
    const dispatch = useDispatch();
    const { activate, deactivate, error } = useActiveWeb3React();
    const { t } = useTranslation("common");
    const handleHideModal = () => dispatch(hideModal("SelectWalletModal"));

    useEffect(() => {
        if (error?.message) {
            dispatch(
                showNotification({
                    type: "negative",
                    content: error.message,
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error?.message]);

    const handleConnectWallet = async (
        connector: InjectedConnector | WalletConnectConnector | BscConnector,
        wallet = "",
        errorHandler?: (e: Error) => void,
    ) => {
        let error: Error;
        try {
            await setupNetwork();
            await activate(connector, errorHandler, true);
        } catch (e) {
            error = e;
            dispatch(
                showNotification({
                    type: "negative",
                    content: e?.message || "Error connecting to wallet",
                }),
            );
        }
        if (!error) {
            handleHideModal();
            dispatch(
                showNotification({
                    type: "positive",
                    content: `${wallet} ${t`wallet.wallet`} ${t`wallet.connected`}`,
                }),
            );
        }
    };

    const walletConnectErrorHandler = (error: Error) => {
        if (error instanceof UserRejectedRequestErrorWalletConnect) {
            walletconnect.walletConnectProvider = null;
            walletconnect.close();
            deactivate();
            dispatch(
                showNotification({
                    type: "negative",
                    content: error.message,
                }),
            );
        }
    };

    return (
        <Overlay onClickOutside={handleHideModal}>
            <Frame width="428px" padding="30px" onClose={handleHideModal}>
                <Title>{t`wallet.select-a-wallet`}</Title>
                <OptionList>
                    <Option onClick={() => handleConnectWallet(injected)}>
                        <OptionInner icon="/img/ui/logos/metamask.svg">
                            {t`wallet.metamask`}
                        </OptionInner>
                    </Option>
                    <Option
                        onClick={() =>
                            handleConnectWallet(
                                walletconnect,
                                t`wallet.walletconnect`,
                                walletConnectErrorHandler,
                            )
                        }
                    >
                        <OptionInner icon="/img/ui/logos/walletconnect.svg">
                            {t`wallet.walletconnect`}
                        </OptionInner>
                    </Option>
                    <Option onClick={() => handleConnectWallet(injected)}>
                        <OptionInner icon="/img/ui/logos/trust-wallet.svg">
                            {t`wallet.trust-wallet`}
                        </OptionInner>
                    </Option>
                    <Option onClick={() => handleConnectWallet(injected)}>
                        <OptionInner icon="/img/ui/logos/math-wallet.svg">
                            {t`wallet.math-wallet`}
                        </OptionInner>
                    </Option>
                    <Option onClick={() => handleConnectWallet(injected)}>
                        <OptionInner icon="/img/ui/logos/tokenpocket.svg">
                            {t`wallet.tokenpocket`}
                        </OptionInner>
                    </Option>
                    <Option
                        onClick={() =>
                            handleConnectWallet(bscConnector, t`binance-chain`)
                        }
                    >
                        <OptionInner icon="/img/ui/logos/binance-chain.svg">
                            {t`wallet.binance-chain`}
                        </OptionInner>
                    </Option>
                    <Option onClick={() => handleConnectWallet(injected)}>
                        <OptionInner icon="/img/ui/logos/safepal.svg">
                            {t`wallet.safepal-wallet`}
                        </OptionInner>
                    </Option>
                </OptionList>
            </Frame>
        </Overlay>
    );
};
