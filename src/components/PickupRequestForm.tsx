'use client';

import React, { useState, FormEvent, useEffect } from 'react';
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
  onStepChange?: (step: number) => void;
  onCompletedStepsChange?: (steps: number[]) => void;
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

const STORAGE_KEY = 'giver_form_data';

const saveToLocalStorage = (data: any) => {
  try {
    const dataToSave = {
      ...data,
      currentStep: data.currentStep,
      availableTimes: data.availableTimes,
      address: data.address,
      contactInfo: data.contactInfo,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    
    const data = JSON.parse(saved);
    
    return {
      currentStep: data.currentStep || 1,
      uploadedItems: data.uploadedItems || [],
      availableTimes: data.availableTimes || [],
      address: data.address || '',
      contactInfo: data.contactInfo || { fullName: '', contact: '' },
    };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};

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
      newItems = photos.map((photoUrl) => ({
        id: `${instanceId}-${Math.random().toString(36).substr(2, 9)}`,
        imageUrl: photoUrl,
        quantity: 1,
        selectedFiles: [],
        status: 'uploading'
      }));
      
      setUploadedItems(prevItems => [...prevItems, ...newItems]);

      const files = await Promise.all(photos.map(async (photo, index) => {
        const response = await fetch(photo);
        const blob = await response.blob();
        return new File([blob], `photo-${index}.jpg`, { type: 'image/jpeg' });
      }));

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
      
      
    } catch (error) {
      console.error('Error processing files:', error);
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

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  
  if (digits.length >= 10) {
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6,10)}`;
  }
  else if (digits.length > 6) {
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }
  else if (digits.length > 3) {
    return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
  }
  else if (digits.length > 0) {
    return `(${digits}`;
  }
  return '';
};

const isValidDate = (date: string) => {
  if (!date) return false;
  
  // Handle both YYYY-MM-DD and MM/DD/YYYY formats
  const normalizedDate = date.includes('/') 
    ? date.split('/').reverse().join('-')
    : date;
    
  const selectedDate = new Date(normalizedDate);
  const minDate = new Date();
  minDate.setHours(minDate.getHours() + 72); // 3 days from now
  
  return selectedDate >= minDate;
};

const formatTimeForDisplay = (hour: number, minute: number) => {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minute === 0 ? '00' : minute} ${ampm}`;
};

const generateTimeSlots = () => {
  const slots = [];
  // 9 AM to 5 PM (17:00)
  for (let hour = 9; hour <= 17; hour++) {
    slots.push(formatTimeForDisplay(hour, 0));  // XX:00
    if (hour !== 17) { // Don't add 5:30 PM
      slots.push(formatTimeForDisplay(hour, 30)); // XX:30
    }
  }
  return slots;
};

const isWeekday = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDay();
  return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
};

