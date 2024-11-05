export interface PickupItem {
  id: string;
  imageUrl: string;
  title?: string;
  description: string;
  availableDates: Array<{
    date: string;
    requestCount: number;
  }>;
  location: string;
}

export interface AcceptedPickupItem extends PickupItem {
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled';
  verificationPhotos: Array<{
    id: string;
    imageUrl: string;
    timestamp: Date;
    note?: string;
  }>;
  scheduledDate?: string;
  name: string;
  photos?: string[];
}

export interface ItemDetails {
  productId?: string;
  description?: string;
  processingPhotos?: string[];
}