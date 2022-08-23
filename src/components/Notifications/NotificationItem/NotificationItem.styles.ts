import styled, { keyframes } from "styled-components";

export const enterAnimation = keyframes`
    0% {
      opacity:0;
      transform: translateX(75px);
    }

    100% {
      opacity:1;
      transform: translateY(0);
    }
`;

export const Item = styled.div<{ type: "positive" | "negative" }>`
    max-width: 350px;
    background: ${({ type, theme }) => {
        if (type === "positive") {
            return theme.bgPositive;
        } else if (type === "negative") {
            return theme.bgNegative;
        }
        return "";
    }};
    color: ${({ theme }) => theme.base1};
    padding: 11px 27px;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    animation: ${enterAnimation} 0.3s ease-out;

    &:active {
        transform: translateY(1px);
        transition: transform 0.05s ease-out;
    }
`;
