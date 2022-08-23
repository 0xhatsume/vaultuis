import styled from "styled-components";
import { CONTENT_WIDTH_GUTTER2 } from "../../config/constants";

export const Wrapper = styled.div<{ frameWidth?: string; padding: string }>`
    position: relative;
    width: calc(100% - ${CONTENT_WIDTH_GUTTER2}px);
    ${({ frameWidth }) => `max-width: ${frameWidth};`}
    margin: 0 auto;
    padding: ${({ padding }) => padding};
    background: ${({ theme }) =>
        `linear-gradient(180deg, ${theme.gradient.color1} 0%, ${theme.gradient.color2} 100%)`};
    border: 1px solid ${({ theme }) => theme.base2}55;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px #000, 0px 19px 13px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 20px;
    height: 20px;
    border: 0;
    background: url(/img/ui/icons/close-white.svg) no-repeat center / contain;
    cursor: pointer;

    &:active {
        transform: translateY(1px);
        transition: transform 0.05s ease-out;
    }
`;
