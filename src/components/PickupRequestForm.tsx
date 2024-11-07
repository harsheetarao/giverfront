'use client';

import React, { useState } from 'react';
import { Progress } from './Progress';
import { CustomButton } from './CustomButton';
import { FormInput } from './FormInput';
import { Upload, Image as ImageIcon, Info, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { Modal } from './Modal';
import { ImageUpload } from './ImageUpload';

interface UploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
  quantity?: number;
}

interface PickupRequestFormProps {
  onSubmit: (data: any) => void;
  className?: string;
  skipContactStep?: boolean;
  renderDetailsStep?: (
    items: UploadedItem[],
    handleItemDescription: (id: string, description: string) => void,
    handleQuantityChange: (id: string, quantity: string) => void
  ) => React.ReactNode;
}

interface ConfirmationState {
  ownership: boolean;
  address: boolean;
  terms: boolean;
}

const PlacesAutocomplete = ({
  value,
  onChange,
  onSelect
}: {
  value: string;
  onChange: (value: string) => void;
  onSelect: (address: string) => Promise<void>;
}) => {
  const {
    ready,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
    defaultValue: value,
  });

  return (
    <div className="relative">
      <FormInput
        label="Pickup Address"
        value={value}
        onChange={(val) => {
          setValue(val);
          onChange(val);
        }}
        disabled={!ready}
      />
      {data.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {data.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(suggestion.description);
                onSelect(suggestion.description);
                clearSuggestions();
              }}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const handlePhotoUpload = (
  photos: string[], 
  setUploadedItems: React.Dispatch<React.SetStateAction<UploadedItem[]>>,
  skipContactStep: boolean
) => {
  const instanceId = Math.random().toString(36).substr(2, 9); // Generate unique instance ID
  console.log(`PickupRequestForm ${instanceId} - Processing photos:`, photos);
  
  if (photos.length > 0) {
    const newItems = photos.map(photoUrl => ({
      id: `${instanceId}-${Math.random().toString(36).substr(2, 9)}`,
      imageUrl: photoUrl,
      quantity: 1,
    }));
    
    setUploadedItems(prevItems => {
      // Only update items for this specific instance
      const updatedItems = [...prevItems, ...newItems];
      console.log(`PickupRequestForm ${instanceId} - Updated items:`, updatedItems);
      return updatedItems;
    });
  }
};

export const PickupRequestForm = ({
  onSubmit,
  className,
  skipContactStep = false,
  renderDetailsStep,
}: PickupRequestFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedItems, setUploadedItems] = useState<UploadedItem[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    contact: ''
  });
  const [showTerms, setShowTerms] = useState(false);
  const [confirmations, setConfirmations] = useState<ConfirmationState>({
    ownership: false,
    address: false,
    terms: false,
  });

  const handleItemDescription = (itemId: string, description: string) => {
    setUploadedItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, description } : item
      )
    );
  };

  const handleQuantityChange = (itemId: string, quantity: string) => {
    setUploadedItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  const steps = skipContactStep 
    ? ['Photos', 'Details', 'Dates', 'Location']
    : ['Contact', 'Photos', 'Details', 'Dates', 'Location'];

  const handleTimeSelection = (time: string) => {
    setAvailableTimes(current =>
      current.includes(time)
        ? current.filter(t => t !== time)
        : [...current, time]
    );
  };

  const renderStepContent = () => {
    const adjustedStep = skipContactStep ? currentStep + 1 : currentStep;

    switch (adjustedStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <p className="text-[#4B7163] mb-4">
                To better serve you, we need:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Your name</li>
                <li>Either an email address or mobile number</li>
              </ul>
              <p className="text-[#4B7163]">
                This allows us to send service updates through your preferred contact method. We'll only use these details to communicate about your specific request.
              </p>
              
              <div className="mt-6">
                <FormInput
                  label="Full Name"
                  value={contactInfo.fullName}
                  onChange={(value: string) => setContactInfo(prev => ({ ...prev, fullName: value }))}
                />
                
                <div className="mt-6">
                  <FormInput
                    label="Email Address or Mobile Number"
                    value={contactInfo.contact}
                    onChange={(value: string) => setContactInfo(prev => ({ ...prev, contact: value }))}
                    hint="Choose the contact method you check most frequently for fastest updates."
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <ImageUpload
              onUpload={(photos) => handlePhotoUpload(photos, setUploadedItems, skipContactStep)}
              maxFiles={5}
            />

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

      case 3:
        return renderDetailsStep ? 
          renderDetailsStep(uploadedItems, handleItemDescription, handleQuantityChange) :
          (
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

      case 4:
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

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={async (address) => {
                  setAddress(address);
                }}
              />
              <p className="mt-2 text-sm text-[#5A7C6F] flex items-center gap-2">
                <Info className="h-4 w-4" />
                Please ensure the address is accurate and items will be accessible at this location
              </p>
            </div>

            <div className="mt-8 space-y-4 bg-[#F8FAF9] rounded-xl p-4">
              <h3 className="font-rockwell text-lg text-[#4B7163] mb-4">
                Final Confirmation
              </h3>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmations.ownership}
                  onChange={(e) => setConfirmations(prev => ({
                    ...prev,
                    ownership: e.target.checked
                  }))}
                  className="mt-1"
                />
                <span className="text-sm text-[#5A7C6F]">
                  I confirm I own this item or have permission to request service for it
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmations.address}
                  onChange={(e) => setConfirmations(prev => ({
                    ...prev,
                    address: e.target.checked
                  }))}
                  className="mt-1"
                />
                <span className="text-sm text-[#5A7C6F]">
                  I confirm the address provided is correct and I can receive services there
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmations.terms}
                  onChange={(e) => setConfirmations(prev => ({
                    ...prev,
                    terms: e.target.checked
                  }))}
                  className="mt-1"
                />
                <span className="text-sm text-[#5A7C6F]">
                  I accept the{' '}
                  <button 
                    onClick={() => setShowTerms(true)}
                    className="text-[#6AB098] underline hover:text-[#4B7163]"
                  >
                    Terms of Service
                  </button>
                </span>
              </label>
            </div>

            {showTerms && (
              <Modal onClose={() => setShowTerms(false)}>
                <div className="p-6">
                  <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Terms of Service</h2>
                  {/* Add your terms of service content here */}
                  <div className="prose prose-sm max-w-none">
                    {/* Terms content */}
                  </div>
                </div>
              </Modal>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        if (skipContactStep) {
          return uploadedItems.length > 0;
        }
        return contactInfo.fullName.trim().length > 0 && 
               contactInfo.contact.trim().length > 0;
      case 2:
        return uploadedItems.length > 0;
      case 3:
        return true;
      case 4:
        return availableTimes.length > 0;
      case 5:
        return address.trim().length > 0 && 
               confirmations.ownership &&
               confirmations.address &&
               confirmations.terms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === 5) {
      onSubmit({
        fullName: contactInfo.fullName,
        contact: contactInfo.contact,
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
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8',
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
          {currentStep === 5 ? 'Submit Request' : 'Continue'}
          {currentStep < 5 && <ChevronRight className="h-4 w-4" />}
        </CustomButton>
      </div>
    </div>
  );
};
