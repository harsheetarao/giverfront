export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  sender: "user" | "admin";
} 