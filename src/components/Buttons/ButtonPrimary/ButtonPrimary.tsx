import React from "react";
import styled from "styled-components";
import { CTAProps } from "./types";

export const ButtonPrimary = (props: CTAProps) => {
    const { children, ...otherProps } = props;
    return (
        <StyledButton {...otherProps}>
            <ButtonInner>{children}</ButtonInner>
        </StyledButton>
    );
};

ButtonPrimary.defaultProps = {
    height: 40,
};

const StyledButton = styled.button<CTAProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height}px;
    width: 100%;
    font-weight: bold;
    color: ${({ theme }) => theme.base1};
    cursor: pointer;
    border: 0;
    border-radius: ${({ height }) => height / 2}px;
    background: ${({ theme }) =>
        `linear-gradient(
          315deg,
          ${theme.primary} 0%,
          ${theme.secondary} 40%,
          ${theme.secondary} 60%,
          ${theme.primary} 100%
        );`};
    background-position: 0 0;
    background-size: 200% 200%;
    transition: background-position 0.5s ease-out, box-shadow 0.5s ease-out;
    box-shadow: ${({ theme }) =>
        `0px -1px 1px ${theme.primary}00, 0 1px 1px ${theme.secondary}00`};

    &:not(:disabled):hover {
        background-position: 75%;
        box-shadow: ${({ theme }) =>
            `-5px -1px 10px ${theme.secondary}55, 5px 1px 10px ${theme.primary}55`};
    }

    &:not(:disabled):active {
        background-position: 75% 90%;
        transition: background-position 0.05s ease-out,
            box-shadow 0.05s ease-out;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const ButtonInner = styled.div`
    ${StyledButton}:not(:disabled):active & {
        transition: transform 0.2s ease-out;
        transform: translateY(1px);
    }
`;
