import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                        />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin=""
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fjalla+One&family=Noto+Sans:wght@400;700&display=swap"
                            rel="stylesheet"
                        />
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}

export default CustomDocument;
