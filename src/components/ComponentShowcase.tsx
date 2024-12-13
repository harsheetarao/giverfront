'use client';

import React, { useState } from 'react';
import NextImage from 'next/image'; 
import { Menu } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import { Tag } from '@/components/Tag';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";
import { Card } from "@/components/Card";
import { ProductCard } from '@/components/ProductCard';
import { CustomButton } from "@/components/CustomButton";
import { Progress } from "@/components/Progress";
import { MessageBubble } from "@/components/MessageBubble";
import { SwipeCardDeck } from '@/components/SwipeCardDeck';
import { FormDropdown } from '@/components/FormDropdown';
import { FormInput } from '@/components/FormInput';
import { PickupRequestManager } from '@/components/PickupRequestManager';
import { ShoppingCart } from '@/components/ShoppingCart';
import { PickupRequestForm } from '@/components/PickupRequestForm';
import { Modal } from '@/components/Modal';
import { MessageThread } from '@/components/MessageThread';
import { DriverPickupWorkflow } from '@/components/DriverPickupWorkflow';
import { MapModal } from '@/components/MapModal';
import { MapPin, UserCircle2, CreditCard, CheckCircle } from 'lucide-react';
import { InventoryProcessing } from '@/components/InventoryProcessing';
import { ImageUpload } from '@/components/ImageUpload';
import { ReceivingWorkflow } from '@/components/ReceivingWorkflow';
import { PartnerPickupRequestForm } from '@/components/PartnerPickupRequestForm';
import { CodeSample } from '@/components/CodeSample';
import { ListingWorkflow } from '@/components/ListingWorkflow';
import { BulkPartnerPickupRequestForm } from '@/components/BulkPartnerPickupRequestForm';
import { SearchInput } from '@/components/SearchInput';
import { LogisticsCalendar } from './LogisticsCalendar';
import { DropoffRequestManager } from '@/components/DropoffRequestManager';

import Logo from '@/styles/ui/logos/gone.svg';

import { Header } from './Header';
import { Footer } from './Footer';
import { Page } from './page';
import { DocumentationSection } from './DocumentationSection';

import type { AcceptedRequest } from '@/types/AcceptedRequest';
import { RequestStatus } from '@/types/PickupItem';

// Add this near the top with other interfaces
interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  sender: 'user' | 'admin';
}

interface AcceptedPickupItem {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled';
  verificationPhotos: Array<{
    id: string;
    imageUrl: string;
    timestamp: Date;
    note?: string;
  }>;
  imageUrl: string;
  availableDates: Array<{
    date: string;
    requestCount: number;
  }>;
  pickupAddress: string;
  scheduledDate?: string;
}

interface Pickup {
  id: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled' | 'in_inventory' | 'ready_for_sale';
  pickupPhoto: string;
  pickupDate: Date;
  pickupAddress: string;
  items: any[];
  messages: any[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
}

// Add this interface near your other interfaces
interface PartnerPickupFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  items: Array<{
    description: string;
    quantity: number;
  }>;
}

// Add this interface near the other interfaces at the top of the file
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface PickupItem {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
  imageUrl: string;
  availableDates: Array<{
    date: string;
    requestCount: number;
  }>;
  location: string;
  verificationPhotos: Array<{
    id: string;
    imageUrl: string;
    timestamp: Date;
    note?: string;
  }>;
}

// Add this interface with the other interfaces
interface ProgressStep {
  label: string;
  description: string;
  icon: React.ComponentType;
}

const ContentWithControls = ({ title, children, controls }: {
  title: string;
  children: React.ReactNode;
  controls: React.ReactNode;
}) => (
  <div className="space-y-4">
    <h3 className="heading-3">{title}</h3>
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-gray-50 rounded-lg p-4">
        {controls}
      </div>
      <div className="bg-white rounded-lg p-4">
        {children}
      </div>
    </div>
  </div>
);

// Move sampleMessages outside of ComponentShowcase
const sampleMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! I have a question about pickup services.',
    timestamp: new Date(Date.now() - 86400000), // 1 day ago
    isRead: true,
    sender: 'user'
  },
  {
    id: '2',
    content: 'Of course! How can I help you today?',
    timestamp: new Date(Date.now() - 82800000), // 23 hours ago
    isRead: true,
    sender: 'admin'
  },
  {
    id: '3',
    content: 'Is it possible to schedule a pickup for next week?',
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    isRead: false,
    sender: 'user'
  }
];

const MessageThreadWithControls = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState('');

  return (
    <ContentWithControls
      title="Message Thread"
      controls={
        <div className="space-y-4">
          <FormInput
            label="New Message"
            value={newMessage}
            onChange={setNewMessage}
            placeholder="Type a message..."
          />
          <div className="flex gap-2">
            <CustomButton onClick={() => {
              if (!newMessage.trim()) return;
              const newMsg: Message = {
                id: String(Date.now()),
                content: newMessage,
                timestamp: new Date(),
                isRead: false,
                sender: 'user'
              };
              setMessages([...messages, newMsg]);
              setNewMessage('');
            }}>
              Send Message
            </CustomButton>
          </div>
        </div>
      }
    >
      <div className="h-[400px] overflow-y-auto">
        <MessageThread
          messages={messages}
          onSendMessage={(message) => {
            const newMsg: Message = {
              id: String(Date.now()),
              content: message,
              timestamp: new Date(),
              isRead: false,
              sender: 'admin'
            };
            setMessages([...messages, newMsg]);
          }}
          onMessageRead={(messageId) => {
            setMessages(messages.map(msg => 
              msg.id === messageId ? { ...msg, isRead: true } : msg
            ));
          }}
        />
      </div>
    </ContentWithControls>
  );
};

