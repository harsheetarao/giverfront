'use client';

import React, { useState, FormEvent } from 'react';
import { Progress } from './Progress';
import { CustomButton } from './CustomButton';
import { FormInput } from './FormInput';
import { Upload, Image as ImageIcon, Info, MapPin, Calendar, ChevronLeft, ChevronRight, Camera, UserCircle2, type LucideIcon, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { Modal } from './Modal';
import { ImageUpload } from './ImageUpload';
import { ProgressStep } from './Progress';
import TermsOfService from './TermsOfService';
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import Privacy from './Privacy';

interface UploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
  quantity?: number;
  selectedFiles?: File[];
  status?: string;
}

interface PickupRequestFormProps {
  onSubmit: (data: any) => void;
  className?: string;
  skipContactStep?: boolean;
  renderDetailsStep?: (
    items: UploadedItem[],
    handleItemDescription: (id: string, description: string) => void,
    handleQuantityChange: (id: string, quantity: string) => void,
    availableDates: Array<{
      date: string;
      requestCount: number;
    }>
  ) => React.ReactNode;
  availableDates?: Array<{
    date: string;
    requestCount: number;
  }>;
  skipConfirmationStep?: boolean;
  selectedDate?: string;
  selectedTime?: string;
  onDateSelect?: (date: string) => void;
  onTimeSelect?: (time: string) => void;
  steps?: ProgressStep[];
  renderCustomStep?: (currentStep: number) => React.ReactNode;
  validateStep?: (step: number) => boolean;
  isSubmitting?: boolean;
}

interface ConfirmationState {
  ownership: boolean;
  terms: boolean;
  liability: boolean;
  marketing: boolean;
}

type StepType = {
  title: string;
  description: string;
  icon: LucideIcon;
};

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UploadResponse {
  fileUrls: string[];
}

interface FormData {
  fullName: string;
  contact: string;
  items: Array<{
    description: string;
    selectedFiles: File[];
  }>;
  availableTimes: string[];
  address: string;
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
    cache: 24 * 60 * 60,
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
        placeholder={ready ? "Enter your address" : "Loading Places API..."}
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

const handlePhotoUpload = async (
  photos: string[], 
  setUploadedItems: React.Dispatch<React.SetStateAction<UploadedItem[]>>,
  skipContactStep: boolean
) => {
  const instanceId = Math.random().toString(36).substr(2, 9);
  let newItems: UploadedItem[] = [];
  
  if (photos.length > 0) {
    try {
      // Immediately show previews with temporary IDs
      newItems = photos.map((photoUrl) => ({
        id: `${instanceId}-${Math.random().toString(36).substr(2, 9)}`,
        imageUrl: photoUrl,
        quantity: 1,
        selectedFiles: [],
        status: 'uploading'
      }));
      
      setUploadedItems(prevItems => [...prevItems, ...newItems]);

      // Convert base64 strings to Files in the background
      const files = await Promise.all(photos.map(async (photo, index) => {
        const response = await fetch(photo);
        const blob = await response.blob();
        return new File([blob], `photo-${index}.jpg`, { type: 'image/jpeg' });
      }));

      // Update items with actual files
      setUploadedItems(prevItems => 
        prevItems.map(item => {
          const matchingNewItem = newItems.find(newItem => newItem.id === item.id);
          if (matchingNewItem) {
            return {
              ...item,
              selectedFiles: [files[newItems.indexOf(matchingNewItem)]],
              status: 'ready'
            };
          }
          return item;
        })
      );
      
      // Note: Actual upload to backend will happen during form submission
      
    } catch (error) {
      console.error('Error processing files:', error);
      // Update status to error for failed items
      setUploadedItems(prevItems =>
        prevItems.map(item => ({
          ...item,
          status: newItems.some(newItem => newItem.id === item.id) ? 'error' : item.status
        }))
      );
    }
  }
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string) => {
  return /^\+?[\d\s-()]{10,}$/.test(phone);
};

const getMinDate = () => {
  const today = new Date();
  today.setHours(today.getHours() + 72);
  return today.toISOString().split('T')[0];
};

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;
  
  return (
    <Modal onClose={onClose}>
      <div className="text-center p-6">
        <CheckCircle2 className="w-16 h-16 text-[#4B7163] mx-auto mb-4" />
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">
          Thank You for Your Request!
        </h2>
        <p className="text-[#5A7C6F] mb-6">
          We'll review your request and get back to you via text or email shortly. 
          Thank you for being a sustainable citizen and giving your items a second life!
        </p>
        <CustomButton onClick={onClose}>
          Close
        </CustomButton>
      </div>
    </Modal>
  );
};

