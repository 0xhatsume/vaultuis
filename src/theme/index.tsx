import React, { ReactNode, useMemo } from "react";
import {
    DefaultTheme,
    ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { THEME_SETTINGS } from "../config/constants";
import { UserTheme } from "../config/typings";
// import { useUserTheme } from "../redux/user/hooks";
import { GlobalStyle } from "./GlobalStyles";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const  userTheme  = UserTheme.DEFAULT;
    //const { userTheme } = useUserTheme();
    const themeObject = useMemo(() => styledTheme(userTheme), [userTheme]);

    return (
        <StyledThemeProvider theme={themeObject}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
}

function styledTheme(userTheme: UserTheme): DefaultTheme {
    return THEME_SETTINGS[userTheme];
}
