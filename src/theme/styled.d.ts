import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        secondary: string;
        positive: string;
        negative: string;
        bgPositive: string;
        bgNegative: string;
        base1: string;
        base2: string;
        base3: string;
        inactive: string;
        document: {
            background: string;
            accent: string;
        };
        gradient: {
            color1: string;
            color2: string;
        };
        list: {
            background: string;
            header: string;
            border: string;
        };
        bar: {
            background: string;
        };
    }
}
