import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useTimeout } from "../../../hooks/useTimeout";
import { hideNotification } from "../../../redux/application";
import { Item } from "./NotificationItem.styles";

interface Props {
    id: number;
    type: "positive" | "negative";
    children: ReactNode;
}

export const NotificationItem = (props: Props) => {
    const { id, type, children } = props;
    const dispatch = useDispatch();

    useTimeout(() => {
        dispatch(hideNotification(id));
    }, 4000);

    const handleClickItem = (id: number) => {
        dispatch(hideNotification(id));
    };

    return (
        <Item type={type} onClick={() => handleClickItem(id)}>
            {children}
        </Item>
    );
};
