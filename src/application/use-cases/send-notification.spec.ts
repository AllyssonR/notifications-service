import { SendNotifications } from './send-notification';
import { inMemoryNotificationsRepository } from 'test/repositories/in-memory-notification-repository';
describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotifications(notificationsRepository);
    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
