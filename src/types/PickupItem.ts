export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  sender: 'user' | 'admin';
}

export interface PickupItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: 'pending' | 'completed' | 'rejected' | 'verified' | 'incorrect';
  pickupPhoto: string;
  pickupDate: Date;
  pickupAddress: string;
  items: any[];
  messages: Message[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
}

export type RequestStatus = 
  | 'pending' 
  | 'completed' 
  | 'in_inventory'
  | 'verified' 
  | 'incorrect' 
  | 'picked_up' 
  | 'in_progress' 
  | 'cancelled' 
  | 'scheduled';

export interface AcceptedPickupItem extends PickupItem {
  verificationPhotos: Array<{
    id: string;
    imageUrl: string;
    timestamp: Date;
    note?: string;
  }>;
  scheduledDate?: string;
  photos?: string[];
  availableDates: Array<{
    date: string;
    requestCount: number;
  }>;
}

export interface ItemDetails {
  productId?: string;
  description?: string;
  processingPhotos?: string[];
}