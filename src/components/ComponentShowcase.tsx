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
import { Dashboard } from './Dashboard';
import { AcceptedRequestManager } from '@/components/AcceptedRequestManager';
import { MapModal } from '@/components/MapModal';
import { MapPin } from 'lucide-react';
import { InventoryProcessing } from '@/components/InventoryProcessing';
import { ImageUpload } from '@/components/ImageUpload';
import { PickupItemQueue } from '@/components/PickupItemQueue';
import { InventoryItemProcessing } from '@/components/InventoryItemProcessing';
import { ProcessingQueue } from '@/components/ProcessingQueue';
import { InventoryProcessingManager } from '@/components/InventoryProcessingManager';
import { PickupList } from '@/components/PickupList';
import { Receiving } from '@/components/Receiving';
import { PartnerPickupRequestForm } from '@/components/PartnerPickupRequestForm';
import { CodeSample } from '@/components/CodeSample';

import Logo from '@/styles/ui/logos/gone.svg';

import { Header } from './Header';
import { Footer } from './Footer';
import { Page } from './page';

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
  scheduledDate?: string;
  imageUrl: string;
  availableDates: Array<{
    date: string;
    requestCount: number;
  }>;
  location: string;
}

interface AcceptedRequest {
  id: string;
  items: AcceptedPickupItem[];
  messages: Message[];
  status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
}

// Add this interface near the other interfaces at the top of the file
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

