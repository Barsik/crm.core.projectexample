import { notification } from "antd";

export class CommonUtils {
    static GetGuid = (guid: string): string => {
        return guid.replace(/{|}/g, '').toUpperCase();
    };

    static ShowNotification = (type: string, description: string, title: string | undefined | null) => {
        notification[type]({
            message: title ?? '',
            description: description,
        });
    };
}