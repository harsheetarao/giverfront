import React, { useState } from 'react';
import { Page } from '@/components/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ListingWorkflow } from '@/components/ListingWorkflow';
import { Package, DollarSign, BarChart, Search, Filter, ArrowUpDown } from 'lucide-react';
import { FormInput } from '@/components/FormInput';
import { CustomButton } from '@/components/CustomButton';
import Logo from '@/styles/ui/logos/gone.svg';
import { SearchInput } from '@/components/SearchInput';

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_inventory' | 'ready_for_sale'>('all');

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Inventory', href: '/inventory' }
  ];

  const stats = [
    { value: "150+", label: "Items Listed", icon: Package },
    { value: "$25K", label: "Revenue Generated", icon: DollarSign },
    { value: "92%", label: "Sell-Through Rate", icon: BarChart }
  ];

  const mockItems = [
    {
      id: '1',
      productId: 'PRD001',
      pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
      pickupDescription: 'Vintage wooden chair in good condition',
      receivedDate: new Date(),
      status: 'in_inventory' as const,
      customerName: 'John Doe'
    },
    // Add more mock items...
  ];

  return (
    <Page className="flex flex-col min-h-screen">
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

      <main className="flex-grow">
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
          {/* Hero Section */}
          <div className="bg-[#4B7163] text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">
                Inventory Management
              </h1>
              <p className="text-green-100 text-lg">
                Process, track, and manage your inventory efficiently
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-12 bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#F8FAF9] p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <stat.icon className="w-8 h-8 text-[#4B7163]" />
                      <div>
                        <div className="text-3xl font-bold text-[#4B7163]">{stat.value}</div>
                        <div className="text-[#5A7C6F]">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="bg-white py-6 border-b">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full md:w-auto relative">
                  <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search inventory..."
                    className="w-full"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomButton
                    variant="secondary"
                    onClick={() => {}}
                    className="flex items-center gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filter
                  </CustomButton>
                  <CustomButton
                    variant="secondary"
                    onClick={() => {}}
                    className="flex items-center gap-2"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                    Sort
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>

          {/* ListingWorkflow Section */}
          <div className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <ListingWorkflow
                items={mockItems}
                onUpdateDetails={(itemId, details) => {
                  console.log('Update details:', itemId, details);
                }}
                onUpdateStatus={(itemId, status) => {
                  console.log('Update status:', itemId, status);
                }}
                onSaveDraft={(itemId, details) => {
                  console.log('Save draft:', itemId, details);
                }}
                className="bg-white shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </main>

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