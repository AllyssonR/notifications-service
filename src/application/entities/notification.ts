export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
export class Notification {
  private props: NotificationProps;
  constructor(props: NotificationProps) {
    this.props = props;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set recipientId(recipientId: string) {
    if (recipientId.length < 5) {
      throw new Error();
    }
    this.props.recipientId = recipientId;
  }
  public get content(): string {
    return this.props.content;
  }
  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }
    this.props.content = content;
  }
  public get category(): string {
    return this.props.category;
  }
  public set category(category: string) {
    this.props.category = category;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public set readAt(): Date | null | undefined {
    this.props.readAt = readAt;
  }
}