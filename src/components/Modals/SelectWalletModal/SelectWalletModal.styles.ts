import styled from "styled-components";

export const Title = styled.h2`
    margin-bottom: 30px;
    font-size: 3.2rem;
    line-height: 1.25;
`;

export const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Option = styled.div`
    border-radius: 6px;
    border: solid 1px ${({ theme }) => theme.base2}55;
    transition: border-color 0.2s ease-out;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        border-color: ${({ theme }) => theme.base2}88;
    }

    &:active {
        border-color: ${({ theme }) => theme.base2}cc;
    }
`;

export const OptionInner = styled.div<{ icon: string }>`
    width: 100%;
    padding: 20px 24px;
    background: ${({ icon, theme }) =>
        `url(${icon}) no-repeat ${theme.document.background} calc(100% - 25px) center / 30px auto`};
    transition: transform 0.2s ease-out;

    ${Option}:active & {
        border-color: ${({ theme }) => theme.base2}cc;
        transform: translateY(1px);
        transition-duration: 0.05s;
    }
`;
