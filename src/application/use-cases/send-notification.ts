import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
interface SendNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotiicationResponse {
  notification: Notification;
}
export class SendNotifications {
  async execute(
    request: SendNotificationsRequest,
  ): Promise<SendNotiicationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    return {
      notification,
    };
  }
}
