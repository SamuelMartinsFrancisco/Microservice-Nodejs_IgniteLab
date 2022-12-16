import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification content', () => {
    // É o mesmo que: test('...', () => {})
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example'
        });

        expect(notification).toBeTruthy();
    });
});