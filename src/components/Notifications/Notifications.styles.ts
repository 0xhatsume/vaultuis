import styled from "styled-components";
import { BREAKPOINTS } from "../../config/constants";
import { Breakpoint } from "../../config/typings";

export const Wrapper = styled.aside<{ isStickyHeader: boolean }>`
    position: fixed;
    z-index: 20;
    top: ${({ isStickyHeader }) => (isStickyHeader ? "95px" : "105px")};
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    transition: top 0.3s ease-out;

    @media (max-width: ${BREAKPOINTS[Breakpoint.LG]}px) {
        top: ${({ isStickyHeader }) => (isStickyHeader ? "93px" : "101px")};
        right: 20px;
    }
`;
