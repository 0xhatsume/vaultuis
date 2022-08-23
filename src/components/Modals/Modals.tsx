import React from "react";
import { useActiveModalList } from "../../redux/application/hooks";
import { SelectWalletModal } from "./SelectWalletModal";
import { WalletInfoModal } from "./WalletInfoModal";

export const Modals = () => {
    const activeModalList = useActiveModalList();

    if (!activeModalList.length) return null;

    return (
        <>
            {activeModalList.includes("SelectWalletModal") && (
                <SelectWalletModal />
            )}
            {activeModalList.includes("WalletInfoModal") && <WalletInfoModal />}
        </>
    );
};
