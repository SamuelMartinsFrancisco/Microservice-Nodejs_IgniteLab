import { Notification } from "../entities/notification";
export declare abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}
