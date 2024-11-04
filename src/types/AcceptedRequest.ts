import { Message } from "./Message";
import { AcceptedPickupItem } from "./PickupItem";

export interface AcceptedRequest {
  id: string;
  items: AcceptedPickupItem[];
  messages: Message[];
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
} 