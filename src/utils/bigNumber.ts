import { ethers, BigNumber } from "ethers";

/**
 * converts BigNumber to number in ethers
 */
export const bigNumberToNumber = (v: BigNumber) =>
    parseFloat(ethers.utils.formatEther(v));

/**
 * formats BigNumber to string with decimal places
 */
export const bigNumberToFixed = (
    v: BigNumber,
    options?: {
        decimals?: number;
        optionalDecimals?: boolean;
        thousandsSeparator?: boolean;
    },
) => {
    const {
        decimals = 2,
        optionalDecimals = true,
        thousandsSeparator = true,
    } = options || {};

    const value = bigNumberToNumber(v);
    let formatted = "";
    if (optionalDecimals && value % 1 === 0) formatted = value.toString();
    else formatted = bigNumberToNumber(v).toFixed(decimals);
    if (thousandsSeparator)
        formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatted;
};
