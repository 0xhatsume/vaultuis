import styled from "styled-components";
import {
    BREAKPOINTS,
    CONTENT_WIDTH_GUTTER,
    CONTENT_WIDTH_GUTTER_MOBILE,
} from "../../config/constants";
import { Breakpoint } from "../../config/typings";
import { ButtonPrimary } from "../Buttons";

export const StyledHeader = styled.header<{ sticky?: boolean }>`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px ${CONTENT_WIDTH_GUTTER}px;
    background-color: ${({ theme }) => theme.document.background}00;
    border-bottom: solid 1px ${({ theme }) => theme.base2}66;
    transition: padding 0.3s ease-out, background-color 0.3s ease-out,
        border-bottom-color 0.3s ease-out;

    ${({ sticky, theme }) =>
        sticky &&
        `
          padding: 20px ${CONTENT_WIDTH_GUTTER}px;
          background-color: ${theme.document.background};
      `}

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        padding: ${({ sticky }) =>
            sticky
                ? `12px ${
                      CONTENT_WIDTH_GUTTER_MOBILE - 5
                  }px ${CONTENT_WIDTH_GUTTER_MOBILE}px`
                : `20px ${CONTENT_WIDTH_GUTTER_MOBILE - 5}px 20px
            ${CONTENT_WIDTH_GUTTER_MOBILE}px`};
    }
`;

export const LogoLink = styled.a<{ active?: boolean }>`
    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        position: relative;
        ${({ active }) => active && `z-index: 11;`}
    }
`;

export const Logo = styled.img`
    width: 102px;
    height: auto;
`;

export const Navigation = styled.nav<{ active?: boolean }>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;

    @media (max-width: ${BREAKPOINTS[Breakpoint.XL]}px) {
        gap: 3vw;
    }

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        display: ${({ active }) => (!active ? "none" : "flex")};
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
        width: 100vw;
        height: 100vh;
        padding: 100px 0 20px;
        overflow: auto;
        background: ${({ theme }) => theme.document.background};
    }
`;

export const NavLink = styled.a<{ active: boolean }>`
    position: relative;
    padding: 10px 15px;
    color: ${({ theme }) => theme.base2};
    text-decoration: none;

    &::before,
    &::after {
        content: "";
        position: absolute;
        display: block;
        transform: translateY(2px);
        opacity: 0;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    }

    ${({ active, theme }) =>
        active &&
        `
          color: ${theme.primary};

          &:active {
            transform: none;
          }

          &::before,
          &::after {
            transform: none;
            opacity: 1;
          }

          &::before {
            width: calc(100% - 28px);
            height: 9px;
            left: 14px;
            top: calc(100% - 1px);
            border-radius: 5px;
            border: solid 3px ${theme.primary};
            box-shadow: inset 0 0 4px ${theme.primary}, 0 -1px 5px ${theme.primary}, 0 -3px 20px ${theme.primary};
          }

          &::after {
            width: calc(100% - 30px);
            height: 7px;
            left: 15px;
            top: 100%;
            border-radius: 4px;
            border: solid 1px ${theme.base2};
          }
        `}

    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        padding: 10px ${CONTENT_WIDTH_GUTTER_MOBILE}px;
        font-size: 1.8rem;
    }
`;

export const Starburst = styled.div`
    position: absolute;
    top: 3px;
    left: calc(100% - 12px);
    width: 18px;
    height: 18px;
    background: url(/img/ui/icons/starburst-percent.svg) no-repeat center /
        contain;
`;

export const CTALink = styled.a`
    display: block;
    width: 140px;
    margin: 0 0 0 10px;
    font-size: 1.2rem;

    &:active {
        transform: none;
    }

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        width: calc(100% - 30px);
        max-width: 500px;
        margin: 15px ${CONTENT_WIDTH_GUTTER_MOBILE}px 10px;
        font-size: 1.6rem;
    }
`;

export const CTA = styled(ButtonPrimary)`
    width: 100%;
`;

export const Navicon = styled.button<{ active?: boolean }>`
    display: none;
    position: relative;
    width: 50px;
    height: 40px;
    padding: 0;
    background: none;
    border: 0;

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        display: block;
        ${({ active }) => active && `z-index: 10;`}

        &::before,
        div,
        &::after {
            position: absolute;
            left: 10px;
            display: block;
            width: 30px;
            height: 1px;
            content: "";
            background: ${({ theme }) => theme.base2};
            transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        }

        &::before {
            top: calc(50% - 10px);
        }

        div {
            top: 50%;
        }

        &::after {
            top: calc(50% + 10px);
        }

        ${({ active }) =>
            active &&
            `
              &::before {
                  transform: rotate(45deg) translate(7px, 7px);
              }

              & div {
                  opacity: 0;
              }

              &::after {
                  transform: rotate(-45deg) translate(7px, -7px);
              }
        `}
    }
`;
