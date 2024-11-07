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
      title: "Modal Component",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Modal Component</h3>
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
                  This is an example of our reusable modal component. It can be used for various purposes like confirmations, forms, or detailed information display.
                </p>
                <div className="flex justify-end">
                  <CustomButton onClick={() => setShowDemoModal(false)}>
                    Close Modal
                  </CustomButton>
                </div>
              </div>
            </Modal>
          )}
        </div>
      )
    },
    {
      title: "Message Thread",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Message Thread Component</h3>
          
          <MessageThread
            messages={sampleMessages}
            onSendMessage={(message) => console.log('New message:', message)}
            onMessageRead={(messageId) => console.log('Message read:', messageId)}
            className="border border-gray-200"
          />
        </div>
      )
    },
    {
      title: "Map Modal",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Map Modal Component</h3>
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
    {
      title: "Cards Example",
      content: (
        <Card imageUrl="https://gone.com/assets/img/photo1.webp" alt="Example card">
          <h3 className="heading-3">Card Component</h3>
          <p>Example of our card component with image and content.</p>
        </Card>
      )
    },
    {
      title: "Product Cards",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Product Card Component</h3>
          
          {/* Changed to vertical layout with full width cards */}
          <div className="flex flex-col gap-8">
            <ProductCard
              imageUrl="https://assets.wfcdn.com/im/29927673/resize-h500-w500%5Ecompr-r85/2649/264941059/default_name.jpg"
              title="Ergonomic Office Chair"
              category="Office Furniture"
              description="High-quality ergonomic office chair with lumbar support, adjustable height, and breathable mesh back for maximum comfort during long work hours."
              price={299.99}
              attributes={[
                "Ergonomic",
                "Adjustable",
                "Mesh Back",
                "5-Year Warranty"
              ]}
              onAddToCart={() => console.log('Added to cart')}
              className="w-full max-w-none" // Remove max-width constraint
            />
          </div>
        </div>
      )
    },
    {
      title: "Shopping Cart",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Shopping Cart</h3>
          
          <ShoppingCart
            items={[
              {
                id: '1',
                name: 'Victorian Mahogany Sideboard',
                description: 'Circa 1860, beautiful carved details, original brass hardware, excellent condition',
                price: 2499.99,
                imageUrl: 'https://assets.wfcdn.com/im/08420312/resize-h500-w500%5Ecompr-r85/1221/122147167/67%27%27+Solid+Wood+Sideboard.jpg'
              },
              {
                id: '2',
                name: 'Art Deco Crystal Chandelier',
                description: 'Original 1920s, restored wiring, pristine crystals, statement piece',
                price: 3899.99,
                imageUrl: 'https://assets.wfcdn.com/im/51641869/resize-h500-w500%5Ecompr-r85/2286/228662642/Imma+Crystal+Empire+Chandelier+with+Crystal+Accents.jpg'
              },
              {
                id: '3',
                name: 'Chinese Qing Dynasty Vase',
                description: '19th century, blue and white porcelain, perfect condition, museum quality',
                price: 5899.99,
                imageUrl: 'https://assets.wfcdn.com/im/50716500/resize-h500-w500%5Ecompr-r85/1283/128302625/Handmade+Ceramic+%2F+Porcelain+Table+Vase.jpg'
              }
            ]}
            onRemoveItem={(itemId) => 
              console.log('Remove item:', itemId)
            }
            onCheckout={() => 
              console.log('Proceed to checkout')
            }
          />
        </div>
      )
    },
    {
      title: "Pickup Request Form",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Pickup Request Form</h3>
          
          <PickupRequestForm
            onSubmit={(data) => {
              console.log('Form submitted:', data);
            }}
          />
        </div>
      )
    },
    {
      title: "Pickup Request Manager",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Pickup Request Management</h3>
          
          <PickupRequestManager
            requests={pickupRequests}
            onAcceptItem={(requestId, itemId) => console.log('Accept:', requestId, itemId)}
            onRejectItem={(requestId, itemId) => console.log('Reject:', requestId, itemId)}
            onSendMessage={(requestId, message) => console.log('Message:', requestId, message)}
            onMessageRead={(requestId, messageId) => console.log('Read:', requestId, messageId)}
            className="w-full"
          />
        </div>
      )
    },
    {
      title: "Tags",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Tag Components</h3>
          
          {/* Primary Tags */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Primary Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Tag 
                text="Active Tag" 
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Long Tag Name That Should Truncate" 
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Read Only Tag" 
              />
            </div>
          </div>
    
          {/* CTA Tags */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">CTA Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Tag 
                text="Active Tag" 
                variant="cta"
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Long Tag Name That Should Truncate" 
                variant="cta"
                onDelete={() => console.log('Delete clicked')}
              />
              <Tag 
                text="Read Only Tag" 
                variant="cta"
              />
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
      title: "Button Variants",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Button Components</h3>
          
          {/* Primary Buttons */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">Primary</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" size="sm">
                Small Primary
              </CustomButton>
              <CustomButton variant="primary">
                Default Primary
              </CustomButton>
              <CustomButton variant="primary" size="lg">
                Large Primary
              </CustomButton>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-600">CTA</h4>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="cta" size="sm">
                Small CTA
              </CustomButton>
              <CustomButton variant="cta">
                Default CTA
              </CustomButton>
              <CustomButton variant="cta" size="lg">
                Large CTA
              </CustomButton>
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
          </div>
        </div>
      )
    },
    {
      title: "Form Components",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Form Components</h3>
    
          {/* Text Fields */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-gray-600">Text Fields</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Normal Input"
                placeholder="Enter text here"
                value=""
                hint="This is a normal text input"
                state="normal"
                onChange={(value) => console.log(value)}
              />
              <FormInput
                label="Completed Input"
                placeholder="Enter text here"
                value="Completed value"
                hint="This input has been completed"
                state="completed"
                onChange={(value) => console.log(value)}              />
              <FormInput
                label="Error Input"
                placeholder="Enter text here"
                value="Invalid value"
                hint="This input has an error"
                state="error"
                onChange={(value) => console.log(value)}              />
              <FormInput
                label="Required Input"
                placeholder="Enter text here"
                value=""
                hint="This input is required"
                state="required"
                onChange={(value) => console.log(value)}              />
              <FormInput
                label="Blank Required Input"
                placeholder="Enter text here"
                value=""
                hint="This required input is blank"
                state="blankRequired"
                onChange={(value) => console.log(value)}              />
              <FormInput
                label="Disabled Input"
                placeholder="Enter text here"
                value=""
                hint="This input is disabled"
                disabled
                onChange={(value) => console.log(value)}              />
            </div>
          </div>
    
          {/* Dropdowns */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-gray-600">Dropdowns</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormDropdown
                label="Normal Dropdown"
                hint="This is a normal dropdown"
                state="normal"
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
              <FormDropdown
                label="Completed Dropdown"
                hint="This dropdown has a selection"
                state="completed"
                value="1"
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
              <FormDropdown
                label="Error Dropdown"
                hint="This dropdown has an error"
                state="error"
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
              <FormDropdown
                label="Required Dropdown"
                hint="This dropdown is required"
                state="required"
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
              <FormDropdown
                label="Blank Required Dropdown"
                hint="This required dropdown is blank"
                state="blankRequired"
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
              <FormDropdown
                label="Disabled Dropdown"
                hint="This dropdown is disabled"
                disabled
                options={[
                  { value: '', label: 'Select an option' },
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Progress Example",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Progress Component</h3>
          <Progress steps={steps} currentStep={currentStep} />
          <div className="flex gap-2">
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
            </CustomButton>
          </div>
        </div>
      )
    },
    {
      title: "Toggle Switches",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Toggle Components</h3>
          
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
          <h3 className="heading-3">Message Bubble Components</h3>
          <MessageBubble state="primary">
            Primary message bubble
          </MessageBubble>
          <MessageBubble state="secondary">
            Secondary message bubble
          </MessageBubble>
          <MessageBubble state="tertiary">
            Tertiary message bubble
          </MessageBubble>
        </div>
      )
    },

    {
      title: "Swipe Cards Example",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Swipe Card Component</h3>
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
        </div>
      )
    },
    {
      title: "Dashboard",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Dashboard Component</h3>
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
        </div>
      )
    },
    {
      title: "Accepted Request Manager",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Accepted Request Manager</h3>
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
        </div>
      )
    },
    {
      title: "Inventory Processing",
      content: (
        <div className="space-y-6">
          <h3 className="heading-3">Inventory Processing Component</h3>
          
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
          <h3 className="heading-3">Image Upload Component</h3>
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
          <h3 className="heading-3">Pickup Item Queue</h3>
        <PickupItemQueue
          items={[
            {
              id: '1',
              name: 'Vintage Desk',
              description: 'Mid-century modern desk in walnut finish',
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
          <h3 className="heading-3">Inventory Item Processing</h3>
          
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
      <h3 className="heading-3">Pickup List Component</h3>
      
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
          <h3 className="heading-3">Receiving Component</h3>
          
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
      title: "Regular Pickup Request Form",
      content: (
        <div className="space-y-4">
          <h3 className="heading-3">Regular Pickup Request Form</h3>
          <PickupRequestForm 
            onSubmit={(data) => {
              console.log('Regular form submitted:', data);
            }}
          />
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

      <Footer />
    </Page>
  );
};

export default ComponentShowcase;