'use client';

import React, { useState } from 'react';
import NextImage from 'next/image'; 
import { Menu } from 'lucide-react';
import { Button } from "@/components/button";
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

import Logo from '@/styles/ui/logos/gone.svg';

const ComponentShowcase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const menuItems = ['Components', 'Documentation', 'Examples', 'Github'];
  const steps = ['Profile', 'Address', 'Payment', 'Review'];

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
            customerName="John Smith"
            customerEmail="john.smith@example.com"
            customerPhone="(555) 123-4567"
            items={[
              {
                id: '1',
                imageUrl: 'https://assets.wfcdn.com/im/08459533/resize-h500-w500%5Ecompr-r85/2305/230541502/default_name.jpg',
                description: 'Brown leather sofa in good condition. Minor wear on armrests.',
                location: '5522 SE Alameda Ave., Yarrow Gulch, WA',
                availableDates: ['Mon 2/12 PM', 'Wed 2/14 AM', 'Fri 2/16 PM']
              },
              {
                id: '2',
                imageUrl: 'https://assets.wfcdn.com/im/42307461/resize-h500-w500%5Ecompr-r85/2351/235194307/Lashbrook+7+-+Piece+Dining+Set.jpg',
                description: 'Wooden dining table with 6 chairs. All pieces intact.',
                location: '5522 SE Alameda Ave., Yarrow Gulch, WA',
                availableDates: ['Tue 2/13 AM', 'Thu 2/15 PM', 'Sat 2/17 AM']
              },
              {
                id: '3',
                imageUrl: 'https://assets.wfcdn.com/im/18394722/resize-h500-w500%5Ecompr-r85/2636/263626880/default_name.jpg',
                description: 'Queen size mattress and box spring. 2 years old.',
                location: '5522 SE Alameda Ave., Yarrow Gulch, WA',
                availableDates: ['Mon 2/12 AM', 'Wed 2/14 PM', 'Fri 2/16 AM']
              }
            ]}
            onAcceptItem={(id) => console.log('Accepted item:', id)}
            onRejectItem={(id) => console.log('Rejected item:', id)}
            onSendMessage={(message) => console.log('Sending message:', message)}
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
                hint="This is a normal text input"
                state="normal"
              />
              <FormInput
                label="Completed Input"
                placeholder="Enter text here"
                value="Completed value"
                hint="This input has been completed"
                state="completed"
              />
              <FormInput
                label="Error Input"
                placeholder="Enter text here"
                value="Invalid value"
                hint="This input has an error"
                state="error"
              />
              <FormInput
                label="Required Input"
                placeholder="Enter text here"
                hint="This input is required"
                state="required"
              />
              <FormInput
                label="Blank Required Input"
                placeholder="Enter text here"
                hint="This required input is blank"
                state="blankRequired"
              />
              <FormInput
                label="Disabled Input"
                placeholder="Enter text here"
                hint="This input is disabled"
                disabled
              />
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
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <NextImage
                src={Logo}
                alt="Gone Logo"
                width={300}  // Adjust these values based on the actual logo size
                height={75}  // Adjust these values based on the actual logo size
                className="h-16 w-auto"  // This maintains aspect ratio while fitting in header
                priority  // This ensures the logo loads quickly as it's above the fold
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-[#5a8575]"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[80%] sm:w-[400px] bg-[#4B7163] border-l-white/20"
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    {menuItems.map((item) => (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="text-white text-lg hover:text-white/80 transition-colors p-2"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Responsive Grid */}
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

      {/* Footer */}
      <footer className="w-full bg-[#4B7163] text-white py-6 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">© 2024 gone.com Component Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ComponentShowcase;