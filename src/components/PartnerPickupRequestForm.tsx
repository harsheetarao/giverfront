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
  // Pre-filled user data
  const user = {
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
  };

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

      {/* Drop-off Date Selection */}
      <div className="mt-8 p-4 bg-[#F8FAF9] rounded-xl">
        <h3 className="text-lg font-semibold mb-4">When will you drop off these items?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            type="date"
            label="Drop Off Date"
            value={props.selectedDate || ''}
            min={new Date().toISOString().split('T')[0]}
            onChange={(value: string) => {
              props.onDateSelect?.(value);
            }}
          />
          <FormInput
            type="time"
            label="Drop Off Time"
            value={props.selectedTime || ''}
            onChange={(value: string) => {
              // Handle time selection
              props.onTimeSelect?.(value);
            }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Please select a date and time during our business hours (Mon-Fri, 9AM-5PM)
        </p>
      </div>
    </div>
  );

  return (
    <PickupRequestForm
      skipContactStep={true}
      skipAddressStep={true}
      skipConfirmationStep={true}
      {...props}
      renderDetailsStep={renderDetailsStep}
      onSubmit={(data: any) => {
        // Combine the items with quantities and drop-off details
        const itemsWithQuantities = data.items.map((item: PartnerUploadedItem) => ({
          ...item,
          quantity: item.quantity || 1
        }));
        
        props.onSubmit({ 
          ...data, 
          items: itemsWithQuantities,
          user, // Include pre-filled user data
        });
      }}
    />
  );
};
