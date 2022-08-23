import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../hooks";

interface ButtonPlainProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hoverColor?: string;
}

export const ButtonPlain = (props: ButtonPlainProps) => {
    const { children, hoverColor, ...otherProps } = props;
    const theme = useTheme();
    return (
        <StyledButton hoverColor={hoverColor || theme.primary} {...otherProps}>
            <ButtonInner>{children}</ButtonInner>
        </StyledButton>
    );
};

const StyledButton = styled.button<{ hoverColor: string }>`
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    font-size: inherit;
    color: inherit;
    transition: color 0.2s ease-out;
    cursor: pointer;

    &:not(:disabled):hover {
        color: ${({ hoverColor }) => hoverColor};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const ButtonInner = styled.div`
    display: flex;
    align-items: center;

    ${StyledButton}:not(:disabled):active & {
        transition: transform 0.2s ease-out;
        transform: translateY(1px);
    }
`;
