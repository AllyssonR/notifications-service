import { SendNotifications } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotifications();
    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
