import React from "react";
import styled from "styled-components";
import { CTAProps } from "./types";

export const ButtonGhost = (props: CTAProps) => {
    const { children, ...otherProps } = props;
    return (
        <StyledButton {...otherProps}>
            <Background />
            <ButtonInner>{children}</ButtonInner>
        </StyledButton>
    );
};

ButtonGhost.defaultProps = {
    height: 40,
};

const StyledButton = styled.button<CTAProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height}px;
    width: ${({ width }) => (width ? `${width}px` : "100%")};
    font-weight: bold;
    color: ${({ theme }) => theme.base2};
    cursor: pointer;
    border: 0;
    border-radius: ${({ height }) => height / 2}px;
    background: none;
    transition: box-shadow 0.5s ease-out, color 0.5s ease-out;
    box-shadow: ${({ theme }) =>
        `0px -1px 1px ${theme.primary}00, 0 1px 1px ${theme.secondary}00`};
    overflow: hidden;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: solid 1px;
        border-radius: ${({ height }) => height / 2}px;
        transition: border-color 0.5s ease-out;
    }

    &::before {
        border-color: ${({ theme }) => theme.primary};
    }

    &::after {
        border-color: ${({ theme }) => theme.secondary};
        mask: linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    &:not(:disabled) {
        &:hover {
            color: ${({ theme }) => theme.base1};
            box-shadow: ${({ theme }) =>
                `
              -5px -1px 10px ${theme.secondary}55,
              5px 1px 10px ${theme.primary}55
            `};
        }

        &:hover::before {
            border-color: ${({ theme }) => theme.secondary};
        }

        &:hover::after {
            border-color: ${({ theme }) => theme.primary};
        }

        &:active {
            transition: background-position 0.05s ease-out,
                box-shadow 0.05s ease-out;
        }
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const ButtonInner = styled.div`
    position: relative;

    ${StyledButton}:active & {
        transition: transform 0.2s ease-out;
        transform: translateY(1px);
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
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
    opacity: 0;
    transition: opacity 0.1s ease-out, background-position 0.6s ease-out;

    ${StyledButton}:not(:disabled):hover & {
        background-position: 100%;
        opacity: 1;
    }
`;
