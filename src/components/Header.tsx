'use client';

import React from 'react';
import NextImage from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from "@/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";

export type MenuItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  menuItems: MenuItem[];
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const Header: React.FC<HeaderProps> = ({ menuItems, logo }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#4B7163] text-white shadow-lg">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            {logo && (
              <NextImage
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 300}
                height={logo.height || 75}
                className="h-16 w-auto"
                priority
              />
            )}
          </div>

          {/* Mobile Menu */}
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
                      key={item.label} 
                      href={item.href} 
                      className="text-white text-lg hover:text-white/80 transition-colors p-2"
                    >
                      {item.label}
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
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}; 