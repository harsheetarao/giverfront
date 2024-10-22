'use client';

import React, { useState } from 'react';
import NextImage from 'next/image'; 
import { Menu } from 'lucide-react';
import { Button } from "@/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";
import { Card } from "@/components/Card";
import { CustomButton } from "@/components/CustomButton";
import { Progress } from "@/components/Progress";
import { MessageBubble } from "@/components/MessageBubble";

const ComponentShowcase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const menuItems = ['Components', 'Documentation', 'Examples', 'Github'];
  const steps = ['Profile', 'Address', 'Payment', 'Review'];

  const contentItems = [
    {
      title: "Cards Example",
      content: (
        <Card imageUrl="https://gone.com/assets/img/photo1.webp" alt="Example card">
          <h3 className="text-xl font-bold mb-2">Card Component</h3>
          <p>Example of our card component with image and content.</p>
        </Card>
      )
    },
    {
      title: "Buttons Example",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Button Components</h3>
          <div className="space-y-2">
            <CustomButton onClick={() => console.log('clicked')}>
              Primary Button
            </CustomButton>
          </div>
        </div>
      )
    },
    {
      title: "Progress Example",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Progress Component</h3>
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
      title: "Message Bubbles Example",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Message Bubble Components</h3>
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
                src="https://gone.com/assets/img/logo.png"
                alt="Gone Logo"
                width={100}  // Adjust these values based on the actual logo size
                height={40}  // Adjust these values based on the actual logo size
                className="h-8 w-auto"  // This maintains aspect ratio while fitting in header
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