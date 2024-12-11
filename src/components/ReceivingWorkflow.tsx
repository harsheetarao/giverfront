'use client';

import React, { useState } from 'react';
import { InventoryProcessing } from './InventoryProcessing';
import { cn } from '@/lib/utils';
import { PickupRequest, RequestStatus } from '@/types/PickupRequest';
import { ItemDetails, PickupItem } from '@/types/PickupItem';
import { CustomButton } from './CustomButton';
import { X, Check } from 'lucide-react';
import { SwipeCard } from './SwipeCard';

interface ReceivingWorkflowProps {
  items: PickupItem[];
  onReceiveItem: (id: string) => void;
  onRejectItem: (itemId: string) => void;
  onUpdateStatus: (itemId: string, status: RequestStatus) => void;
  onUpdateDetails: (itemId: string, details: ItemDetails) => void;
  onAddProcessingPhotos: (itemId: string, photos: string[]) => void;
  className?: string;
}

export const ReceivingWorkflow = ({
  items,
  onReceiveItem,
  onRejectItem,
  onUpdateStatus,
  onUpdateDetails,
  onAddProcessingPhotos,
  className
}: ReceivingWorkflowProps) => {
  const [selectedItem, setSelectedItem] = useState<PickupItem | null>(null);
  const [processingItem, setProcessingItem] = useState<PickupItem | null>(null);

  const pendingItems = items.filter(item => item.status === 'pending');

  if (processingItem) {
    return (
      <div className={className}>
        <CustomButton
          variant="secondary"
          onClick={() => setProcessingItem(null)}
          className="mb-4"
        >
          ← Back to List
        </CustomButton>
        
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
          onConfirmReceipt={() => setProcessingItem(null)}
        />
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {selectedItem ? (
        <>
          <CustomButton
            variant="secondary"
            onClick={() => setSelectedItem(null)}
            className="mb-4"
          >
            ← Back to List
          </CustomButton>

          <div className="aspect-[3/4] w-full relative">
            <div className="absolute inset-0 -mx-8">
              <div className="relative h-full mx-8">
                <SwipeCard
                  imageUrl={selectedItem.imageUrl}
                  alt={selectedItem.name}
                  onSwipe={(direction) => {
                    if (direction === 'right') {
                      onReceiveItem(selectedItem.id);
                      onUpdateStatus(selectedItem.id, 'completed');
                      setProcessingItem(selectedItem);
                    } else {
                      onRejectItem(selectedItem.id);
                    }
                    setSelectedItem(null);
                  }}
                >
                  <div className="bg-[#F8FAF9] p-4 rounded-xl h-full overflow-y-auto">
                    <h4 className="font-semibold text-[#4B7163] mb-2">{selectedItem.name}</h4>
                    <p className="text-sm text-[#5A7C6F] mb-2">{selectedItem.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        selectedItem.status === 'completed' && "bg-green-100 text-green-800",
                        selectedItem.status === 'rejected' && "bg-red-100 text-red-800",
                        selectedItem.status === 'pending' && "bg-yellow-100 text-yellow-800"
                      )}>
                        {selectedItem.status.charAt(0).toUpperCase() + selectedItem.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </SwipeCard>
              </div>
            </div>
          </div>

          {/* Swipe Instructions */}
          <div className="flex justify-center gap-8 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <X className="h-4 w-4 text-red-500" /> Swipe left to reject
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" /> Swipe right to receive
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
          <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
            Pending Items ({pendingItems.length})
          </h2>
          
          <div className="grid gap-4">
            {pendingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="flex gap-4 p-4 bg-[#F8FAF9] hover:bg-[#F0F4F2] rounded-xl cursor-pointer transition-colors"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-rockwell text-lg text-[#4B7163]">{item.name}</h3>
                  <p className="text-sm text-[#5A7C6F]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 