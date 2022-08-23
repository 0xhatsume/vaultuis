import styled from "styled-components";
import { fadeIn } from "../../theme/animations";

export const Wrapper = styled.div`
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    animation: ${fadeIn} 0.3s ease-out;
`;

export const Backing = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    max-height: 100%;
    padding: 50px 0;
    overflow-y: auto;
`;
