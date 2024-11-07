'use client';

import React from 'react';
import { PickupRequestForm } from './PickupRequestForm';
import { FormInput } from './FormInput';

// Extend the UploadedItem interface
interface PartnerUploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
  quantity?: number;
}

export const PartnerPickupRequestForm = (props: any) => {
  // Override the Details step content
  const renderDetailsStep = (
    uploadedItems: PartnerUploadedItem[],
    handleItemDescription: (id: string, description: string) => void,
    handleQuantityChange: (id: string, quantity: string) => void
  ) => (
    <div className="space-y-6">
      {uploadedItems.map((item) => (
        <div key={item.id} className="flex gap-4 p-4 bg-[#F8FAF9] rounded-xl">
          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={item.imageUrl} 
              alt="Item" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow space-y-4">
            <FormInput
              label="Item Description"
              placeholder="Describe the item, including condition and any relevant details"
              value={item.description || ''}
              onChange={(value: string) => handleItemDescription(item.id, value)}
            />
            <FormInput
              label="Quantity"
              type="number"
              min={1}
              value={item.quantity?.toString() || '1'}
              onChange={(value: string) => handleQuantityChange(item.id, value)}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <PickupRequestForm
      {...props}
      skipContactStep={true}
      renderDetailsStep={renderDetailsStep}
      onSubmit={(data: any) => {
        // Ensure quantities are included in the submission
        const itemsWithQuantities = data.items.map((item: PartnerUploadedItem) => ({
          ...item,
          quantity: item.quantity || 1
        }));
        props.onSubmit({ ...data, items: itemsWithQuantities });
      }}
    />
  );
};
