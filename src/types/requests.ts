type RequestStatus = 
  | 'Pending'
  | 'Accepted'
  | 'Pickup Complete'
  | 'In Inventory'
  | 'Ready for Sale';

interface ItemDetails {
  productId?: string;
  description?: string;
  processingPhotos?: string[];
} 