export const PickupRequestForm = ({
  onSubmit,
  className,
  skipContactStep = false,
  renderDetailsStep,
  availableDates,
  skipConfirmationStep = false,
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
  steps,
  renderCustomStep,
  validateStep,
  isSubmitting,
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
    terms: false,
    liability: false,
    marketing: false,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);

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

  const handleTimeSelection = (time: string) => {
    setAvailableTimes(current =>
      current.includes(time)
        ? current.filter(t => t !== time)
        : [...current, time]
    );
  };

  const renderStepContent = () => {
    // If there's a custom step renderer, use it first
    if (renderCustomStep) {
      const customContent = renderCustomStep(currentStep);
      if (customContent !== null) {
        return customContent;
      }
    }

    // Fall back to default step content
    switch (currentStep) {
      case 1: // What
        return (
          <div className="space-y-6">
            {/* Info Message Box */}
            <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]">
              <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
                Looking to rehome your items? Just upload a photo of each item you would like to rehome.
              </h3>
            </div>

            <ImageUpload
              onUpload={(photos) => handlePhotoUpload(photos, setUploadedItems, skipContactStep)}
              maxFiles={50}
            />

            {uploadedItems.length > 0 && (
              <div className="space-y-6">
                {uploadedItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-[#F8FAF9] rounded-xl">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={item.imageUrl} 
                        alt="Item" 
                        className="w-full h-full object-cover"
                      />
                      {item.status === 'uploading' && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        </div>
                      )}
                      {item.status === 'error' && (
                        <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center">
                          <span className="text-white text-sm">Error</span>
                        </div>
                      )}
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
            )}
          </div>
        );

      case 2: // When
        if (renderDetailsStep) {
          return renderDetailsStep(
            uploadedItems,
            handleItemDescription,
            handleQuantityChange,
            availableDates || []
          );
        }
        return (
          <div className="space-y-6">
            {/* Info Message Box */}
            <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]">
              <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
                Schedule Your Pickup
              </h3>
              <p className="text-[#5A7C6F]">
                Please select at least two preferred pickup times. Having multiple options helps us 
                plan the most efficient and sustainable pickup route, reducing our carbon footprint.
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput
                  type="date"
                  label="Pickup Date"
                  value={selectedDate || ''}
                  min={getMinDate()}
                  onChange={(value: string) => {
                    if (onDateSelect) onDateSelect(value);
                  }}
                />
                <FormInput
                  type="time"
                  label="Pickup Time"
                  value={selectedTime || ''}
                  onChange={(value: string) => {
                    if (onTimeSelect) onTimeSelect(value);
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  if (selectedDate && selectedTime) {
                    const timeSlot = `${selectedDate} ${selectedTime}`;
                    if (!availableTimes.includes(timeSlot)) {
                      setAvailableTimes(prev => [...prev, timeSlot]);
                    }
                  }
                }}
                disabled={!selectedDate || !selectedTime}
                className={cn(
                  "w-full p-3 rounded-md text-center transition-colors",
                  selectedDate && selectedTime
                    ? "bg-[#4B7163] text-white hover:bg-[#3D5B51]"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                )}
              >
                Add This Time Slot
              </button>

              {/* Selected Time Slots Display */}
              <div className="mt-8">
                <h4 className="font-medium text-[#4B7163] mb-4">
                  Your Selected Time Slots {availableTimes.length < 2 && 
                    <span className="text-[#E67C45] text-sm">
                      (Please select {2 - availableTimes.length} more)
                    </span>
                  }
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {availableTimes.map((timeSlot, index) => (
                    <div 
                      key={timeSlot}
                      className="bg-white p-4 rounded-lg border-2 border-[#4B7163] relative"
                    >
                      <button
                        type="button"
                        onClick={() => setAvailableTimes(prev => prev.filter(t => t !== timeSlot))}
                        className="absolute top-2 right-2 text-[#E67C45] hover:text-[#D15E25]"
                      >
                        ×
                      </button>
                      <p className="text-[#4B7163] font-medium">
                        Option {index + 1}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(timeSlot).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(timeSlot).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  ))}
                  {[...Array(Math.max(0, 3 - availableTimes.length))].map((_, i) => (
                    <div 
                      key={i}
                      className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                    >
                      <p className="text-gray-400 text-center">
                        Select a time slot
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#5A7C6F] mt-6">
                Business hours: Mon-Fri, 9AM-5PM
              </p>
            </div>
          </div>
        );

      case 3: // Where
        if (skipConfirmationStep) return null;
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-4">
              <FormInput
                label="First and Last Name"
                value={contactInfo.fullName}
                onChange={(value: string) => setContactInfo(prev => ({ ...prev, fullName: value }))}
              />
              
              <div className="mt-6">
                <FormInput
                  label="Email or Mobile Number"
                  value={contactInfo.contact}
                  onChange={(value: string) => setContactInfo(prev => ({ ...prev, contact: value }))}
                  hint="Choose the contact method you check most frequently for convenient updates."
                  error={
                    contactInfo.contact && !isValidEmail(contactInfo.contact) && !isValidPhone(contactInfo.contact)
                      ? "Please enter a valid email address or phone number"
                      : undefined
                  }
                  state={
                    contactInfo.contact
                      ? (isValidEmail(contactInfo.contact) || isValidPhone(contactInfo.contact))
                        ? 'completed'
                        : 'error'
                      : 'normal'
                  }
                />
              </div>
            </div>

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

            <div className="space-y-4 bg-[#F8FAF9] rounded-xl p-4">
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
                  I am the owner of the household goods I am requesting for pick up.
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
                  I have read and agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setIsTermsVisible(true)}
                    className="text-[#6AB098] underline hover:text-[#4B7163]"
                  >
                    Terms of Service
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyVisible(true)}
                    className="text-[#6AB098] underline hover:text-[#4B7163]"
                  >
                    Privacy Policy
                  </button>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmations.liability}
                  onChange={(e) => setConfirmations(prev => ({
                    ...prev,
                    liability: e.target.checked
                  }))}
                  className="mt-1"
                />
                <span className="text-sm text-[#5A7C6F]">
                  I assume all risk associated with items being picked up at my residence and release Gone from any and all claims.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmations.marketing}
                  onChange={(e) => setConfirmations(prev => ({
                    ...prev,
                    marketing: e.target.checked
                  }))}
                  className="mt-1"
                />
                <span className="text-sm text-[#5A7C6F]">
                  I acknowledge my number will be stored and used to schedule pick-up and used for marketing and promotional purposes. I may opt out at any time by responding "Stop" to any text messages I receive.
                </span>
              </label>
            </div>
          </div>
        );

      case 4: // Success & Feedback
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-[#4B7163] mx-auto mb-4" />
              <h3 className="font-rockwell text-2xl text-[#4B7163] mb-4">
                Thank You for Your Request!
              </h3>
              <p className="text-[#5A7C6F] mb-6">
                We'll review your request and get back to you via text or email shortly.
                Thank you for being a sustainable citizen and giving your items a second life!
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-xl p-6">
              <h4 className="font-rockwell text-lg text-[#4B7163] mb-4">
                How was your experience?
              </h4>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B7163]"
                placeholder="Tell us about your experience with our pickup request process..."
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    if (validateStep) {
      return validateStep(currentStep);
    }

    switch (currentStep) {
      case 1: // What
        return uploadedItems.length > 0;
      case 2: // When
        if (renderDetailsStep) {
          return selectedDate && selectedTime;
        }
        return availableTimes.length > 0;
      case 3: // Where
        if (skipConfirmationStep) return false;
        return contactInfo.fullName.trim().length > 0 && 
               (isValidEmail(contactInfo.contact) || isValidPhone(contactInfo.contact)) &&
               address.trim().length > 0 && 
               Object.values(confirmations).every(value => value === true);
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === 3) { // When on the contact/confirmation step
      try {
        const formData = {
          fullName: contactInfo.fullName,
          contact: contactInfo.contact,
          items: uploadedItems.map(item => ({
            description: item.description || '',
            imageUrl: item.imageUrl,
            status: 'pending',
          })),
          availableTimes: availableTimes,
          address: address
        };
        
        console.log('Submitting form data:', formData);
        await onSubmit(formData); // Wait for submission to complete
        setCurrentStep(4); // Move to thank you page after successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally handle error state here
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const defaultSteps: ProgressStep[] = [
    {
      label: 'Item Photos',
      description: 'Upload item photos to get started',
      icon: Camera
    },
    {
      label: 'Pickup Time',
      description: 'Choose convenient pickup time slots',
      icon: Calendar
    },
    ...(skipConfirmationStep ? [] : [{
      label: 'Contact Info',
      description: 'We\'ll use your contact info to coordinate pickup details and keep you updated on status',
      icon: UserCircle2
    }]),
    {
      label: 'Thank You',
      description: 'Your request has been submitted',
      icon: CheckCircle2
    }
  ];

  // Use provided steps or fall back to defaults
  const formSteps = steps || defaultSteps;

  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8',
      className
    )}>
      {/* Progress Indicator with Icons */}
      <div className="mb-8">
        <Progress 
          steps={formSteps.map(step => ({
            label: step.label,
            description: step.description,
            icon: step.icon
          })) || []} 
          currentStep={currentStep} 
          onStepClick={setCurrentStep}
        />
      </div>

      {/* Step Content with Icon Headers */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          {formSteps[currentStep - 1]?.icon && (
            <div className="w-6 h-6 text-[#4B7163]">
              {React.createElement(formSteps[currentStep - 1].icon)}
            </div>
          )}
          <h2 className="font-rockwell text-2xl text-[#4B7163]">
            {formSteps[currentStep - 1].label}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          {formSteps[currentStep - 1].description}
        </p>
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
          variant="primary"
          className="next-button"
          disabled={!canProceed() || isSubmitting}
          onClick={handleNext}
        >
          {isSubmitting 
            ? 'Submitting...' 
            : currentStep === 3 
              ? 'Submit Request'
              : 'Continue'}
        </CustomButton>
      </div>

      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />

      <TermsOfService 
        isVisible={isTermsVisible} 
        onClose={() => setIsTermsVisible(false)} 
      />

      <Privacy 
        isVisible={isPrivacyVisible} 
        onClose={() => setIsPrivacyVisible(false)} 
      />
    </div>
  );
};
