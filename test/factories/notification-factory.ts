import { Notification, NotificationProps } from "@application/entities/notification";
import { Content } from "@application/entities/content";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId: 'recipient-1',
        ...override
    });
}