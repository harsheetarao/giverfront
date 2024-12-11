'use client';

import React, { useState } from 'react';
import { PickupRequestForm } from './PickupRequestForm';
import { FormInput } from './FormInput';
import { Camera, Calendar, CheckCircle2 } from 'lucide-react';
import { ImageUpload } from './ImageUpload';
import { ProgressStep } from './Progress';

// Extend the UploadedItem interface
interface PartnerUploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
  quantity?: number;
}

export const PartnerPickupRequestForm = (props: any) => {
  const [uploadedItems, setUploadedItems] = useState<PartnerUploadedItem[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handlePhotoUpload = (photos: string[]) => {
    const newItems = photos.map(photoUrl => ({
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: photoUrl,
      description: '',
      quantity: 1,
    }));
    setUploadedItems(prev => [...prev, ...newItems]);
  };

  const handleItemDescription = (id: string, description: string) => {
    setUploadedItems(items => 
      items.map(item => 
        item.id === id ? { ...item, description } : item
      )
    );
  };

  const handleQuantityChange = (id: string, quantity: string) => {
    setUploadedItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  // Pre-filled user data
  const user = {
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
  };

  // Define steps
  const defaultSteps: ProgressStep[] = [
    {
      label: 'Item Photos',
      description: 'Upload photos of items you plan to drop off',
      icon: Camera
    },
    {
      label: 'Drop-off Time',
      description: 'Choose your preferred drop-off time',
      icon: Calendar
    }
  ];

  // Custom step renderer for the photo upload step
  const renderCustomStep = (currentStep: number) => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]">
            <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
              Upload Photos of Your Items
            </h3>
            <p className="text-[#5A7C6F]">
              Take clear photos of each item you plan to drop off. This helps us prepare the right space and resources.
            </p>
          </div>

          <div className="bg-[#F8FAF9] rounded-xl p-6">
            <ImageUpload
              onUpload={(photos) => handlePhotoUpload(photos)}
              maxFiles={50}
            />
          </div>

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
                  placeholder="Describe the item's condition and any relevant details"
                  value={item.description || ''}
                  onChange={(value) => handleItemDescription(item.id, value)}
                />
                <FormInput
                  label="Quantity"
                  type="number"
                  min={1}
                  value={item.quantity?.toString() || '1'}
                  onChange={(value) => handleQuantityChange(item.id, value)}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Drop-off scheduling step
  const renderDetailsStep = (
    uploadedItems: PartnerUploadedItem[],
    handleItemDescription: (id: string, description: string) => void,
    handleQuantityChange: (id: string, quantity: string) => void
  ) => (
    <div className="space-y-6">
      <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]">
        <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
          Schedule Your Drop-off
        </h3>
        <p className="text-[#5A7C6F]">
          Choose a convenient time to drop off your items.
        </p>
      </div>

      <div className="mt-8 p-4 bg-[#F8FAF9] rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            type="date"
            label="Drop-off Date"
            value={selectedDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={(value: string) => setSelectedDate(value)}
          />
          <FormInput
            type="time"
            label="Drop-off Time"
            value={selectedTime}
            onChange={(value: string) => setSelectedTime(value)}
          />
        </div>
        <p className="text-sm text-[#5A7C6F] mt-2">
          Drop-off hours: Mon-Fri, 9AM-5PM
        </p>
      </div>
    </div>
  );

  return (
    <PickupRequestForm
      skipContactStep={true}
      skipAddressStep={true}
      skipConfirmationStep={true}
      steps={defaultSteps}
      renderCustomStep={renderCustomStep}
      uploadedItems={uploadedItems}
      setUploadedItems={setUploadedItems}
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      onDateSelect={setSelectedDate}
      onTimeSelect={setSelectedTime}
      {...props}
      renderDetailsStep={renderDetailsStep}
      validateStep={(step: number) => {
        if (step === 1) {
          return uploadedItems.length > 0 && 
                 uploadedItems.every(item => (item.quantity ?? 0) > 0);
        }
        if (step === 2) {
          return selectedDate !== '' && selectedTime !== '';
        }
        return true;
      }}
      onSubmit={(data: any) => {
        const itemsWithQuantities = data.items.map((item: PartnerUploadedItem) => ({
          ...item,
          quantity: item.quantity || 1
        }));
        
        props.onSubmit({ 
          ...data, 
          items: itemsWithQuantities,
          user,
        });
      }}
    />
  );
};
