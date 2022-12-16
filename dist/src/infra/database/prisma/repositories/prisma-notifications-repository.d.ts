import { Notification } from "../../../../application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(notification: Notification): Promise<void>;
}
