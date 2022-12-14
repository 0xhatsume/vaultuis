import Head from "next/head";
import React, { ReactNode } from "react";
import {
    BgBottom,
    BgTopLeft,
    BgTopRight,
    BgWrapper,
    Body,
} from "./BasePage.styles";

interface Props {
    children: ReactNode;
    width?: string;
    maxWidth?: string;
    title?: string;
}

export const BasePage = (props: Props) => {
    const { children, title, width, maxWidth } = props;
    return (
        <>
            <Body bodyWidth={width} maxWidth={maxWidth}>
                {children}
            </Body>
        </>
    );
};
