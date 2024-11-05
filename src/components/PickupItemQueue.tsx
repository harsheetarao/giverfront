'use client';

import React, { useState } from 'react';
import { SwipeCardDeck } from './SwipeCardDeck';
import { InventoryProcessing } from './InventoryProcessing';
import { cn } from '@/lib/utils';
import { PickupRequest, RequestStatus } from '@/types/PickupRequest';
import { ItemDetails } from '@/types/PickupItem';

interface PickupItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: 'pending' | 'completed' | 'in_inventory';
}

interface PickupItemQueueProps {
  items: PickupItem[];
  onReceiveItem: (id: string) => void;
  onRejectItem: (itemId: string) => void;
  onUpdateStatus: (itemId: string, status: RequestStatus) => void;
  onUpdateDetails: (itemId: string, details: ItemDetails) => void;
  onAddProcessingPhotos: (itemId: string, photos: string[]) => void;
  className?: string;
}

export const PickupItemQueue = ({
  items,
  onReceiveItem,
  onRejectItem,
  onUpdateStatus,
  onUpdateDetails,
  onAddProcessingPhotos,
  className
}: PickupItemQueueProps) => {
  const [selectedItem, setSelectedItem] = useState<PickupItem | null>(null);
  const [processingItem, setProcessingItem] = useState<PickupItem | null>(null);

  const pendingItems = items.filter(item => item.status === 'pending');

  const cardData = selectedItem ? [{
    id: selectedItem.id,
    imageUrl: selectedItem.imageUrl,
    alt: selectedItem.name,
    content: (
      <div className="p-4">
        <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">{selectedItem.name}</h3>
        <p className="text-sm text-gray-600">{selectedItem.description}</p>
        <p className="text-sm text-gray-500 mt-4">Swipe right to receive or left to reject</p>
      </div>
    )
  }] : [];

  if (processingItem) {
    return (
      <InventoryProcessing
        request={{
          id: processingItem.id,
          status: 'completed',
          pickupPhoto: processingItem.imageUrl,
          items: [],
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          pickupDate: new Date(),
          pickupAddress: '',
          messages: [],
          address: ''
        }}
        onUpdateStatus={(status) => onUpdateStatus(processingItem.id, status)}
        onUpdateDetails={(details) => onUpdateDetails(processingItem.id, details)}
        onAddProcessingPhotos={(photos) => onAddProcessingPhotos(processingItem.id, photos)}
        onConfirmReceipt={() => {
          setProcessingItem(null);  // Clear the processing item to return to queue
        }}
      />
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {!selectedItem ? (
        <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
          <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
            Pending Items ({pendingItems.length})
          </h2>
          
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-rockwell text-lg text-[#4B7163]">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <SwipeCardDeck
          cards={cardData}
          onSwipeLeft={() => {
            onRejectItem(selectedItem.id);
            setSelectedItem(null);
          }}
          onSwipeRight={() => {
            onReceiveItem(selectedItem.id);
            onUpdateStatus(selectedItem.id, 'completed');
            setProcessingItem(selectedItem);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
}; 