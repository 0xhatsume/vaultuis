import styled from "styled-components";
import {
    BREAKPOINTS,
    CONTENT_WIDTH,
    CONTENT_WIDTH_GUTTER2,
    CONTENT_WIDTH_GUTTER_MOBILE2,
} from "../../config/constants";
import { Breakpoint } from "../../config/typings";

export const Body = styled.div<{ bodyWidth?: string; maxWidth?: string }>`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: ${({ bodyWidth }) =>
        bodyWidth || `calc(100% - ${CONTENT_WIDTH_GUTTER2}px)`};
    max-width: ${({ maxWidth }) => maxWidth || `${CONTENT_WIDTH}px`};
    // viewport height - footer height - footer margin top
    min-height: calc(100vh - 62px - 100px);
    margin: 0 auto;
    padding-top: 132px;

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        width: ${({ bodyWidth }) =>
            bodyWidth || `calc(100% - ${CONTENT_WIDTH_GUTTER_MOBILE2}px)`};
        min-height: calc(100vh - 74px - 100px);
    }
`;

export const BgWrapper = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const BgTopLeft = styled.div`
    position: absolute;
    top: -77.1vw;
    left: -81.3vw;
    width: 147vw;
    height: 147vw;
    opacity: 0.7;
    background: ${({ theme }) =>
        `radial-gradient(
        circle,
        ${theme.document.accent} 0%,
        ${theme.document.accent}00 50%
    );`};
`;

export const BgTopRight = styled.div`
    position: absolute;
    top: -37.1vw;
    right: -35.3vw;
    width: 77vw;
    height: 77vw;
    opacity: 0.5;
    background: ${({ theme }) =>
        `radial-gradient(
        circle,
        ${theme.document.accent} 0%,
        ${theme.document.accent}00 50%
    );`};
`;

export const BgBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 125vh;
    background: ${({ theme }) =>
        `linear-gradient(
            170deg,
            ${theme.document.accent}00 50%,
            ${theme.document.accent} 100%
        );`};
    background-repeat: no-repeat;
    background-size: cover;
`;
