'use client';

import React, { useState } from 'react';
import { Progress } from './Progress';
import { CustomButton } from './CustomButton';
import { FormInput } from './FormInput';
import { Upload, Image as ImageIcon, Info, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
}

interface PickupRequestFormProps {
  onSubmit: (data: any) => void;
  className?: string;
}

export const PickupRequestForm = ({
  onSubmit,
  className,
}: PickupRequestFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedItems, setUploadedItems] = useState<UploadedItem[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [address, setAddress] = useState('');

  const steps = [
    'Upload Photos',
    'Item Details',
    'Pickup Time',
    'Location'
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newItems = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: URL.createObjectURL(file),
      }));
      setUploadedItems([...uploadedItems, ...newItems]);
    }
  };

  const handleItemDescription = (id: string, description: string) => {
    setUploadedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, description } : item
      )
    );
  };

  const handleTimeSelection = (time: string) => {
    setAvailableTimes(current =>
      current.includes(time)
        ? current.filter(t => t !== time)
        : [...current, time]
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* Photo Upload Section */}
            <div className="border-2 border-dashed border-[#5A7C6F] rounded-xl p-8 text-center">
              <input
                type="file"
                id="photo-upload"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <label 
                htmlFor="photo-upload"
                className="cursor-pointer space-y-4 block"
              >
                <Upload className="h-12 w-12 mx-auto text-[#5A7C6F]" />
                <div className="font-sourceSans">
                  <p className="text-lg font-semibold text-[#4B7163]">
                    Drop photos here or click to upload
                  </p>
                  <p className="text-sm text-[#5A7C6F]">
                    Upload clear photos of each item you'd like us to pick up
                  </p>
                </div>
              </label>
            </div>

            {/* Uploaded Photos Preview */}
            {uploadedItems.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {uploadedItems.map((item) => (
                  <div 
                    key={item.id}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-[#5A7C6F]"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt="Uploaded item" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 2:
        return (
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
                <div className="flex-grow">
                  <FormInput
                    label="Item Description"
                    placeholder="Describe the item, including condition and any relevant details"
                    value={item.description || ''}
                    onChange={(value: string) => handleItemDescription(item.id, value)}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <h3 className="font-rockwell text-lg text-[#4B7163] mb-4">
                Available Pickup Times
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Monday AM', 'Monday PM',
                  'Tuesday AM', 'Tuesday PM',
                  'Wednesday AM', 'Wednesday PM',
                  'Thursday AM', 'Thursday PM',
                  'Friday AM', 'Friday PM'
                ].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    className={cn(
                      'p-3 rounded-lg border-2 font-sourceSans transition-colors',
                      availableTimes.includes(time)
                        ? 'border-[#6AB098] bg-[#6AB098] text-white'
                        : 'border-[#5A7C6F] text-[#5A7C6F] hover:bg-[#F0F4F2]'
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <FormInput
                label="Pickup Address"
                placeholder="Enter the complete address where items will be picked up"
                value={address}
                onChange={(value: string) => setAddress(value)}
              />
              <p className="mt-2 text-sm text-[#5A7C6F] flex items-center gap-2">
                <Info className="h-4 w-4" />
                Please ensure the address is accurate and items will be accessible
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return uploadedItems.length > 0;
      case 2:
        return uploadedItems.every(item => item.description);
      case 3:
        return availableTimes.length > 0;
      case 4:
        return address.trim().length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === 4) {
      onSubmit({
        items: uploadedItems,
        availableTimes,
        address
      });
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6',
      className
    )}>
      {/* Progress Indicator */}
      <div className="mb-8">
        <Progress steps={steps} currentStep={currentStep} />
      </div>

      {/* Step Content */}
      <div className="mb-8">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
          {steps[currentStep - 1]}
        </h2>
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {currentStep > 1 && (
          <CustomButton
            variant="secondary"
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </CustomButton>
        )}
        <CustomButton
          onClick={handleNext}
          disabled={!canProceed()}
          className="flex items-center gap-2 ml-auto"
        >
          {currentStep === 4 ? 'Submit Request' : 'Continue'}
          {currentStep < 4 && <ChevronRight className="h-4 w-4" />}
        </CustomButton>
      </div>
    </div>
  );
};
