'use client';

import React, { useState } from 'react';
import { ProcessingQueue } from './ProcessingQueue';
import { ListingWorkflow } from './ListingWorkflow';

interface ProcessingItem {
  id: string;
  productId: string;
  pickupPhoto: string;
  pickupDescription: string;
  receivedDate: Date;
  customerName: string;
  status?: 'in_inventory' | 'ready_for_sale';
}

interface InventoryProcessingManagerProps {
  items: ProcessingItem[];
  onUpdateDetails: (itemId: string, details: any) => void;
  onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
  onSaveDraft: (itemId: string, details: any) => void;
  className?: string;
}

export const InventoryProcessingManager = ({
  items,
  onUpdateDetails,
  onUpdateStatus,
  onSaveDraft,
  className
}: InventoryProcessingManagerProps) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleSelectItem = (itemId: string) => {
    setSelectedItemId(itemId);
  };

  const handleBack = () => {
    setSelectedItemId(null);
  };

  if (selectedItemId) {
    const processingItems = items.map(item => ({
      ...item,
      status: item.status || 'in_inventory'
    }));

    return (
      <div className={className}>
        <button 
          onClick={handleBack}
          className="mb-4 text-[#4B7163] hover:text-[#3A5A4F] font-sourceSans"
        >
          ← Back to Queue
        </button>
        <ListingWorkflow
          items={processingItems.filter(item => item.id === selectedItemId)}
          onUpdateDetails={onUpdateDetails}
          onUpdateStatus={onUpdateStatus}
          onSaveDraft={onSaveDraft}
        />
      </div>
    );
  }

  return (
    <ProcessingQueue
      items={items}
      onSelectItem={handleSelectItem}
      className={className}
    />
  );
}; 