const ComponentShowcase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const menuItems = [
    { label: 'Components', href: '#components' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Examples', href: '#examples' },
    { label: 'Github', href: 'https://github.com/Get-it-Gone/ComponentLibrary' }
  ];
  const steps = ['Profile', 'Address', 'Payment', 'Review'];

  // Add this sample data
  const pickupRequests = [
    {
      id: '1',
      items: [
        {
          id: 'item1',
          name: 'Vintage Chair',
          status: 'pending' as const,
          imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
          description: 'Beautiful vintage chair',
          availableDates: [{ 
            date: '2024-12-31',
            requestCount: 0 
          }],
          location: '123 Main St'
        }
      ],
      messages: [],
      status: 'pending' as const,
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St',
      pickupPhoto: '',
      pickupDate: new Date('2024-12-31'),
      pickupAddress: '123 Main St'
    }
  ];

  // Add near other mock data
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

  const acceptedRequests: AcceptedRequest[] = [
    {
      id: '1',
      items: [{
        id: 'item1',
        name: 'Vintage Chair',
        description: 'Beautiful vintage chair in excellent condition',
        status: 'pending',
        verificationPhotos: [{
          id: 'photo1',
          imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
          timestamp: new Date(),
          note: 'Front view'
        }],
        scheduledDate: '2024-03-20',
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        availableDates: [{
          date: '2024-03-19',
          requestCount: 0
        }],
        location: '123 Main St'
      }],
      messages: sampleMessages,
      status: 'pending',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St'
    }
  ];

  // Add this to your mock data section
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

  // Interactive example component
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

  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

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
          <h3 className="heading-3">Message Thread</h3>
          <MessageThread
            messages={sampleMessages}
            onSendMessage={(message) => console.log('New message:', message)}
            onMessageRead={(messageId) => console.log('Message read:', messageId)}
            className="border border-gray-200"
          />
          <CodeSample code={`const messages = [
  {
    id: '1',
    content: 'Hello!',
    timestamp: new Date(),
    isRead: true,
    sender: 'user'
  }
];

<MessageThread
  messages={messages}
  onSendMessage={(message) => handleNewMessage(message)}
  onMessageRead={(messageId) => handleMessageRead(messageId)}
  className="border border-gray-200"
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
          <Progress steps={steps} currentStep={currentStep} />
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

  // Pickup Request Flow
  {
    title: "Pickup Request Manager",
    content: (
      <div className="space-y-4">
        <h3 className="heading-3">Pickup Request Manager</h3>
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
    status: 'pending',
    items: [],
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St'
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
      title: "Dashboard",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Admin Dashboard</h3>
          <Dashboard
            pickupRequests={[
              {
                id: '1',
                status: 'pending',
                lastStatusChange: new Date(Date.now() - 3600000),
                messages: [
                  {
                    id: 'm1',
                    content: 'When can you pick up my items?',
                    timestamp: new Date(Date.now() - 7200000),
                    isRead: false,
                    sender: 'user'
                  }
                ]
              },
              {
                id: '2',
                status: 'completed',
                lastStatusChange: new Date(Date.now() - 7200000),
                messages: [
                  {
                    id: 'm2',
                    content: 'Your items have been picked up!',
                    timestamp: new Date(Date.now() - 3600000),
                    isRead: true,
                    sender: 'admin'
                  }
                ]
              }
            ]}
            acceptedRequests={acceptedRequests}
            availableDates={['2024-03-19', '2024-03-20', '2024-03-21']}
            onRequestClick={(requestId) => console.log('Clicked request:', requestId)}
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
          />
          <CodeSample code={`const dashboardData = {
  pickupRequests: [],
  acceptedRequests: [],
  availableDates: ['2024-03-19', '2024-03-20', '2024-03-21']
};

<Dashboard
  pickupRequests={dashboardData.pickupRequests}
  acceptedRequests={dashboardData.acceptedRequests}
  availableDates={dashboardData.availableDates}
  onRequestClick={(requestId) => handleRequestClick(requestId)}
  onUpdateItemStatus={(requestId, itemId, status) => handleStatusUpdate(requestId, itemId, status)}
  onAddPhoto={(requestId, itemId, photo, note) => handleAddPhoto(requestId, itemId, photo, note)}
  onReschedule={(requestId, newDate) => handleReschedule(requestId, newDate)}
  onCompletePickup={(requestId) => handleCompletePickup(requestId)}
  onSendMessage={(requestId, message) => handleSendMessage(requestId, message)}
  onMessageRead={(requestId, messageId) => handleMessageRead(requestId, messageId)}
/>`} />
        </div>
      )
    },
    {
      title: "Accepted Request Manager",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Pickups By Date</h3>
          <AcceptedRequestManager
            requests={acceptedRequests}
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

<AcceptedRequestManager
  requests={acceptedRequests}
  onUpdateItemStatus={(requestId, itemId, status) => handleStatusUpdate(requestId, itemId, status)}
  onAddPhoto={(requestId, itemId, photo, note) => handleAddPhoto(requestId, itemId, photo, note)}
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
      title: "Inventory Processing",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Recieving  Card</h3>
          
          <InventoryProcessing
            request={samplePickupRequest}
            onUpdateStatus={(status) => console.log('Status updated:', status)}
            onUpdateDetails={(details) => console.log('Details updated:', details)}
            onAddProcessingPhotos={(photos) => console.log('Photos added:', photos)}
            onConfirmReceipt={() => console.log('Receipt confirmed')}
          />
        </div>
      )
    },
    {
      title: "Image Upload",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Image Upload</h3>
          <ImageUpload 
            onUpload={(photos) => {
              console.log('Showcase ImageUpload - Received photos:', photos);
              // Add any showcase-specific handling here
            }}
            maxFiles={3}
          />
        </div>
      )
    },
    {
      title: "Pickup Item Queue",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Pickup Item Card</h3>
        <PickupItemQueue
          items={[
            {
              id: '1',
              name: 'Vintage Desk',
              description: 'Mid-century modern desk in walnut finish',
              imageUrl: 'https://example.com/desk.jpg',
              status: 'pending'
            },
            {
              id: '2',
              name: 'Other Name',
              description: 'Other Description',
              imageUrl: 'https://example.com/desk.jpg',
              status: 'pending'
            }
          ]}
          onReceiveItem={(id) => console.log('Received item:', id)}
          onRejectItem={(id) => console.log('Rejected item:', id)}
          onUpdateStatus={(id, status) => console.log('Status updated:', id, status)}
          onUpdateDetails={(id, details) => console.log('Details updated:', id, details)}
          onAddProcessingPhotos={(id, photos) => console.log('Photos added:', id, photos)}
          />
        </div>
      )
    },
    {
      title: "Inventory Item Processing",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Item Listing</h3>
          
          <InventoryItemProcessing
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
      title: "Inventory Processing Manager",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Inventory Processing Manager</h3>
          
          <InventoryProcessingManager
            items={[
              {
                id: '1',
                productId: 'PROD-001',
                pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupDescription: 'Vintage wooden chair in excellent condition',
                receivedDate: new Date(),
                customerName: 'John Doe'
              },
              {
                id: '2',
                productId: 'PROD-002',
                pickupPhoto: 'https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg',
                pickupDescription: 'Mid-century modern desk lamp, working condition',
                receivedDate: new Date(Date.now() - 86400000),
                customerName: 'Jane Smith'
              }
            ]}
            onUpdateDetails={(itemId, details) => console.log('Details updated:', itemId, details)}
            onUpdateStatus={(itemId, status) => console.log('Status updated:', itemId, status)}
            onSaveDraft={(itemId, details) => console.log('Draft saved:', itemId, details)}
            className="w-full"
          />
          <CodeSample code={`const items = [
    {
      id: '1',
      productId: 'PROD-001',
      pickupPhoto: '/path/to/photo.jpg',
      pickupDescription: 'Vintage chair',
      receivedDate: new Date(),
      customerName: 'John Doe'
    }
  ];

  <InventoryProcessingManager
    items={items}
    onUpdateDetails={(itemId, details) => handleDetailsUpdate(itemId, details)}
    onUpdateStatus={(itemId, status) => handleStatusUpdate(itemId, status)}
    onSaveDraft={(itemId, details) => handleSaveDraft(itemId, details)}
    className="w-full"
  />`} />
        </div>
      )
    },
    {
      title: "Processing Queue",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Processing Queue</h3>
          
          <ProcessingQueue
            items={[
              {
                id: '1',
                productId: 'PROD-001',
                pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupDescription: 'Vintage wooden chair in excellent condition',
                receivedDate: new Date(),
                customerName: 'John Doe'
              },
              {
                id: '2',
                productId: 'PROD-002',
                pickupPhoto: 'https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg',
                pickupDescription: 'Mid-century modern desk lamp, working condition',
                receivedDate: new Date(Date.now() - 86400000), // 1 day ago
                customerName: 'Jane Smith'
              }
            ]}
            onSelectItem={(itemId) => console.log('Selected item:', itemId)}
            className="w-full"
          />
        </div>
      )
    },
    // ... existing code ...
{
  title: "Pickup List",
  content: (
    <div className="space-y-4">
      <h3 className="heading-3">Pickup List</h3>
      
      <PickupList
        pickups={[
          {
            id: '1',
            status: 'pending',
            pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
            pickupDate: new Date('2024-03-20'),
            pickupAddress: '123 Main St',
            items: [],
            messages: [],
            customerName: 'John Doe',
            customerEmail: 'john@example.com',
            customerPhone: '555-0123',
            address: '123 Main St'
          },
          {
            id: '2',
            status: 'completed',
            pickupPhoto: 'https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg',
            pickupDate: new Date('2024-03-21'),
            pickupAddress: '456 Oak St',
            items: [],
            messages: [],
            customerName: 'Jane Smith',
            customerEmail: 'jane@example.com',
            customerPhone: '555-0124',
            address: '456 Oak St'
          }
        ]}
        onSelectPickup={(pickup: Pickup) => console.log('Selected pickup:', pickup)}
      />
    </div>
      )
    },
    {
      title: "Receiving",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Receiving</h3>
          
          <Receiving
            pickups={[
              {
                id: '1',
                status: 'pending',
                pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                pickupDate: new Date('2024-03-20'),
                pickupAddress: '123 Main St',
                items: [],
                messages: [],
                customerName: 'John Doe',
                customerEmail: 'john@example.com',
                customerPhone: '555-0123',
                address: '123 Main St'
              },
              {
                id: '2',
                status: 'completed',
                pickupPhoto: 'https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg',
                pickupDate: new Date('2024-03-21'),
                pickupAddress: '456 Oak St',
                items: [],
                messages: [],
                customerName: 'Jane Smith',
                customerEmail: 'jane@example.com',
                customerPhone: '555-0124',
                address: '456 Oak St'
              }
            ]}
          />
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
            onSubmit={(data) => console.log('Form submitted:', data)}
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
  onSubmit={(data) => handleFormSubmit(data)}
  availableDates={availableDates}
/>`} />
        </div>
      )
    },
    
    ...newContentItems
  ];

  return (
    <Page>
      <Header menuItems={menuItems} />
      
      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {contentItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow p-6 flex flex-col"
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer 
        copyrightText="© 2024 gone.com Component Library. All rights reserved."
        // optionally add additional content:
        // additionalContent={<div>Additional footer content</div>}
      />
    </Page>
  );
};

export default ComponentShowcase;