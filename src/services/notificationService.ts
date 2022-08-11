import { notification } from "antd";

export const openNotification = ( heading: string, description?: string) => {
    notification.info({
        message: heading,
        description: description,
            placement: 'bottom',
    });
};