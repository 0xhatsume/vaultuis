import Head from "next/head";
import React, { MouseEvent, ReactNode } from "react";
import { css } from "styled-components";
import { Backing, Content, Wrapper } from "./Overlay.styles";

interface Props {
    children: ReactNode;
    onClickOutside?: (e: MouseEvent) => void;
}

export const Overlay = (props: Props) => {
    const { children, onClickOutside } = props;

    const handleClickBacking = (e: MouseEvent) => {
        if (onClickOutside) onClickOutside(e);
    };

    return (
        <Wrapper>
            <Head>
                <style>{HtmlStyles}</style>
            </Head>
            <Backing onClick={handleClickBacking} />
            <Content>
                <Backing onClick={handleClickBacking} />
                {children}
            </Content>
        </Wrapper>
    );
};

const HtmlStyles = css`
    html,
    body {
        overflow-y: hidden !important;
    }
`;
