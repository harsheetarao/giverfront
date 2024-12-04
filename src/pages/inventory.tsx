import React from 'react';
import { Page } from '@/components/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Logo from '@/styles/ui/logos/gone.svg';

const InventoryPage = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' }
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

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Inventory Management
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Coming soon...
          </p>
        </div>
      </div>

      <Footer 
        copyrightText="© 2024 gone.com. All rights reserved."
        additionalContent={
          <div className="text-center text-sm mt-2">
            <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
            <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
          </div>
        }
      />
    </Page>
  );
};

export default InventoryPage; 