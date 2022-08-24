import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 36px;
    border-radius: 6px;
    font-size: 1.2rem;
    font-weight: bold;
    overflow: hidden;
    transition: transform 0.2s ease-out;
    cursor: pointer;

    &:active {
        transform: translateY(1px);
        transition-duration: 0.05s;
    }
`;

const WalletColumn = css`
    display: flex;
    align-items: center;
    padding: 0 10px;
    min-width: 95px;
`;

export const Balance = styled.div`
    ${WalletColumn}
    color: ${({ theme }) => theme.base2};
    background: ${({ theme }) => theme.document.background};
    text-transform: uppercase;
    transition: background-color 0.2s ease-out;

    &::before {
        display: block;
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 5px;
        background: url(/img/ui/icons/breakfast-white.svg)
            ${({ theme }) => theme.document.background} no-repeat center /
            contain;
    }

    ${Wrapper}:hover & {
        background-color: ${({ theme }) => theme.base1};
    }
`;

export const Address = styled.div`
    ${WalletColumn}
    color: ${({ theme }) => theme.base1};
    background: ${({ theme }) => theme.base2};
`;
