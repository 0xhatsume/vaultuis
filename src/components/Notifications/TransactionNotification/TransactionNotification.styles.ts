import styled from "styled-components";

export const HashWrapper = styled.div`
    display: flex;
    gap: 3px;
`;

export const HashLink = styled.a`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.base1};
    border-bottom: solid 1px ${({ theme }) => theme.base1};

    &:hover {
        border-bottom-color: ${({ theme }) => theme.base1}00;
    }
`;
