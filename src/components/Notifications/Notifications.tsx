import React from "react";
import {
    useIsStickyHeader,
    useNotificationList,
} from "../../redux/application/hooks";
import { NotificationItem } from "./NotificationItem/NotificationItem";
import { Wrapper } from "./Notifications.styles";

export const Notifications = () => {
    const notificationList = useNotificationList();
    const isStickyHeader = useIsStickyHeader();

    return (
        <Wrapper isStickyHeader={isStickyHeader}>
            {notificationList.map(({ id, type, content }) => (
                <NotificationItem id={id} type={type} key={id}>
                    {content}
                </NotificationItem>
            ))}
        </Wrapper>
    );
};
