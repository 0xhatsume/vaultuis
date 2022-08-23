import { DefaultTheme } from "styled-components";
import { Breakpoint, UserTheme } from "../typings";

export const BREAKPOINTS = {
    [Breakpoint.XS]: 0,
    [Breakpoint.SM]: 600,
    [Breakpoint.MD]: 768,
    [Breakpoint.LG]: 992,
    [Breakpoint.XL]: 1200,
    [Breakpoint.XXL]: 1400,
};

export const THEME_SETTINGS: { [key in UserTheme]?: DefaultTheme } = {
    [UserTheme.DEFAULT]: {
        primary: "#17D9E5",
        secondary: "#FDD32B",
        positive: "#0BF43E",
        negative: "#f40b0b",
        bgPositive: "#92FF9A",
        bgNegative: "#ff9292",
        base1: "#000000",
        base2: "#0757F9",
        base3: "#5814FB",
        inactive: "#9292AC",
        document: {
            background: "#FFFFFF",
            accent: "#5D0071",
        },
        gradient: {
            color1: "#190336",
            color2: "#3d0d46",
        },
        list: {
            background: "#18174F",
            header: "#FAFAFA",
            border: "#453351",
        },
        bar: {
            background: "#160025",
        },
    },
};

export const CONTENT_WIDTH = 1020;
export const CONTENT_WIDTH_GUTTER = 30;
export const CONTENT_WIDTH_GUTTER2 = CONTENT_WIDTH_GUTTER * 2;
export const CONTENT_WIDTH_GUTTER_MOBILE = 20;
export const CONTENT_WIDTH_GUTTER_MOBILE2 = CONTENT_WIDTH_GUTTER_MOBILE * 2;

export const HEADER_HEIGHT_FULL = 85;
export const HEADER_HEIGHT_STICKY = 77;
