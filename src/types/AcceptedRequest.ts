import { Message } from "./Message";
import { AcceptedPickupItem } from "./PickupItem";

export interface AcceptedRequest {
  id: string;
  items: AcceptedPickupItem[];
  messages: Message[];
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: Date;
  address: string;
  pickupPhoto: string;
  pickupAddress: string;
} 