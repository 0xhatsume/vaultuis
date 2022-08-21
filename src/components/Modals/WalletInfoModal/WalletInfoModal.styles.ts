import styled, { css } from "styled-components";
import { ButtonPlain } from "~components/Buttons";

export const Title = styled.h2`
    margin-bottom: 30px;
    font-size: 3.2rem;
    line-height: 1.25;
`;

export const AddressInfo = styled.div`
    margin-bottom: 16px;
    padding: 20px 16px;
    color: ${({ theme }) => theme.base3}99;
    background: ${({ theme }) => theme.document.background};
    border-radius: 6px;
    border: solid 1px ${({ theme }) => theme.base2}55;
`;

export const AddressInfoTitle = styled.div`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.primary};
    text-transform: capitalize;
`;

export const ActionsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
`;

export const PlainButton = styled(ButtonPlain)`
    color: ${({ theme }) => theme.base2};
`;

export const Icon = css`
    width: 16px;
    height: 16px;
    margin-left: 4px;
    background: ${({ theme }) => theme.base2};
    transition: background-color 0.2s ease-out;

    ${PlainButton}:hover & {
        background: ${({ theme }) => theme.primary};
    }
`;

export const IconNewWindow = styled.div`
    ${Icon}
    mask-image: url(/img/ui/icons/open-white.svg);
`;

export const IconCopy = styled.div`
    ${Icon}
    mask-image: url(/img/ui/icons/copy-white.svg);
`;
