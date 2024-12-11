import { Message } from './Message';
import { PickupItem, AcceptedPickupItem } from './PickupItem';

export interface BasePickupRequest {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  messages: Message[];
  address: string;
}

export interface PickupRequest extends BasePickupRequest {
  items: PickupItem[];
  status: 'pending' | 'approved' | 'rejected' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled' | 'in_inventory' | 'ready_for_sale';
  pickupPhoto: string;
  pickupDate: Date;
  pickupAddress: string;
}

export interface AcceptedRequest extends BasePickupRequest {
  items: AcceptedPickupItem[];
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
  pickupDate?: string;
  email?: string;
  phone?: string;
}

export type RequestStatus = 
  | 'pending'
  | 'completed'
  | 'rejected'  // Add rejected status
  | 'verified'
  | 'incorrect'
  | 'picked_up'
  | 'in_progress'
  | 'cancelled'
  | 'scheduled'
  | 'in_inventory'
  | 'ready_for_sale';