const ComponentShowcase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedLogisticsDate, setSelectedLogisticsDate] = useState('');
  const [selectedLogisticsTime, setSelectedLogisticsTime] = useState('');

  // All mock data declarations
  const menuItems = [
    { label: 'Components', href: '#components' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Pages', href: '#pages' },
    { label: 'Github', href: 'https://github.com/Get-it-Gone/ComponentLibrary' }
  ];
  const steps: ProgressStep[] = [
    {
      label: 'Profile',
      description: 'Personal details',
      icon: UserCircle2
    },
    {
      label: 'Address',
      description: 'Shipping info',
      icon: MapPin
    },
    {
      label: 'Payment',
      description: 'Payment details',
      icon: CreditCard
    },
    {
      label: 'Review',
      description: 'Order summary',
      icon: CheckCircle
    }
  ];

  const driverWorkflowRequests: AcceptedRequest[] = [
    {
      id: '1',
      items: [{
        id: 'item1',
        name: 'Vintage Chair',
        description: 'Beautiful vintage chair',
        status: 'pending',
        verificationPhotos: [{
          id: '1',
          imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
          timestamp: new Date()
        }],
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        availableDates: [{ date: '2024-03-19', requestCount: 0 }],
        pickupAddress: '123 Main St',
        scheduledDate: '2024-03-19',
        pickupPhoto: 'https://example.com/photo.jpg',
        pickupDate: new Date(),
        items: [],
        messages: [],
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerPhone: '555-0123',
        address: '123 Main St',
        photos: []
      }],
      messages: sampleMessages,
      status: 'pending',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      pickupDate: new Date(),
      address: '123 Main St',
      pickupPhoto: 'https://example.com/photo.jpg',
      pickupAddress: '123 Main St'
    }
  ];

  const pickupRequests = [
    {
      id: '1',
      items: [{
        id: 'item1',
        name: 'Vintage Chair',
        status: 'pending' as const,
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        description: 'Beautiful vintage chair',
        availableDates: [{ date: '2024-03-19', requestCount: 0 }],
        location: '123 Main St',
        pickupPhoto: 'https://example.com/photo.jpg',
        pickupDate: new Date(),
        pickupAddress: '123 Main St',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerPhone: '555-0123',
        messages: sampleMessages,
        address: '123 Main St'
      }],
      messages: sampleMessages,
      status: 'pending' as const,
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St',
      pickupPhoto: 'https://example.com/photo.jpg',
      pickupDate: new Date(),
      pickupAddress: '123 Main St'
    }
  ];

  const acceptedRequests = [
    {
      id: '1',
      items: [{
        id: 'item1',
        name: 'Vintage Chair',
        description: 'Beautiful vintage chair',
        status: 'pending' as const,
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        availableDates: [{
          date: '2024-03-19',
          requestCount: 0
        }],
        location: '123 Main St',
        pickupPhoto: 'https://example.com/photo.jpg',
        pickupDate: new Date(),
        pickupAddress: '123 Main St',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerPhone: '555-0123',
        address: '123 Main St'
      }],
      messages: sampleMessages,
      status: 'pending' as const,
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      pickupDate: '2024-03-20',
      address: '123 Main St',
      pickupPhoto: 'https://example.com/photo.jpg',
      pickupAddress: '123 Main St'
    }
  ];

  const samplePickupRequest = {
    id: '1',
    status: 'completed' as const,
    pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
    pickupDate: new Date('2024-03-20'),
    pickupAddress: '123 Main St',
    items: [
      {
        id: 'item1',
        name: 'Vintage Chair',
        description: 'Beautiful vintage chair',
        status: 'pending' as const,
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        availableDates: [{ date: '2024-03-19', requestCount: 0 }],
        location: '123 Main St'
      }
    ],
    messages: [],
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St'
  };

  const inventoryRequest = {
    id: '1',
    items: [{
      id: 'item1',
      name: 'Vintage Chair',
      description: 'Beautiful vintage chair',
      status: 'pending' as const,
      imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
      availableDates: [{ date: '2024-03-19', requestCount: 0 }],
      pickupPhoto: 'https://example.com/photo.jpg',
      pickupDate: new Date(),
      pickupAddress: '123 Main St',
      items: [],
      messages: [],
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St',
      verificationPhotos: []
    }],
    status: 'pending' as const,
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St',
    pickupPhoto: 'https://example.com/photo.jpg',
    pickupDate: new Date(),
    pickupAddress: '123 Main St',
    messages: sampleMessages
  };

  // Add demo data near other mock data
  const logisticsCalendarData = [
    {
      date: new Date().toISOString().split('T')[0], // Today
      timeSlots: [
        {
          time: '09:00',
          availableDrivers: 3,
          pickupCount: 2,
          dropoffCount: 1,
          pickups: [
            {
              id: '1',
              customerName: 'John Doe',
              address: '123 Main St, Seattle, WA',
              items: [
                {
                  id: 'item1',
                  name: 'Vintage Chair',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Beautiful vintage chair in good condition'
                }
              ]
            },
            {
              id: '2',
              customerName: 'Jane Smith',
              address: '456 Pine St, Seattle, WA',
              items: [
                {
                  id: 'item2',
                  name: 'Dining Table',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Large dining table, seats 6'
                }
              ]
            }
          ],
          dropoffs: [
            {
              id: '3',
              customerName: 'Bob Wilson',
              address: '789 Oak St, Seattle, WA',
              items: [
                {
                  id: 'item3',
                  name: 'Sofa',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Modern 3-seater sofa'
                }
              ]
            }
          ]
        },
        // Add more time slots with similar data structure
      ],
      totalPickups: 3,
      totalDropoffs: 4,
      availableDrivers: 5
    },
    // Add tomorrow's data with similar structure
  ];

  // Add mock data
  const mockDropoffRequests = [
    {
      id: '1',
      partnerName: 'Goodwill Seattle',
      partnerEmail: 'donations@goodwill.org',
      partnerPhone: '206-555-0123',
      scheduledDate: '2024-03-20',
      status: 'pending' as const,
      items: [
        {
          id: 'item1',
          name: 'Dining Chairs',
          description: 'Set of 4 wooden dining chairs',
          quantity: 4,
          condition: 'Good',
          category: 'Furniture',
          imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
          estimatedValue: 200
        },
        {
          id: 'item2',
          name: 'Coffee Table',
          description: 'Solid wood coffee table',
          quantity: 1,
          condition: 'Excellent',
          category: 'Furniture',
          imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
          estimatedValue: 150
        }
      ],
      messages: [
        {
          id: 'm1',
          content: 'We have a bulk donation to drop off',
          timestamp: new Date(),
          isRead: true,
          sender: 'user' as const
        }
      ]
    }
  ];

  // Component definitions
  const TagList = () => {
    const [tags, setTags] = React.useState([
      { id: 1, text: 'React' },
      { id: 2, text: 'TypeScript' },
      { id: 3, text: 'Tailwind CSS' },
    ]);

    const handleDelete = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };

    return (
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Tag
            key={tag.id}
            text={tag.text}
            onDelete={() => handleDelete(tag.id)}
          />
        ))}
      </div>
    );
  };
  
  const ToggleExample = ({ 
    variant, 
    label, 
    disabled = false, 
    initialChecked = false 
  }: { 
    variant: 'primary' | 'cta' | 'secondary';
    label: string;
    disabled?: boolean;
    initialChecked?: boolean;
  }) => {
    const [checked, setChecked] = React.useState(initialChecked);
    
    return (
      <div className="flex items-center gap-3">
        <Toggle
          checked={checked}
          onChange={setChecked}
          variant={variant}
          disabled={disabled}
        />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    );
  };

  // Content arrays
  const newContentItems = [
    {
      title: "Modal",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Modal</h3>
          <CustomButton onClick={() => setShowDemoModal(true)}>
            Open Modal
          </CustomButton>
          
          {showDemoModal && (
            <Modal onClose={() => setShowDemoModal(false)}>
              <div className="p-6">
                <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">
                  Demo Modal
                </h2>
                <p className="text-gray-600 mb-6">
                  This is an example of our reusable modal component.
                </p>
                <div className="flex justify-end">
                  <CustomButton onClick={() => setShowDemoModal(false)}>
                    Close Modal
                  </CustomButton>
                </div>
              </div>
            </Modal>
          )}
          <CodeSample code={`const [showModal, setShowModal] = useState(false);

<CustomButton onClick={() => setShowModal(true)}>
  Open Modal
</CustomButton>

{showModal && (
  <Modal onClose={() => setShowModal(false)}>
    <div className="p-6">
      <h2 className="text-2xl mb-4">Demo Modal</h2>
      <p className="mb-6">Modal content goes here</p>
      <CustomButton onClick={() => setShowModal(false)}>
        Close Modal
      </CustomButton>
    </div>
  </Modal>
)}`} />
        </div>
      )
    },
    {
      title: "Message Thread",
      content: (
        <div className="space-y-4">
          <MessageThreadWithControls />
          <CodeSample code={`const [messages, setMessages] = useState(sampleMessages);

<MessageThread
  messages={messages}
  onSendMessage={(message) => handleSendMessage(message)}
  onMessageRead={(messageId) => handleMessageRead(messageId)}
/>`} />
        </div>
      )
    },
    {
      title: "Map Modal",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Map Modal</h3>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">
              Click the button below to see the map modal with a sample address:
            </p>
            
            <CustomButton 
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              View Location
            </CustomButton>
            
            {showMapModal && (
              <MapModal
                address="123 Main Street, New York, NY 10001"
                onClose={() => setShowMapModal(false)}
              />
            )}
          </div>
        </div>
      )
    },
    {
      title: "Logistics Calendar",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Logistics Calendar</h3>
          <LogisticsCalendar
            selectedDate={selectedLogisticsDate}
            selectedTime={selectedLogisticsTime}
            onDateSelect={setSelectedLogisticsDate}
            onTimeSelect={setSelectedLogisticsTime}
            calendarData={logisticsCalendarData}
          />
        </div>
      )
    }
  ];

  const contentItems = [
    // Basic UI Elements
    {
      title: "Button Variants",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Buttons</h3>
          
          {/* Primary Buttons */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Primary</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" size="sm">Small Primary</CustomButton>
              <CustomButton variant="primary">Default Primary</CustomButton>
              <CustomButton variant="primary" size="lg">Large Primary</CustomButton>
            </div>
            <CodeSample code={`<CustomButton variant="primary" size="sm">Small Primary</CustomButton>
<CustomButton variant="primary">Default Primary</CustomButton>
<CustomButton variant="primary" size="lg">Large Primary</CustomButton>`} />
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">CTA</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="cta" size="sm">Small CTA</CustomButton>
              <CustomButton variant="cta">Default CTA</CustomButton>
              <CustomButton variant="cta" size="lg">Large CTA</CustomButton>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Secondary</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="secondary" size="sm">
                Small Secondary
              </CustomButton>
              <CustomButton variant="secondary">
                Default Secondary
              </CustomButton>
              <CustomButton variant="secondary" size="lg">
                Large Secondary
              </CustomButton>
            </div>
          </div>

          {/* Disabled State */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Disabled State</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" disabled>
                Disabled Primary
              </CustomButton>
              <CustomButton variant="cta" disabled>
                Disabled CTA
              </CustomButton>
              <CustomButton variant="secondary" disabled>
                Disabled Secondary
              </CustomButton>
            </div>
            <CodeSample code={`<CustomButton variant="cta" size="sm">Small CTA</CustomButton>
<CustomButton variant="cta">Default CTA</CustomButton>
<CustomButton variant="cta" size="lg">Large CTA</CustomButton>`} />
          </div>
        </div>
      )
    },
     // Form Elements
     {
      title: "Form Input Variants",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Form Input States</h3>
          
          <FormInput
            label="Normal Input"
            placeholder="Enter text..."
            value=""
            onChange={() => {}}
          />
    
          <FormInput
            label="Completed Input"
            placeholder="Completed field"
            value="Completed value"
            state="completed"
            onChange={() => {}}
          />
    
          <FormInput
            label="Error Input"
            placeholder="Error field"
            value="Invalid value"
            state="error"
            hint="This field has an error"
            onChange={() => {}}
          />
    
          <FormInput
            label="Required Input"
            placeholder="Required field"
            value=""
            state="required"
            onChange={() => {}}
          />
    
          <FormInput
            label="Blank Required Input"
            placeholder="This field is required"
            value=""
            state="blankRequired"
            hint="This field cannot be empty"
            onChange={() => {}}
          />
    
          <FormInput
            label="Disabled Input"
            placeholder="This field is disabled"
            value=""
            disabled
            onChange={() => {}}
          />
          <CodeSample code={`<FormInput
              label="Normal Input"
              placeholder="Enter text..."
              value={value}
              onChange={setValue}
            />`} />
        </div>
      )
    },
    {
      title: "Form Dropdown Variants",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Dropdown States</h3>
          
          <FormDropdown
            label="Normal Dropdown"
            options={[
              { value: '', label: 'Select an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
    
          <FormDropdown
            label="Completed Dropdown"
            state="completed"
            value="option1"
            options={[
              { value: 'option1', label: 'Selected Option' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
    
          <FormDropdown
            label="Error Dropdown"
            state="error"
            hint="Please select a valid option"
            options={[
              { value: '', label: 'Select an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
    
          <FormDropdown
            label="Required Dropdown"
            state="required"
            options={[
              { value: '', label: 'Select an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
    
          <FormDropdown
            label="Blank Required Dropdown"
            state="blankRequired"
            hint="This field is required"
            options={[
              { value: '', label: 'Select an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
    
          <FormDropdown
            label="Disabled Dropdown"
            disabled
            options={[
              { value: '', label: 'Select an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
            onChange={(value) => console.log(value)}
          />
        </div>
      )
    },
    {
      title: "Tags",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Tags</h3>
          
          {/* Primary Tags */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Primary Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Tag text="Active Tag" onDelete={() => console.log('Delete clicked')} />
              <Tag text="Read Only Tag" />
            </div>
            <CodeSample code={`<Tag text="Active Tag" onDelete={() => handleDelete()} />
<Tag text="Read Only Tag" />`} />
          </div>
    
          {/* CTA Tags */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">CTA Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Tag text="Active Tag" variant="cta" onDelete={() => console.log('Delete clicked')} />
              <Tag text="Read Only Tag" variant="cta" />
            </div>
          </div>
    
          {/* Secondary Tags */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Secondary Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Tag 
                text="Active Tag" 
                variant="secondary"
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Long Tag Name That Should Truncate" 
                variant="secondary"
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Read Only Tag" 
                variant="secondary"
              />
            </div>
            <CodeSample code={`<Tag text="Active Tag" variant="cta" onDelete={() => handleDelete()} />
<Tag text="Read Only Tag" variant="cta" />`} />
          </div>
    
          {/* Interactive Example */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Interactive Example</h4>
            <TagList />
          </div>
        </div>
      )
    },
    {
      title: "Progress Example",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Progress</h3>
          <Progress 
            steps={steps} 
            currentStep={currentStep} 
            onStepClick={setCurrentStep} 
          />
          <div className="flex gap-2">
            <CustomButton onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))} disabled={currentStep === 1}>
              Previous
            </CustomButton>
            <CustomButton onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))} disabled={currentStep === steps.length}>
              Next
            </CustomButton>
          </div>
          <CodeSample code={`const steps = ['Profile', 'Address', 'Payment', 'Review'];
const [currentStep, setCurrentStep] = useState(1);

<Progress steps={steps} currentStep={currentStep} />
<CustomButton 
  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
  disabled={currentStep === 1}
>
  Previous
</CustomButton>
<CustomButton 
  onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
  disabled={currentStep === steps.length}
>
  Next
</CustomButton>`} />
        </div>
      )
    },
    {
      title: "Toggle Switches",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Toggle</h3>
          
          {/* Primary Toggles */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Primary</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ToggleExample 
                variant="primary"
                label="Off State"
              />
              <ToggleExample 
                variant="primary"
                initialChecked={true}
                label="On State"
              />
              <ToggleExample 
                variant="primary"
                disabled
                label="Disabled"
              />
            </div>
          </div>
    
          {/* CTA Toggles */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">CTA</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ToggleExample 
                variant="cta"
                label="Off State"
              />
              <ToggleExample 
                variant="cta"
                initialChecked={true}
                label="On State"
              />
              <ToggleExample 
                variant="cta"
                disabled
                label="Disabled"
              />
            </div>
          </div>
    
          {/* Secondary Toggles */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Secondary</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ToggleExample 
                variant="secondary"
                label="Off State"
              />
              <ToggleExample 
                variant="secondary"
                initialChecked={true}
                label="On State"
              />
              <ToggleExample 
                variant="secondary"
                disabled
                label="Disabled"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Message Bubbles Example",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Message Bubble</h3>
          <MessageBubble state="primary">Primary message bubble</MessageBubble>
          <MessageBubble state="secondary">Secondary message bubble</MessageBubble>
          <MessageBubble state="tertiary">Tertiary message bubble</MessageBubble>
          <CodeSample code={`<MessageBubble state="primary">Primary message bubble</MessageBubble>
<MessageBubble state="secondary">Secondary message bubble</MessageBubble>
<MessageBubble state="tertiary">Tertiary message bubble</MessageBubble>`} />
        </div>
      )
    },
    {
      title: "ImageUpload",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">ImageUpload</h3>
          <ImageUpload
            onUpload={(files) => {
              console.log('Files uploaded:', files);
              // Handle the upload logic here
            }}
            maxFiles={3}
          />
          <CodeSample code={`const handleUpload = (files: File[]) => {
  console.log('Files uploaded:', files);
  // Handle the upload logic here
};

<ImageUpload
  onUpload={handleUpload}
  maxFiles={3}
/>`} />
        </div>
      )
    },
      {
        title: "Swipe Cards Example",
        content: (
          <div className="space-y-4">
            <h3 className="heading-3">Basic Swipe Card</h3>
            <div className="h-[400px] w-full relative">
              <SwipeCardDeck
                cards={[
                  {
                    id: 1,
                    imageUrl: "https://gone.com/assets/img/photo2.webp",
                    alt: "Card 1",
                    content: (
                      <div>
                        <h4 className="font-bold mb-1">Card One</h4>
                        <p>Swipe right to approve, left to reject</p>
                      </div>
                    )
                  },
                  {
                    id: 2,
                    imageUrl: "https://gone.com/assets/img/photo3.webp",
                    alt: "Card 2",
                    content: (
                      <div>
                        <h4 className="font-bold mb-1">Card Two</h4>
                        <p>Another swipeable card example</p>
                      </div>
                    )
                  },
                  // Add more cards as needed
                ]}
                onSwipeLeft={(card) => console.log('Rejected:', card)}
                onSwipeRight={(card) => console.log('Approved:', card)}
                onEmpty={() => console.log('No more cards!')}
              />
            </div>
            <CodeSample code={`const cards = [
      {
        id: 1,
        imageUrl: "/path/to/image1.jpg",
        alt: "Card 1",
        content: (
          <div>
            <h4 className="font-bold mb-1">Card One</h4>
            <p>Swipe right to approve, left to reject</p>
          </div>
        )
      }
    ];
  
    <SwipeCardDeck
      cards={cards}
      onSwipeLeft={(card) => handleReject(card)}
      onSwipeRight={(card) => handleApprove(card)}
      onEmpty={() => handleEmptyDeck()}
    />`} />
          </div>
        )
      },
        // Shopping Components
    {
      title: "Shopping Cart",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Shopping Cart</h3>
          <ShoppingCart
            items={[
              {
                id: '1',
                name: 'Vintage Chair',
                description: 'Beautiful vintage chair in excellent condition',
                price: 199.99,
                imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg'
              },
              {
                id: '2',
                name: 'Antique Lamp',
                description: 'Classic design table lamp',
                price: 89.99,
                imageUrl: 'https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg'
              }
            ]}
            onRemoveItem={(id) => console.log('Removed item:', id)}
            onCheckout={() => console.log('Proceeding to checkout')}
          />
          <CodeSample code={`const cartItems = [
    {
      id: '1',
      name: 'Vintage Chair',
      description: 'Beautiful vintage chair',
      price: 199.99,
      imageUrl: '/path/to/image.jpg'
    }
  ];
  
  <ShoppingCart
    items={cartItems}
    onRemoveItem={(id) => handleRemoveItem(id)}
    onCheckout={() => handleCheckout()}
  />`} />
        </div>
      )
    },
    // Cards and Display Components
  {
    title: "Product Card",
    content: (
      <div className="space-y-4">
        <h3 className="heading-3">Product Card</h3>
        <ProductCard
          title="Vintage Chair"
          description="Beautiful vintage chair in excellent condition"
          price={199.99}
          imageUrl="https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg"
          onAddToCart={() => console.log('Added to cart')}
          category="Furniture"
          attributes={[
            { label: "Material", value: "Wood" },
            { label: "Condition", value: "Excellent" }
          ]}
        />
        <CodeSample code={`<ProductCard
  title="Vintage Chair"
  description="Beautiful vintage chair in excellent condition"
  price={199.99}
  imageUrl="/path/to/image.jpg"
  onAddToCart={() => handleAddToCart()}
  category="Furniture"
  attributes={[
    { label: "Material", value: "Wood" },
    { label: "Condition", value: "Excellent" }
  ]}
/>`} />
      </div>
    )
  },
{
      title: "Partner Pickup Request Form",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Partner Pickup Request Form</h3>
          <PartnerPickupRequestForm 
            onSubmit={(data: PartnerPickupFormData) => {
              console.log('Partner form submitted:', data);
            }}
          />
        </div>
      )
    },
    {
      title: "Pickup Request Form",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Pickup Request Form</h3>
          <PickupRequestForm
            onSubmit={async (data) => {
              console.log('Form submitted:', data);
              return { id: 'mock-id' };
            }}
            availableDates={[
              { date: '2024-03-19', requestCount: 0 },
              { date: '2024-03-20', requestCount: 1 },
              { date: '2024-03-21', requestCount: 2 }
            ]}
          />
          <CodeSample code={`const availableDates = [
  { date: '2024-03-19', requestCount: 0 },
  { date: '2024-03-20', requestCount: 1 },
  { date: '2024-03-21', requestCount: 2 }
];

<PickupRequestForm
  onSubmit={async (data) => {
    console.log('Form submitted:', data);
    return { id: 'mock-id' };
  }}
  availableDates={availableDates}
/>`} />
        </div>
      )
    },
  // === Workflow Components ===
  {
    title: "Pickup Request Workflow",
    content: (
      <div className="space-y-4">
        <h3 className="heading-3">Pickup Request Workflow</h3>
        <PickupRequestManager
          pickupRequests={pickupRequests}
          onAcceptRequest={(id) => console.log('Accepted request:', id)}
          onRejectRequest={(id) => console.log('Rejected request:', id)}
          onUpdateStatus={(id, status) => console.log('Updated status:', id, status)}
          onSendMessage={(id, message) => console.log('Sent message:', id, message)}
        />
        <CodeSample code={`const pickupRequests = [
  {
    id: '1',
    items: [{
      id: 'item1',
      name: 'Vintage Chair',
      status: 'pending',
      imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
      description: 'Beautiful vintage chair',
      availableDates: [{ date: '2024-03-19', requestCount: 0 }],
      location: '123 Main St',
      pickupPhoto: 'https://example.com/photo.jpg',
      pickupDate: new Date(),
      pickupAddress: '123 Main St',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      messages: sampleMessages,
      address: '123 Main St'
    }],
    messages: sampleMessages,
    status: 'pending',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St',
    pickupPhoto: 'https://example.com/photo.jpg',
    pickupDate: new Date(),
    pickupAddress: '123 Main St'
  }
];

<PickupRequestManager
  pickupRequests={pickupRequests}
  onAcceptRequest={(id) => handleAccept(id)}
  onRejectRequest={(id) => handleReject(id)}
  onUpdateStatus={(id, status) => handleStatusUpdate(id, status)}
  onSendMessage={(id, message) => handleSendMessage(id, message)}
/>`} />
      </div>
    )
  },
    {
      title: "Driver Pickup Workflow",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Driver Pickup Workflow</h3>
          <DriverPickupWorkflow
            requests={driverWorkflowRequests}
            onUpdateItemStatus={(requestId, itemId, status) => 
              console.log('Status updated:', requestId, itemId, status)}
            onAddPhoto={(requestId, itemId, photo, note) => 
              console.log('Photo added:', requestId, itemId, photo, note)}
            onReschedule={(requestId, newDate) => 
              console.log('Rescheduled:', requestId, newDate)}
            onCompletePickup={(requestId) => 
              console.log('Pickup completed:', requestId)}
            onSendMessage={(requestId, message) => 
              console.log('Message sent:', requestId, message)}
            onMessageRead={(requestId, messageId) => 
              console.log('Message read:', requestId, messageId)}
            availableDates={['2024-03-19', '2024-03-20', '2024-03-21']}
          />
          <CodeSample code={`const acceptedRequests = [
  {
    id: '1',
    items: [],
    messages: [],
    status: 'pending',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St'
  }
];

<DriverPickupWorkflow
  requests={acceptedRequests}
  onUpdateItemStatus={(requestId, itemId, status) => handleStatusUpdate(requestId, itemId, status)}
  onAddPhoto={(requestId, itemId, photo, note) => handlePhotoUpload(requestId, itemId, photo, note)}
  onReschedule={(requestId, newDate) => handleReschedule(requestId, newDate)}
  onCompletePickup={(requestId) => handleCompletePickup(requestId)}
  onSendMessage={(requestId, message) => handleSendMessage(requestId, message)}
  onMessageRead={(requestId, messageId) => handleMessageRead(requestId, messageId)}
  availableDates={['2024-03-19', '2024-03-20', '2024-03-21']}
/>`} />
        </div>
      )
    },
    {
      title: "Listing Workflow",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Listing Workflow</h3>
          
          <ListingWorkflow
            items={[
              {
                id: '1',
                productId: 'PROD-001',
                pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupDescription: 'Vintage wooden chair in good condition',
                receivedDate: new Date(),
                status: 'in_inventory',
                customerName: 'John Doe'
              }
            ]}
            onUpdateDetails={(itemId, details) => console.log('Details updated:', itemId, details)}
            onUpdateStatus={(itemId, status) => console.log('Status updated:', itemId, status)}
            onSaveDraft={(itemId, details) => console.log('Draft saved:', itemId, details)}
          />
          <CodeSample code={`const inventoryItems = [
    {
      id: '1',
      productId: 'PROD-001',
      pickupPhoto: '/path/to/photo.jpg',
      pickupDescription: 'Vintage chair',
      receivedDate: new Date(),
      status: 'in_inventory',
      customerName: 'John Doe'
    }
  ];

  <InventoryItemProcessing
    items={inventoryItems}
    onUpdateDetails={(itemId, details) => handleDetailsUpdate(itemId, details)}
    onUpdateStatus={(itemId, status) => handleStatusUpdate(itemId, status)}
    onSaveDraft={(itemId, details) => handleSaveDraft(itemId, details)}
  />`} />
        </div>
      )
    },
    {
      title: "Receiving Workflow",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Receiving Workflow</h3>
          
          <ReceivingWorkflow
            items={[
              {
                id: '1',
                name: 'Vintage Chair',
                description: 'Mid-century modern chair',
                status: 'pending',
                imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupDate: new Date(),
                pickupAddress: '123 Main St',
                items: [],
                messages: [],
                customerName: 'John Doe',
                customerEmail: 'john@example.com',
                customerPhone: '555-0123',
                address: '123 Main St',
              }
            ]}
            onReceiveItem={(id) => console.log('Received:', id)}
            onRejectItem={(id) => console.log('Rejected:', id)}
            onUpdateStatus={(id, status) => console.log('Status updated:', id, status)}
            onUpdateDetails={(id, details) => console.log('Details updated:', id, details)}
            onAddProcessingPhotos={(id, photos) => console.log('Photos added:', id, photos)}
          />
        </div>
      )
    },
    {
      title: "Bulk Partner Pickup Request Form",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Bulk Partner Pickup Request Form</h3>
          <BulkPartnerPickupRequestForm />
        </div>
      )
    },
    {
      title: "Search Input",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Search Input</h3>
          <div className="space-y-6">
            <SearchInput
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search items..."
            />
          </div>
          <CodeSample code={`<SearchInput
  value={searchValue}
  onChange={setSearchValue}
  placeholder="Search items..."
/>`} />
        </div>
      )
    },
    {
      title: "Logistics Calendar",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Logistics Calendar</h3>
          <LogisticsCalendar
            onDateSelect={(date) => console.log('Selected date:', date)}
            onTimeSelect={(time) => console.log('Selected time:', time)}
            selectedDate={new Date().toISOString().split('T')[0]}
            selectedTime="09:00"
            calendarData={logisticsCalendarData}
          />
          <CodeSample code={`const logisticsCalendarData = [
  {
    date: new Date().toISOString().split('T')[0], // Today
    timeSlots: [
      { time: '09:00', availableDrivers: 3, pickupCount: 2, dropoffCount: 1 },
      { time: '10:00', availableDrivers: 2, pickupCount: 1, dropoffCount: 2 },
      { time: '11:00', availableDrivers: 4, pickupCount: 0, dropoffCount: 1 },
      { time: '12:00', availableDrivers: 3, pickupCount: 2, dropoffCount: 1 },
      { time: '13:00', availableDrivers: 2, pickupCount: 1, dropoffCount: 2 },
      { time: '14:00', availableDrivers: 4, pickupCount: 0, dropoffCount: 1 },
      { time: '15:00', availableDrivers: 3, pickupCount: 2, dropoffCount: 1 },
      { time: '16:00', availableDrivers: 2, pickupCount: 1, dropoffCount: 2 },
      { time: '17:00', availableDrivers: 4, pickupCount: 0, dropoffCount: 1 }
    ],
    totalPickups: 10,
    totalDropoffs: 4,
    availableDrivers: 5
  },
  {
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    timeSlots: [
      { time: '09:00', availableDrivers: 2, pickupCount: 1, dropoffCount: 2 },
      { time: '10:00', availableDrivers: 3, pickupCount: 2, dropoffCount: 1 },
      { time: '14:00', availableDrivers: 4, pickupCount: 1, dropoffCount: 3 },
      { time: '15:00', availableDrivers: 3, pickupCount: 2, dropoffCount: 1 },
      { time: '16:00', availableDrivers: 2, pickupCount: 1, dropoffCount: 2 },
      { time: '17:00', availableDrivers: 4, pickupCount: 0, dropoffCount: 1 }
    ],
    totalPickups: 8,
    totalDropoffs: 6,
    availableDrivers: 6
  }
];

<LogisticsCalendar
  onDateSelect={(date) => handleDateSelect(date)}
  onTimeSelect={(time) => handleTimeSelect(time)}
  selectedDate={selectedDate}
  selectedTime={selectedTime}
  calendarData={logisticsCalendarData}
/>`} />
        </div>
      )
    },
    {
      title: "Drop-off Request Manager",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Drop-off Request Manager</h3>
          <DropoffRequestManager
            dropoffRequests={mockDropoffRequests}
            onApproveRequest={(id) => console.log('Approve:', id)}
            onRejectRequest={(id) => console.log('Reject:', id)}
            onUpdateStatus={(id, status) => console.log('Status:', id, status)}
            onSendMessage={(id, message) => console.log('Message:', id, message)}
            onUpdateQuantity={(requestId, itemId, quantity) => 
              console.log('Update quantity:', requestId, itemId, quantity)
            }
          />
        </div>
      )
    }
  ];

  const documentationItems = [
    {
      title: "CustomButton",
      documentation: {
        description: "A versatile button component that supports multiple variants, sizes, and states.",
        props: [
          {
            name: "variant",
            type: "'primary' | 'secondary' | 'cta'",
            description: "Determines the button's visual style",
            required: false
          },
          {
            name: "size",
            type: "'sm' | 'md' | 'lg'",
            description: "Controls the button's size",
            required: false
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the button when true",
            required: false
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<CustomButton variant="primary" size="md">
  Click Me
</CustomButton>`
          }
        ]
      }
    },
    {
      title: "FormInput",
      documentation: {
        description: "A form input component with support for various states and validation.",
        props: [
          {
            name: "label",
            type: "string",
            description: "Input label text",
            required: true
          },
          {
            name: "state",
            type: "'normal' | 'completed' | 'error' | 'required' | 'blankRequired'",
            description: "Current input state",
            required: false
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<FormInput
  label="Email"
  value={email}
  onChange={setEmail}
  state="required"
/>`
          }
        ]
      }
    },
    {
      title: "Tag",
      documentation: {
        description: "A tag component for displaying labels with optional delete functionality.",
        props: [
          {
            name: "text",
            type: "string",
            description: "The text to display in the tag",
            required: true
          },
          {
            name: "variant",
            type: "'primary' | 'secondary' | 'cta'",
            description: "Visual style variant of the tag",
            required: false
          },
          {
            name: "onDelete",
            type: "() => void",
            description: "Callback function when delete button is clicked",
            required: false
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<Tag text="React" onDelete={() => handleDelete()} />`
          }
        ]
      }
    },
    {
      title: "Progress",
      documentation: {
        description: "A step progress indicator for multi-step workflows.",
        props: [
          {
            name: "steps",
            type: "string[]",
            description: "Array of step labels",
            required: true
          },
          {
            name: "currentStep",
            type: "number",
            description: "Current active step (1-based index)",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `const steps = ['Profile', 'Address', 'Payment', 'Review'];
<Progress steps={steps} currentStep={2} />`
          }
        ]
      }
    },
    {
      title: "MessageBubble",
      documentation: {
        description: "A chat message bubble component with different states.",
        props: [
          {
            name: "state",
            type: "'primary' | 'secondary' | 'tertiary'",
            description: "Visual style of the message bubble",
            required: true
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "Content to display inside the bubble",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<MessageBubble state="primary">Hello, how can I help?</MessageBubble>`
          }
        ]
      }
    },
    {
      title: "SwipeCardDeck",
      documentation: {
        description: "A swipeable card deck component for interactive decision making.",
        props: [
          {
            name: "cards",
            type: "Array<{ id: number; imageUrl: string; alt: string; content: React.ReactNode }>",
            description: "Array of card data to display",
            required: true
          },
          {
            name: "onSwipeLeft",
            type: "(card: Card) => void",
            description: "Callback when card is swiped left",
            required: true
          },
          {
            name: "onSwipeRight",
            type: "(card: Card) => void",
            description: "Callback when card is swiped right",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<SwipeCardDeck
  cards={cards}
  onSwipeLeft={(card) => handleReject(card)}
  onSwipeRight={(card) => handleApprove(card)}
  onEmpty={() => handleEmptyDeck()}
/>`
          }
        ]
      }
    },
    {
      title: "ShoppingCart",
      documentation: {
        description: "A shopping cart component for e-commerce applications.",
        props: [
          {
            name: "items",
            type: "Array<{ id: string; name: string; price: number; imageUrl: string }>",
            description: "Array of items in the cart",
            required: true
          },
          {
            name: "onRemoveItem",
            type: "(id: string) => void",
            description: "Callback when removing an item",
            required: true
          },
          {
            name: "onCheckout",
            type: "() => void",
            description: "Callback when checkout button is clicked",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<ShoppingCart
  items={cartItems}
  onRemoveItem={(id) => handleRemoveItem(id)}
  onCheckout={() => handleCheckout()}
/>`
          }
        ]
      }
    },
    {
      title: "PickupRequestManager",
      documentation: {
        description: "A component for managing pickup requests and their workflow states.",
        props: [
          {
            name: "pickupRequests",
            type: "Array<PickupRequest>",
            description: "Array of pickup requests to manage",
            required: true
          },
          {
            name: "onAcceptRequest",
            type: "(id: string) => void",
            description: "Callback when a request is accepted",
            required: true
          },
          {
            name: "onRejectRequest",
            type: "(id: string) => void",
            description: "Callback when a request is rejected",
            required: true
          },
          {
            name: "onUpdateStatus",
            type: "(id: string, status: RequestStatus) => void",
            description: "Callback when request status is updated",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<PickupRequestManager
  pickupRequests={requests}
  onAcceptRequest={handleAccept}
  onRejectRequest={handleReject}
  onUpdateStatus={handleStatusUpdate}
/>`
          }
        ]
      }
    },
    {
      title: "DriverPickupWorkflow",
      documentation: {
        description: "A workflow component for drivers to manage pickup processes.",
        props: [
          {
            name: "requests",
            type: "Array<AcceptedRequest>",
            description: "Array of accepted pickup requests",
            required: true
          },
          {
            name: "onUpdateItemStatus",
            type: "(requestId: string, itemId: string, status: string) => void",
            description: "Callback when item status is updated",
            required: true
          },
          {
            name: "onAddPhoto",
            type: "(requestId: string, itemId: string, photo: File, note?: string) => void",
            description: "Callback when verification photo is added",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<DriverPickupWorkflow
  requests={acceptedRequests}
  onUpdateItemStatus={handleStatusUpdate}
  onAddPhoto={handlePhotoUpload}
  onReschedule={handleReschedule}
/>`
          }
        ]
      }
    },
    {
      title: "ListingWorkflow",
      documentation: {
        description: "A workflow component for creating and managing product listings.",
        props: [
          {
            name: "items",
            type: "Array<InventoryItem>",
            description: "Array of items to be listed",
            required: true
          },
          {
            name: "onUpdateDetails",
            type: "(itemId: string, details: object) => void",
            description: "Callback when item details are updated",
            required: true
          },
          {
            name: "onUpdateStatus",
            type: "(itemId: string, status: string) => void",
            description: "Callback when item status changes",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<ListingWorkflow
  items={inventoryItems}
  onUpdateDetails={handleDetailsUpdate}
  onUpdateStatus={handleStatusUpdate}
  onSaveDraft={handleSaveDraft}
/>`
          }
        ]
      }
    },
    {
      title: "ReceivingWorkflow",
      documentation: {
        description: "A workflow component for receiving and processing incoming items.",
        props: [
          {
            name: "items",
            type: "Array<PickupItem>",
            description: "Array of items to be received",
            required: true
          },
          {
            name: "onReceiveItem",
            type: "(id: string) => void",
            description: "Callback when item is received",
            required: true
          },
          {
            name: "onRejectItem",
            type: "(id: string) => void",
            description: "Callback when item is rejected",
            required: true
          }
        ],
        examples: [
          {
            title: "Basic Usage",
            code: `<ReceivingWorkflow
  items={receivingItems}
  onReceiveItem={handleReceive}
  onRejectItem={handleReject}
  onUpdateStatus={handleStatusUpdate}
/>`
          }
        ]
      }
    }
  ];

  return (
    <Page>
      <Header 
        menuItems={menuItems} 
        logo={{
          src: Logo,
          alt: "Gone Logo",
          width: 300,
          height: 75,
          href: "https://gone.com"
        }} 
      />
      
      {/* Add id="components" to the main showcase section */}
      <main id="components" className="flex-grow w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {[...newContentItems, ...contentItems].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col">
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Add id="documentation" to the Documentation Section */}
      <div id="documentation">
        <DocumentationSection contentItems={documentationItems} />
      </div>

      {/* Add id="pages" to the Pages Section */}
      <div id="pages" className="w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="heading-2 mb-6">Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/landing" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              Landing Page
            </a>
            <a href="/giverform" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              Giver Form
            </a>
            <a href="/inventory" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              Inventory
            </a>
          </div>
        </div>
      </div>

      <Footer copyrightText="© 2024 gone.com Component Library. All rights reserved." />
    </Page>
  );
};

export default ComponentShowcase;