import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
interface SendNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotiicationResponse {
  notification: Notification;
}
export class SendNotifications {
  constructor(private notificationsRepository: NotificationRepository) {}
  async execute(
    request: SendNotificationsRequest,
  ): Promise<SendNotiicationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
