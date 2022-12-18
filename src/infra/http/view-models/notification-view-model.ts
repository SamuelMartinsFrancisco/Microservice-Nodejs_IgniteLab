import { Notification } from "@application/entities/notification";

export class NotificationViewModel {
    static toHTTP(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId
        };
    }
}

// https://www.devmedia.com.br/arquitetura-de-software-desenvolvimento-orientado-para-arquitetura/8033