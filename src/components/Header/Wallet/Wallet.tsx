import { parseEther } from "@ethersproject/units";
import React from "react";
import { useDispatch } from "react-redux";
//import { PLATE } from "../../../config/constants";
import { useActiveWeb3React } from "../../../hooks/useActiveWeb3React";
//import { useTokenBalance } from "../../../hooks/useTokenBalance";
import { showModal } from "../../../redux/application";
import { bigNumberToFixed, shortenAddress } from "../../../utils";
import { Address, Balance, Wrapper } from "./Wallet.styles";

export const Wallet = () => {
    const dispatch = useDispatch();
    const { account, chainId } = useActiveWeb3React();
    // const plateBalance = useTokenBalance(account || undefined, PLATE[chainId]);
    // const formattedBalance = plateBalance
    //     ? bigNumberToFixed(parseEther(plateBalance.toExact()))
    //     : "";

    return (
        <Wrapper onClick={() => dispatch(showModal("WalletInfoModal"))}>
            <Balance>
                {/* {formattedBalance ? `${formattedBalance} PLA` : "Loading..."} */}
                888
            </Balance>
            <Address>{shortenAddress(account)}</Address>
        </Wrapper>
    );
};
