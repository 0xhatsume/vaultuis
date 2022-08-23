import React, { ReactNode } from "react";
import { CloseButton, Wrapper } from "./Frame.styles";

interface Props {
    width?: string;
    padding?: string;
    children: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Frame = (props: Props) => {
    const { children, width, padding, onClose } = props;

    const handleClose = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        if (onClose) onClose(e);
    };

    return (
        <Wrapper frameWidth={width} padding={padding}>
            {children}
            {onClose ? <CloseButton onClick={handleClose} /> : null}
        </Wrapper>
    );
};

Frame.defaultProps = {
    width: "100%",
    padding: "60px",
};