// Add this helper function to generate valid time options
const generateTimeOptions = () => {
  const options = [];
  for (let hour = 9; hour <= 17; hour++) {
    // Add hour
    options.push(`${hour.toString().padStart(2, '0')}:00`);
    // Add half hour except for 5 PM
    if (hour !== 17) {
      options.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }
  return options;
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
  onStepChange,
  onCompletedStepsChange,
}: PickupRequestFormProps) => {
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if this is a fresh visit or a refresh
      const isRefresh = performance.navigation?.type === 1 || 
        (window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload';
      
      if (isRefresh) {
        // On refresh, get the stored step
        return parseInt(localStorage.getItem('formData_currentStep') || '1');
      } else {
        // On fresh visit/reopen, always start at step 1
        localStorage.removeItem('formData_currentStep'); // Clear stored step
        return 1;
      }
    }
    return 1;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData_currentStep', currentStep.toString());
    }
  }, [currentStep]);

  const [uploadedItems, setUploadedItems] = useState<UploadedItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('formData_items');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [availableTimes, setAvailableTimes] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('formData_times');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [address, setAddress] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('formData_address') || '';
    }
    return '';
  });
  const [contactInfo, setContactInfo] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('formData_contact');
      return saved ? JSON.parse(saved) : { fullName: '', contact: '' };
    }
    return { fullName: '', contact: '' };
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
  const [feedback, setFeedback] = useState('');
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const isStepCompleted = (step: number) => {
    return completedSteps.includes(step);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData_items', JSON.stringify(uploadedItems));
      localStorage.setItem('formData_times', JSON.stringify(availableTimes));
      localStorage.setItem('formData_address', address);
      localStorage.setItem('formData_contact', JSON.stringify(contactInfo));
    }
  }, [uploadedItems, availableTimes, address, contactInfo]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (uploadedItems.length > 0) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
    const dataToSave = {
      currentStep,
      uploadedItems,
      availableTimes,
      address,
      contactInfo,
    };
    saveToLocalStorage(dataToSave);
  }, [currentStep, uploadedItems, availableTimes, address, contactInfo]); 


  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setCurrentStep(savedData.currentStep || 1);
      setUploadedItems(savedData.uploadedItems || []);
      setAvailableTimes(savedData.availableTimes || []);
      setAddress(savedData.address || '');
      setContactInfo(savedData.contactInfo || { fullName: '', contact: '' });
    }
  }, []);

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

  const isSuccessStep = () => currentStep === 4;

  const handleItemRemove = (itemId: string) => {
    setUploadedItems(items => items.filter(item => item.id !== itemId));
  };

  const handleFeedbackSubmit = async (feedbackText: string) => {
    try {
 
      const feedbackData = {
        name: contactInfo.fullName,
        contact: contactInfo.contact,
        feedback: feedbackText,
        createdAt: new Date().toISOString(),
        pickupRequestId: null 
      };

      const docRef = await addDoc(collection(db, 'feedback'), feedbackData);
      console.log('Feedback submitted with ID:', docRef.id);
      
      setFormMessage('Thank you for your feedback!');
      setFeedback('');
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFormMessage('Failed to submit feedback. Please try again.');
    }
  };

  const renderStepContent = () => {
    if (renderCustomStep) {
      const customContent = renderCustomStep(currentStep);
      if (customContent !== null) {
        return customContent;
      }
    }

    switch (currentStep) {
      case 1: 
        return (
          <div className="space-y-6">
            {!isStepCompleted(1) && (
              <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#4B7163]">
                <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
                  Items We Accept
                </h3>
                <p className="text-[#5A7C6F]">
                  We accept gently used furniture and home goods. All items must be in good condition, 
                  clean, and free from damage. Please ensure items are ready for pickup and easily accessible.
                </p>
              </div>
            )}

            <div className="bg-[#F8FAF9] rounded-xl p-6">
              <ImageUpload
                onUpload={async (photos) => {
                  await handlePhotoUpload(photos, setUploadedItems, skipContactStep);
                }}
                maxFiles={50}
              />

              {uploadedItems.length > 0 && (
                <div className="space-y-6">
                  {uploadedItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-[#F8FAF9] rounded-xl">
                      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <button
                          type="button"
                          onClick={() => handleItemRemove(item.id)}
                          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#E67C45] hover:text-[#D15E25] shadow-sm"
                        >
                          ×
                        </button>
                        
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
          </div>
        );

      case 2: 
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
                  min="09:00"
                  max="17:00"
                  step="1800"
                  list="time-options"
                />
                <datalist id="time-options">
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time} />
                  ))}
                </datalist>
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

      case 3: 
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
                  onChange={(value: string) => {
       
                    if (/^[\d(]/.test(value)) {
                      setContactInfo(prev => ({ 
                        ...prev, 
                        contact: formatPhoneNumber(value)
                      }));
                    } else {
                      setContactInfo(prev => ({ ...prev, contact: value }));
                    }
                  }}
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

      case 4: 
        return (
          <div className="space-y-6">
            <div className="bg-[#F8FAF9] rounded-xl p-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-[#4B7163] mx-auto mb-4" />
              <h3 className="font-rockwell text-2xl text-[#4B7163] mb-4">
                Request Submitted Successfully!
              </h3>
              <p className="text-[#5A7C6F] mb-6">
                We'll review your request and get back to you via {contactInfo.contact.includes('@') ? 'email' : 'text'} shortly.
                Thank you for being a sustainable citizen and giving your items a second life!
              </p>
            </div>

    
            <div className="bg-[#F8FAF9] rounded-xl p-6">
              <h4 className="font-rockwell text-lg text-[#4B7163] mb-4">
                Your Pickup Request Details
              </h4>
              
              <div className="space-y-4">
      
                <div className="border-b border-[#4B7163]/10 pb-4">
                  <p className="text-sm text-[#5A7C6F] font-medium mb-2">Contact Information</p>
                  <div className="space-y-1">
                    <p className="text-[#4B7163]">{contactInfo.fullName}</p>
                    <p className="text-[#4B7163]">{contactInfo.contact}</p>
                    <p className="text-[#4B7163]">{address}</p>
                  </div>
                </div>

         
                <div className="border-b border-[#4B7163]/10 pb-4">
                  <p className="text-sm text-[#5A7C6F] font-medium mb-2">Items for Pickup ({uploadedItems.length})</p>
                  <div className="grid gap-3">
                    {uploadedItems.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-3 bg-white p-2 rounded-lg">
                        <img 
                          src={item.imageUrl} 
                          alt={item.description || `Item ${index + 1}`}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="text-[#4B7163] font-medium">{item.description || `Item ${index + 1}`}</p>
                          {item.quantity && item.quantity > 1 && (
                            <p className="text-sm text-[#5A7C6F]">Quantity: {item.quantity}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

           
                <div>
                  <p className="text-sm text-[#5A7C6F] font-medium mb-2">Preferred Pickup Times</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((time) => (
                      <div key={time} className="bg-[#4B7163]/10 rounded-full px-3 py-1 text-sm text-[#4B7163]">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAF9] rounded-xl p-6">
              <h4 className="font-rockwell text-lg text-[#4B7163] mb-4">
                How was your experience?
              </h4>
              <textarea
                placeholder="Share your feedback with us"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full p-3 border-2 rounded-lg border-[#5A7C6F] focus:outline-none focus:ring-2"
              />
              {formMessage && (
                <p className="text-center text-sm text-[#4B7163] mt-2">{formMessage}</p>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <CustomButton 
                onClick={handleNewRequest}
                variant="secondary"
              >
                Submit Another Request
              </CustomButton>
              <CustomButton
                onClick={async () => {
                  if (feedback.trim()) {
                    try {
                      const feedbackData = {
                        name: contactInfo.fullName,
                        contact: contactInfo.contact,
                        address: address,
                        feedback: feedback.trim(),
                        createdAt: new Date().toISOString(),
                      };


                      const docRef = await addDoc(collection(db, 'feedBack'), feedbackData);
                      console.log('Feedback submitted with ID:', docRef.id);
                      
                      setFormMessage('Thank you for your feedback!');
                      setFeedback('');
                    } catch (error) {
                      console.error('Error submitting feedback:', error);
                      setFormMessage('Failed to submit feedback. Please try again.');
                    }
                  }
                }}
                disabled={!feedback.trim()}
              >
                Submit Feedback
              </CustomButton>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    if (completedSteps.includes(currentStep)) {
      return true;
    }

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
        return availableTimes.length >= 2; // Require at least 2 time slots
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
    if (currentStep === 3) {
      setLoading(true);
      try {
        // 1. Upload files first
        const fileUploadPromises = uploadedItems
          .filter(item => item.selectedFiles && item.selectedFiles.length > 0)
          .map(async (item) => {
            const formData = new FormData();
            (item.selectedFiles || []).forEach((file: File) => {
              formData.append('files', file);
            });
    if (canProceed()) {
      if (!completedSteps.includes(currentStep)) {
        const newCompletedSteps = [...completedSteps, currentStep];
        setCompletedSteps(newCompletedSteps);
        onCompletedStepsChange?.(newCompletedSteps);
      }

      if (currentStep === 3) {
        setLoading(true);
        try {
          // 1. Upload files first
          const fileUploadPromises = uploadedItems
            .filter(item => item.selectedFiles && item.selectedFiles.length > 0)
            .map(async (item) => {
              const formData = new FormData();
              (item.selectedFiles || []).forEach((file: File) => {
                formData.append('files', file);
              });

              console.log('Uploading files for item:', {
                description: item.description,
                files: Array.from(formData.getAll('files')).map(f => (f as File).name)
              });

              const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`, {
                method: 'POST',
                body: formData,
              });

              if (!response.ok) {
                const errorText = await response.text();
                console.error('Upload failed:', errorText);
                throw new Error(`Failed to upload files: ${errorText}`);
              }

              const { fileUrls } = await response.json();
              console.log('Received fileUrls:', fileUrls);
              
              return {
                description: item.description,
                fileUrls: fileUrls,
                status: 'pending',
              };
            });

          console.log('Starting file uploads...');
          const processedItems = await Promise.all(fileUploadPromises);
          console.log('File uploads completed:', processedItems);

        // 2. Prepare and submit form data
        const formData = {
          fullName: contactInfo.fullName,
          contact: contactInfo.contact,
          items: processedItems, // uploaded file URLs
          availableTimes: availableTimes,
          address: address
        };
        
        await onSubmit(formData);
        
        // Only clear localStorage after successful submission
        localStorage.removeItem('formData_items');
        localStorage.removeItem('formData_times');
        localStorage.removeItem('formData_address');
        localStorage.removeItem('formData_contact');
        localStorage.removeItem('formData_currentStep');
        
        setCurrentStep(4);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setCurrentStep((prev: number) => prev + 1);
          // 2. Prepare and submit form data
          const formData = {
            fullName: contactInfo.fullName,
            contact: contactInfo.contact,
            items: processedItems, // uploaded file URLs
            availableTimes: availableTimes,
            address: address
          };
          
          await onSubmit(formData);
          clearLocalStorage(); 
          setCurrentStep(4); 
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleNewRequest = () => {
    // Reset form data when starting a new request
    setUploadedItems([]);
    setAvailableTimes([]);
    setAddress('');
    setContactInfo({ fullName: '', contact: '' });
    setConfirmations({
      ownership: false,
      terms: false,
      liability: false,
      marketing: false,
    });
    setCurrentStep(1);
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
    }])
  ];

  // Use provided steps or fall back to defaults
  const formSteps = steps || defaultSteps;

  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6 pt-8',
      className
    )}>
      {!isSuccessStep() && (
        <div className="mb-12">
          <Progress
            steps={steps || defaultSteps}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={(step) => {
              if (step < currentStep || 
                  (step > currentStep && completedSteps.includes(currentStep) && 
                   completedSteps.includes(step - 1))) {
                setCurrentStep(step);
              }
            }}
          />
        </div>
      )}

    
      <div className="mb-8">
        {currentStep === 4 ? (
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 text-[#4B7163]">
              <CheckCircle2 />
            </div>
            <h2 className="font-rockwell text-2xl text-[#4B7163]">
              Request Summary
            </h2>
          </div>
        ) : formSteps[currentStep - 1] ? (
          <>
            <div className="flex items-center gap-3 mb-6">
              {formSteps[currentStep - 1].icon && (
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
          </>
        ) : null}
        {renderStepContent()}
      </div>

   
      <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-end">
        {currentStep > 1 && !isSuccessStep() && (
          <CustomButton
            onClick={() => setCurrentStep(currentStep - 1)}
            variant="secondary"
            className="mr-auto"
          >
            Back
          </CustomButton>
        )}
        
        <CustomButton 
          variant="primary"
          className="next-button"
          disabled={!canProceed() || isSubmitting || loading}
          onClick={handleNext}
        >
          {(isSubmitting || loading) 
            ? 'Submitting...' 
            : currentStep === 3 
              ? 'Submit Request'
              : 'Continue'}
        </CustomButton>
      </div>

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