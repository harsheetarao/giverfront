import React, { useState } from 'react';
import { Page } from '@/components/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ListingWorkflow } from '@/components/ListingWorkflow';
import { Package, DollarSign, BarChart, Search, Filter, ArrowUpDown, Truck, PackageOpen, Tag, BarChart2, PackageCheck } from 'lucide-react';
import { FormInput } from '@/components/FormInput';
import { CustomButton } from '@/components/CustomButton';
import Logo from '@/styles/ui/logos/gone.svg';
import { SearchInput } from '@/components/SearchInput';
import { cn } from '@/lib/utils';
import { PickupRequestManager } from '@/components/PickupRequestManager';
import { LogisticsCalendar, type DayDetails } from '@/components/LogisticsCalendar';

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_inventory' | 'ready_for_sale'>('all');
  const [activeTab, setActiveTab] = useState('inventory');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

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

  const tabs = [
    {
      id: 'pickups',
      label: 'Pickup Requests',
      icon: Truck,
      description: 'Manage incoming pickup requests'
    },
    {
      id: 'dropoffs',
      label: 'Drop-offs',
      icon: PackageCheck,
      description: 'Manage partner drop-offs'
    },
    {
      id: 'receiving',
      label: 'Receiving',
      icon: Package,
      description: 'Process and accept incoming items'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: PackageOpen,
      description: 'Manage warehouse inventory'
    },
    {
      id: 'listings',
      label: 'Listings',
      icon: Tag,
      description: 'Create and manage listings'
    },
    {
      id: 'sales',
      label: 'Sales',
      icon: BarChart2,
      description: 'Track sales and performance'
    }
  ];

  // Add mock data for pickup requests
  const mockPickupRequests = [
    {
      id: '1',
      items: [{
        id: 'item1',
        name: 'Vintage Chair',
        status: 'pending' as const,
        imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
        description: 'Beautiful vintage chair in good condition',
        availableDates: [{ date: '2024-03-19', requestCount: 1 }],
        location: 'Seattle, WA',
        pickupPhoto: 'https://example.com/photo.jpg',
        pickupDate: new Date(),
        pickupAddress: '123 Main St',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerPhone: '555-0123',
        messages: [],
        address: '123 Main St'
      }],
      messages: [],
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

  // Change the mock data name
  const mockLogisticsData: DayDetails[] = [
    {
      date: new Date().toISOString().split('T')[0],
      timeSlots: [
        {
          time: '09:00',
          availableDrivers: 3,
          pickupCount: 2,
          dropoffCount: 1,
          pickups: [
            {
              id: '1',
              customerName: 'John Smith',
              address: '123 Pine St, Seattle, WA',
              items: [
                {
                  id: 'p1',
                  name: 'Vintage Sofa',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Mid-century modern sofa in excellent condition'
                }
              ]
            },
            {
              id: '2',
              customerName: 'Sarah Wilson',
              address: '456 Oak Ave, Seattle, WA',
              items: [
                {
                  id: 'p2',
                  name: 'Dining Set',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Table with 6 chairs'
                }
              ]
            }
          ],
          dropoffs: [
            {
              id: '3',
              customerName: 'Mike Johnson',
              address: '789 Maple Dr, Seattle, WA',
              items: [
                {
                  id: 'd1',
                  name: 'Bookshelf',
                  imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
                  description: 'Tall wooden bookshelf'
                }
              ]
            }
          ]
        },
        {
          time: '14:00',
          availableDrivers: 4,
          pickupCount: 1,
          dropoffCount: 2,
          pickups: [/* Similar structure */],
          dropoffs: [/* Similar structure */]
        }
      ],
      totalPickups: 3,
      totalDropoffs: 3,
      availableDrivers: 5
    }
  ];

  // Use it to initialize state
  const [logisticsCalendarData, setLogisticsCalendarData] = useState<DayDetails[]>(mockLogisticsData);

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
              <div className="flex flex-col gap-6">
                {/* Search Row */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="flex-1 w-full md:w-auto">
                    <SearchInput
                      value={searchTerm}
                      onChange={setSearchTerm}
                      placeholder="Search inventory..."
                      onSearch={() => console.log('Search:', searchTerm)}
                      onFilter={() => console.log('Filter clicked')}
                    />
                  </div>
                </div>

                {/* Logistics Calendar Row */}
                <div className="w-full">
                  <LogisticsCalendar
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onDateSelect={setSelectedDate}
                    onTimeSelect={setSelectedTime}
                    calendarData={logisticsCalendarData}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-4 border-b-2 whitespace-nowrap",
                      activeTab === tab.id
                        ? "border-[#4B7163] text-[#4B7163]"
                        : "border-transparent text-gray-500 hover:text-[#4B7163] hover:border-[#4B7163]/30"
                    )}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              {activeTab === 'pickups' && (
                <PickupRequestManager
                  pickupRequests={mockPickupRequests}
                  onAcceptRequest={(id) => console.log('Accept:', id)}
                  onRejectRequest={(id) => console.log('Reject:', id)}
                  onUpdateStatus={(id, status) => console.log('Update status:', id, status)}
                  onSendMessage={(id, message) => console.log('Send message:', id, message)}
                  className="bg-white shadow-xl rounded-xl p-6"
                />
              )}
              {activeTab === 'inventory' && (
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
                  className="bg-white shadow-xl rounded-xl p-6"
                />
              )}
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