import { Replace } from 'src/helpers/Replace';
import { Content } from "./content";
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<NotificationProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    get recipientId(): string;
    set recipientId(recipientId: string);
    get content(): Content;
    set content(content: Content);
    get category(): string;
    set category(category: string);
    get readAt(): Date | null | undefined;
    set readAt(readAt: Date | null | undefined);
    get createdAt(): Date;
}
