import React, { useState } from 'react';
import { Page } from '@/components/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ListingWorkflow } from '@/components/ListingWorkflow';
import { Package, DollarSign, BarChart, Search, Filter, ArrowUpDown, Truck, PackageOpen, Tag, BarChart2, PackageCheck, FileSpreadsheet, Calendar } from 'lucide-react';
import { FormInput } from '@/components/FormInput';
import { CustomButton } from '@/components/CustomButton';
import Logo from '@/styles/ui/logos/gone.svg';
import { SearchInput } from '@/components/SearchInput';
import { cn } from '@/lib/utils';
import { PickupRequestManager } from '@/components/PickupRequestManager';
import { LogisticsCalendar, type DayDetails } from '@/components/LogisticsCalendar';
import { ReceivingWorkflow } from '@/components/ReceivingWorkflow';
import { DropoffRequestManager } from '@/components/DropoffRequestManager';

interface CartItem {
  id: string;
  title: string;
  sku: string;
  imageUrl: string;
  price: number;
}

interface SaleItem {
  id: string;
  title: string;
  price: number;
}

interface Sale {
  id: string;
  timestamp: Date;
  items: SaleItem[];
  total: number;
  paymentMethod: 'cash' | 'card' | 'other';
}

// Add types
interface CalendarDay {
  date: string;
  hasRequests: boolean;
  requestCount: number;
  pickups: number;
  dropoffs: number;
}

// Add types
interface ScheduleRequest {
  id: string;
  customerName: string;
  address: string;
  items: Array<{
    id: string;
    name: string;
    imageUrl: string;
  }>;
}

// Add new interfaces for scheduling
interface PickupRoute {
  id: string;
  date: string;
  driver?: string;
  timeSlot: string;
  stops: Array<{
    id: string;
    type: 'pickup' | 'dropoff';
    time: string;
    customerName: string;
    address: string;
    items: Array<{
      id: string;
      name: string;
      imageUrl: string;
    }>;
  }>;
}

// Move mock data to top
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

// Add helper function at the top
const getFutureDates = (startDate: Date = new Date(), count: number = 5) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

const InventoryPage = () => {
  // Group all state declarations together
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_inventory' | 'ready_for_sale'>('all');
  const [activeTab, setActiveTab] = useState('inventory');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [historyFilter, setHistoryFilter] = useState<'received' | 'rejected'>('received');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [dailySales, setDailySales] = useState<Sale[]>([
    {
      id: '1',
      timestamp: new Date(),
      items: [{ id: '1', title: 'Vintage Chair', price: 89.99 }],
      total: 89.99,
      paymentMethod: 'card'
    }
  ]);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>(() => {
    const futureDates = getFutureDates();
    return futureDates.map(date => ({
      date,
      hasRequests: Math.random() > 0.3, // 70% chance of having requests
      requestCount: Math.floor(Math.random() * 3) + 1,
      pickups: Math.floor(Math.random() * 2) + 1,
      dropoffs: Math.floor(Math.random() * 2)
    }));
  });
  const [autoAssignedRequests, setAutoAssignedRequests] = useState<ScheduleRequest[]>([]);
  const [availableRequests, setAvailableRequests] = useState<ScheduleRequest[]>([]);
  const [logisticsCalendarData, setLogisticsCalendarData] = useState<DayDetails[]>(mockLogisticsData);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [routes, setRoutes] = useState<PickupRoute[]>([]);
  const [selectedRequests, setSelectedRequests] = useState<string[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<PickupRoute | null>(null);
  const [availableDrivers] = useState([
    { id: 'd1', name: 'John Driver' },
    { id: 'd2', name: 'Sarah Driver' },
    { id: 'd3', name: 'Mike Driver' }
  ]);
  const [availableTimeSlots] = useState([
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM'
  ]);

  // Calculate derived values after state declarations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

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
      name: 'Vintage Chair',
      description: 'Vintage wooden chair in good condition',
      imageUrl: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
      status: 'pending',
      pickupPhoto: 'https://assets.wfcdn.com/im/08536462/resize-h400-w400%5Ecompr-r85/2752/275244502/default_name.jpg',
      pickupDate: new Date(),
      pickupAddress: '123 Main St',
      items: [],
      messages: [],
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St'
    }
    // Add more items as needed...
  ];

  const tabs = [
    {
      id: 'pickups',
      label: 'Pickup Requests',
      icon: Truck,
      description: 'Manage incoming pickup requests'
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: Calendar,
      description: 'Schedule and assign pickup routes'
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
      id: 'listing',
      label: 'Listing',
      icon: Tag,
      description: 'Create and manage listings'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: PackageOpen,
      description: 'Manage warehouse inventory'
    },
  
    {
      id: 'sales',
      label: 'Sales',
      icon: BarChart2,
      description: 'Track sales and performance'
    }
  ];

  // Update mock pickup requests with more data
  const mockPickupRequests = [
    {
      id: '1',
      items: [
        {
          id: 'item1',
          name: 'Vintage Chair',
          status: 'pending' as const,
          imageUrl: 'https://example.com/chair.jpg',
          description: 'Beautiful vintage chair in good condition',
          availableDates: getFutureDates().slice(0, 2).map(date => ({ 
            date, 
            requestCount: 1 
          })),
          location: 'Seattle, WA',
          pickupPhoto: 'https://example.com/photo1.jpg',
          pickupDate: new Date(),
          pickupAddress: '123 Main St',
          customerName: 'John Doe',
          customerEmail: 'john@example.com',
          customerPhone: '555-0123',
          messages: [],
          address: '123 Main St'
        },
        {
          id: 'item2',
          name: 'Dining Table',
          status: 'pending' as const,
          imageUrl: 'https://example.com/table.jpg',
          description: 'Solid wood dining table, seats 6',
          availableDates: getFutureDates().slice(1, 3).map(date => ({ 
            date, 
            requestCount: 1 
          })),
          location: 'Seattle, WA',
          pickupPhoto: 'https://example.com/photo2.jpg',
          pickupDate: new Date(),
          pickupAddress: '123 Main St',
          customerName: 'John Doe',
          customerEmail: 'john@example.com',
          customerPhone: '555-0123',
          messages: [],
          address: '123 Main St'
        }
      ],
      messages: [],
      status: 'pending' as const,
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '555-0123',
      address: '123 Main St',
      pickupPhoto: 'https://example.com/photo1.jpg',
      pickupDate: new Date(),
      pickupAddress: '123 Main St'
    },
    {
      id: '2',
      items: [
        {
          id: 'item3',
          name: 'Leather Sofa',
          status: 'pending' as const,
          imageUrl: 'https://example.com/sofa.jpg',
          description: 'Brown leather sofa in excellent condition',
          availableDates: [{ 
            date: getFutureDates()[2], 
            requestCount: 1 
          }],
          location: 'Bellevue, WA',
          pickupPhoto: 'https://example.com/photo3.jpg',
          pickupDate: new Date(),
          pickupAddress: '456 Oak St',
          customerName: 'Jane Smith',
          customerEmail: 'jane@example.com',
          customerPhone: '555-0456',
          messages: [],
          address: '456 Oak St'
        }
      ],
      messages: [],
      status: 'pending' as const,
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      customerPhone: '555-0456',
      address: '456 Oak St',
      pickupPhoto: 'https://example.com/photo3.jpg',
      pickupDate: new Date(),
      pickupAddress: '456 Oak St'
    },
    {
      id: '3',
      items: [
        {
          id: 'item4',
          name: 'Bookshelf',
          status: 'pending' as const,
          imageUrl: 'https://example.com/bookshelf.jpg',
          description: 'Tall wooden bookshelf with 5 shelves',
          availableDates: [{ date: '2024-03-21', requestCount: 1 }],
          location: 'Redmond, WA',
          pickupPhoto: 'https://example.com/photo4.jpg',
          pickupDate: new Date(),
          pickupAddress: '789 Pine St',
          customerName: 'Mike Johnson',
          customerEmail: 'mike@example.com',
          customerPhone: '555-0789',
          messages: [],
          address: '789 Pine St'
        },
        {
          id: 'item5',
          name: 'Coffee Table',
          status: 'pending' as const,
          imageUrl: 'https://example.com/coffeetable.jpg',
          description: 'Modern glass coffee table',
          availableDates: [{ date: '2024-03-21', requestCount: 1 }],
          location: 'Redmond, WA',
          pickupPhoto: 'https://example.com/photo5.jpg',
          pickupDate: new Date(),
          pickupAddress: '789 Pine St',
          customerName: 'Mike Johnson',
          customerEmail: 'mike@example.com',
          customerPhone: '555-0789',
          messages: [],
          address: '789 Pine St'
        }
      ],
      messages: [],
      status: 'pending' as const,
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      customerPhone: '555-0789',
      address: '789 Pine St',
      pickupPhoto: 'https://example.com/photo4.jpg',
      pickupDate: new Date(),
      pickupAddress: '789 Pine St'
    }
  ];

  // Mock data for ReceivingWorkflow
  const mockReceivingItems = [{
    id: '1',
    name: 'Vintage Chair',
    description: 'Vintage wooden chair in good condition',
    imageUrl: 'https://example.com/chair.jpg',
    status: 'pending' as const,
    pickupPhoto: 'https://example.com/chair.jpg',
    pickupDate: new Date(),
    pickupAddress: '123 Main St',
    items: [],
    messages: [],
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    address: '123 Main St'
  }];

  // Mock data for ListingWorkflow
  const mockProcessingItems = [{
    id: '1',
    productId: 'PRD001',
    pickupPhoto: 'https://example.com/chair.jpg',
    pickupDescription: 'Vintage wooden chair',
    receivedDate: new Date(),
    status: 'in_inventory' as const,
    customerName: 'John Doe'
  }];

  // Add near other mock data
  const mockHistoryItems = [{
    id: '1',
    name: 'Vintage Chair',
    description: 'Wooden chair in good condition',
    imageUrl: 'https://example.com/chair.jpg',
    status: historyFilter,
    processedDate: new Date(),
  }];

  // Add mock history data
  const mockPickupHistory = [{
    id: '1',
    customerName: 'John Smith',
    address: '123 Main St, Seattle, WA',
    items: [{ name: 'Vintage Chair', quantity: 1 }],
    status: historyFilter,
    processedDate: new Date(),
    processedBy: 'Jane Operator'
  }];

  const mockDropoffHistory = [{
    id: '1',
    partnerName: 'Goodwill Seattle',
    items: [
      { name: 'Dining Table', quantity: 1 },
      { name: 'Chairs', quantity: 4 }
    ],
    status: historyFilter,
    processedDate: new Date(),
    processedBy: 'Mike Handler'
  }];

  // Add with other mock data
  const mockDropoffRequests = [{
    id: '1',
    partnerName: 'Goodwill Seattle',
    partnerEmail: 'partner@goodwill.org',
    partnerPhone: '555-0123',
    scheduledDate: '2024-03-20',
    status: 'pending' as const,
    items: [
      {
        id: 'item1',
        name: 'Dining Table',
        description: 'Wooden dining table',
        quantity: 1,
        condition: 'Good',
        category: 'Furniture',
        imageUrl: 'https://example.com/table.jpg',
        estimatedValue: 200
      }
    ],
    messages: []
  }];

  // Add mock inventory items
  const mockInventoryItems = [
    {
      id: '1',
      title: 'Vintage Wooden Chair',
      imageUrl: 'https://example.com/chair.jpg',
      cost: 25.00,
      price: 89.99,
      sku: 'VWC001',
      status: 'active',
      dateAdded: new Date('2024-02-15'),
      lastModified: new Date('2024-02-15'),
    },
    // Add more items...
  ];

  // Add handler
  const handleAssignRequest = (id: string) => {
    console.log('Assign request:', id);
  };

  // Add handler functions
  const handleViewDetails = (id: string) => {
    console.log('View details:', id);
  };

  const handleReprocess = (id: string) => {
    console.log('Reprocess item:', id);
  };

  // Add handler functions for pickups
  const handleViewPickupDetails = (id: string) => {
    console.log('View pickup details:', id);
  };

  const handleReprocessPickup = (id: string) => {
    console.log('Reprocess pickup:', id);
  };

  // Add handler functions for dropoffs
  const handleViewDropoffDetails = (id: string) => {
    console.log('View dropoff details:', id);
  };

  const handleReprocessDropoff = (id: string) => {
    console.log('Reprocess dropoff:', id);
  };

  // Add handler functions for listing
  const handleViewListingDetails = (id: string) => {
    console.log('View listing details:', id);
  };

  const handleReprocessListing = (id: string) => {
    console.log('Edit listing:', id);
  };

  const handleEditProduct = (id: string) => {
    console.log('Edit product:', id);
  };

  // Add sales handlers
  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleProcessPayment = () => {
    if (cartItems.length === 0) return;
    
    const newSale = {
      id: Math.random().toString(),
      timestamp: new Date(),
      items: cartItems,
      total: total,
      paymentMethod: 'card' as const
    };
    
    setDailySales(prev => [newSale, ...prev]);
    setCartItems([]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleViewSaleDetails = (id: string) => {
    console.log('View sale details:', id);
  };

  const handlePrintReceipt = (id: string) => {
    console.log('Print receipt:', id);
  };

  // Add calendar handlers
  const handlePreviousMonth = () => {
    console.log('Previous month');
  };

  const handleNextMonth = () => {
    console.log('Next month');
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // Get available requests for this date
    const requests = getAvailableRequestsForDate(date);
    setAvailableRequests(requests);
    
    // Auto-assign requests that only have this date available
    const autoAssigned = requests.filter(request => {
      const originalRequest = mockPickupRequests.find(r => r.id === request.id);
      return originalRequest?.items.every(item => 
        item.availableDates.length === 1 && 
        item.availableDates[0].date === date
      );
    });
    
    setAutoAssignedRequests(autoAssigned);
    setSelectedRequests(autoAssigned.map(r => r.id));
  };

  // Add scheduling handlers
  const handleCreateRoute = () => {
    if (selectedRequests.length === 0) return;

    const newRoute: PickupRoute = {
      id: Math.random().toString(),
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      stops: selectedRequests.map(id => {
        const request = availableRequests.find(r => r.id === id);
        return {
          id,
          type: 'pickup',
          time: selectedTimeSlot,
          customerName: request?.customerName || '',
          address: request?.address || '',
          items: request?.items || []
        };
      })
    };

    setRoutes(prev => [...prev, newRoute]);
    setSelectedRequests([]);
  };

  const handleAssignDriver = (routeId: string, driverId: string) => {
    setRoutes(prev => prev.map(route => 
      route.id === routeId ? { ...route, driver: driverId } : route
    ));
  };

  const handleRequestSelection = (requestId: string) => {
    setSelectedRequests(prev => 
      prev.includes(requestId)
        ? prev.filter(id => id !== requestId)
        : [...prev, requestId]
    );
  };

  const handleTimeSelection = (requestId: string, time: string) => {
    setSelectedTimeSlot(time);
  };

  // Add this after mockPickupRequests declaration
  const getAvailableRequestsForDate = (date: string) => {
    return mockPickupRequests
      .filter(request => {
        // Check if any item has this date as an available date
        return request.items.some(item => 
          item.availableDates.some(d => d.date === date)
        );
      })
      .map(request => ({
        id: request.id,
        customerName: request.customerName,
        address: request.address,
        items: request.items.map(item => ({
          id: item.id,
          name: item.name,
          imageUrl: item.imageUrl
        }))
      }));
  };

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
                <div className="space-y-8">
                  {/* Active Pickups */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Active Pickup Requests</h2>
                    <PickupRequestManager
                      pickupRequests={mockPickupRequests.filter(r => r.status === 'pending')}
                      onAcceptRequest={(id) => console.log('Accept:', id)}
                      onRejectRequest={(id) => console.log('Reject:', id)}
                      onUpdateStatus={(id, status) => console.log('Update status:', id, status)}
                      onSendMessage={(id, message) => console.log('Send message:', id, message)}
                      className="bg-white shadow-xl rounded-xl p-6"
                    />
                  </section>

                  {/* Pickup History */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Pickup History</h2>
                    <div className="bg-white shadow-xl rounded-xl p-6">
                      <div className="flex gap-4 mb-6">
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'received' ? "bg-green-100 text-green-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('received')}
                        >
                          Accepted
                        </button>
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'rejected' ? "bg-red-100 text-red-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('rejected')}
                        >
                          Rejected
                        </button>
                      </div>

                      <div className="space-y-4">
                        {mockPickupHistory.map((request) => (
                          <div 
                            key={request.id} 
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex-grow">
                              <h3 className="font-medium text-gray-900">{request.customerName}</h3>
                              <p className="text-sm text-gray-600">{request.address}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                Processed on {new Date(request.processedDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleViewPickupDetails(request.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                View Details
                              </button>
                              <button 
                                onClick={() => handleReprocessPickup(request.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                Reprocess
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'dropoffs' && (
                <div className="space-y-8">
                  {/* Active Dropoffs */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Active Drop-off Requests</h2>
                    <DropoffRequestManager
                      dropoffRequests={mockDropoffRequests.filter(r => r.status === 'pending')}
                      onApproveRequest={(id) => console.log('Approve:', id)}
                      onRejectRequest={(id) => console.log('Reject:', id)}
                      onUpdateStatus={(id, status) => console.log('Update status:', id, status)}
                      onSendMessage={(id, message) => console.log('Send message:', id, message)}
                      onUpdateQuantity={(requestId, itemId, quantity) => console.log('Update quantity:', requestId, itemId, quantity)}
                      className="bg-white shadow-xl rounded-xl p-6"
                    />
                  </section>

                  {/* Dropoff History */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Drop-off History</h2>
                    <div className="bg-white shadow-xl rounded-xl p-6">
                      <div className="flex gap-4 mb-6">
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'received' ? "bg-green-100 text-green-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('received')}
                        >
                          Approved
                        </button>
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'rejected' ? "bg-red-100 text-red-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('rejected')}
                        >
                          Rejected
                        </button>
                      </div>

                      <div className="space-y-4">
                        {mockDropoffHistory.map((request) => (
                          <div 
                            key={request.id} 
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex-grow">
                              <h3 className="font-medium text-gray-900">{request.partnerName}</h3>
                              <p className="text-sm text-gray-600">{request.items.length} items</p>
                              <p className="text-xs text-gray-500 mt-1">
                                Processed on {new Date(request.processedDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleViewDropoffDetails(request.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                View Details
                              </button>
                              <button 
                                onClick={() => handleReprocessDropoff(request.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                Reprocess
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'receiving' && (
                <div className="space-y-8">
                  {/* Active Receiving Workflow */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Active Items</h2>
                    <ReceivingWorkflow
                      items={mockReceivingItems}
                      onReceiveItem={(id) => console.log('Received item:', id)}
                      onRejectItem={(id) => console.log('Rejected item:', id)}
                      onUpdateStatus={(id, status) => console.log('Updated status:', id, status)}
                      onUpdateDetails={(id, details) => console.log('Updated details:', id, details)}
                      onAddProcessingPhotos={(id, photos) => console.log('Added photos:', id, photos)}
                      className="bg-white shadow-xl rounded-xl p-6"
                    />
                  </section>

                  {/* History Section */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Processing History</h2>
                    <div className="bg-white shadow-xl rounded-xl p-6">
                      <div className="flex gap-4 mb-6">
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'received' ? "bg-green-100 text-green-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('received')}
                        >
                          Received
                        </button>
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'rejected' ? "bg-red-100 text-red-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('rejected')}
                        >
                          Rejected
                        </button>
                      </div>

                      {/* History List */}
                      <div className="space-y-4">
                        {mockHistoryItems.map((item: { 
                          id: string;
                          name: string;
                          description: string;
                          imageUrl: string;
                          status: string;
                          processedDate: Date;
                        }) => (
                          <div 
                            key={item.id} 
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <img 
                              src={item.imageUrl} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-grow">
                              <h3 className="font-medium text-gray-900">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                Processed on {new Date(item.processedDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleViewDetails(item.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                View Details
                              </button>
                              <button 
                                onClick={() => handleReprocess(item.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                Reprocess
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'listing' && (
                <div className="space-y-8">
                  {/* Active Listing Workflow */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Items to List</h2>
                    <ListingWorkflow
                      items={mockProcessingItems}
                      onUpdateDetails={(itemId, details) => console.log('Update details:', itemId, details)}
                      onUpdateStatus={(itemId, status) => console.log('Update status:', itemId, status)}
                      onSaveDraft={(itemId, details) => console.log('Save draft:', itemId, details)}
                      className="bg-white shadow-xl rounded-xl p-6"
                    />
                  </section>

                  {/* History Section */}
                  <section>
                    <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">Listing History</h2>
                    <div className="bg-white shadow-xl rounded-xl p-6">
                      <div className="flex gap-4 mb-6">
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'received' ? "bg-green-100 text-green-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('received')}
                        >
                          Listed
                        </button>
                        <button 
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            historyFilter === 'rejected' ? "bg-red-100 text-red-800" : "bg-gray-100"
                          )}
                          onClick={() => setHistoryFilter('rejected')}
                        >
                          Drafts
                        </button>
                      </div>

                      {/* History List */}
                      <div className="space-y-4">
                        {mockProcessingItems.map((item) => (
                          <div 
                            key={item.id} 
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <img 
                              src={item.pickupPhoto} 
                              alt={item.productId}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-grow">
                              <h3 className="font-medium text-gray-900">Product ID: {item.productId}</h3>
                              <p className="text-sm text-gray-600">{item.pickupDescription}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                Received on {item.receivedDate.toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleViewListingDetails(item.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                View Details
                              </button>
                              <button 
                                onClick={() => handleReprocessListing(item.id)}
                                className="text-[#4B7163] hover:text-[#3A5A4F] text-sm font-medium"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'inventory' && (
                <div className="space-y-8">
                  <section>
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h2 className="font-rockwell text-2xl text-[#4B7163]">
                            Active Listings ({mockInventoryItems.length})
                          </h2>
                          <div className="flex gap-4">
                            <CustomButton
                              variant="secondary"
                              className="flex items-center gap-2"
                              onClick={() => console.log('Export')}
                            >
                              <FileSpreadsheet className="w-4 h-4" />
                              Export
                            </CustomButton>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-[#F8FAF9] text-[#4B7163]">
                            <tr>
                              <th className="text-left p-4">Product</th>
                              <th className="text-left p-4">SKU</th>
                              <th className="text-right p-4">Cost</th>
                              <th className="text-right p-4">Price</th>
                              <th className="text-center p-4">Status</th>
                              <th className="text-right p-4">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mockInventoryItems.map((item) => (
                              <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                                <td className="p-4">
                                  <div className="flex items-center gap-4">
                                    <img 
                                      src={item.imageUrl} 
                                      alt={item.title}
                                      className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div>
                                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                                      <p className="text-sm text-gray-500">
                                        Added {item.dateAdded.toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 text-gray-600">{item.sku}</td>
                                <td className="p-4 text-right text-gray-600">${item.cost.toFixed(2)}</td>
                                <td className="p-4 text-right text-gray-900 font-medium">
                                  ${item.price.toFixed(2)}
                                </td>
                                <td className="p-4">
                                  <span className="inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {item.status}
                                  </span>
                                </td>
                                <td className="p-4 text-right">
                                  <CustomButton
                                    variant="secondary"
                                    onClick={() => handleEditProduct(item.id)}
                                    className="text-sm"
                                  >
                                    Edit
                                  </CustomButton>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'sales' && (
                <div className="space-y-8">
                  {/* Checkout Section */}
                  <section>
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                      <div className="p-6 border-b border-gray-200">
                        <h2 className="font-rockwell text-2xl text-[#4B7163]">Checkout</h2>
                      </div>
                      
                      <div className="p-6 grid grid-cols-3 gap-6">
                        {/* Product Search & Cart */}
                        <div className="col-span-2 space-y-4">
                          <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search products by SKU or name..."
                          />
                          
                          <div className="border rounded-lg">
                            <table className="w-full">
                              <thead className="bg-[#F8FAF9] text-[#4B7163]">
                                <tr>
                                  <th className="text-left p-4">Product</th>
                                  <th className="text-right p-4">Price</th>
                                  <th className="text-right p-4">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cartItems.map((item) => (
                                  <tr key={item.id} className="border-t">
                                    <td className="p-4">
                                      <div className="flex items-center gap-4">
                                        <img 
                                          src={item.imageUrl} 
                                          alt={item.title}
                                          className="w-12 h-12 object-cover rounded"
                                        />
                                        <div>
                                          <h3 className="font-medium">{item.title}</h3>
                                          <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="p-4 text-right">${item.price.toFixed(2)}</td>
                                    <td className="p-4 text-right">
                                      <button 
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                      >
                                        Remove
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Payment Summary */}
                        <div className="space-y-6">
                          <div className="bg-[#F8FAF9] p-6 rounded-xl">
                            <h3 className="font-semibold text-lg mb-4">Payment Summary</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                              </div>
                              <div className="border-t pt-3 font-semibold flex justify-between">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <CustomButton
                              onClick={handleProcessPayment}
                              className="w-full"
                              variant="cta"
                            >
                              Process Payment
                            </CustomButton>
                            <CustomButton
                              onClick={handleClearCart}
                              className="w-full"
                              variant="secondary"
                            >
                              Clear Cart
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Daily Sales Section */}
                  <section>
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h2 className="font-rockwell text-2xl text-[#4B7163]">
                            Today's Sales
                          </h2>
                          <div className="flex gap-4">
                            <CustomButton
                              variant="secondary"
                              className="flex items-center gap-2"
                              onClick={() => console.log('Export')}
                            >
                              <FileSpreadsheet className="w-4 h-4" />
                              Export
                            </CustomButton>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-[#F8FAF9] text-[#4B7163]">
                            <tr>
                              <th className="text-left p-4">Time</th>
                              <th className="text-left p-4">Items</th>
                              <th className="text-right p-4">Total</th>
                              <th className="text-center p-4">Payment Method</th>
                              <th className="text-right p-4">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dailySales.map((sale) => (
                              <tr key={sale.id} className="border-t border-gray-100 hover:bg-gray-50">
                                <td className="p-4 text-gray-600">
                                  {new Date(sale.timestamp).toLocaleTimeString()}
                                </td>
                                <td className="p-4">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{sale.items.length} items</span>
                                    <button 
                                      onClick={() => handleViewSaleDetails(sale.id)}
                                      className="text-sm text-[#4B7163] hover:underline"
                                    >
                                      View Details
                                    </button>
                                  </div>
                                </td>
                                <td className="p-4 text-right font-medium">
                                  ${sale.total.toFixed(2)}
                                </td>
                                <td className="p-4 text-center">
                                  <span className="inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {sale.paymentMethod}
                                  </span>
                                </td>
                                <td className="p-4 text-right">
                                  <CustomButton
                                    variant="secondary"
                                    onClick={() => handlePrintReceipt(sale.id)}
                                    className="text-sm"
                                  >
                                    Print Receipt
                                  </CustomButton>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'schedule' && (
                <div className="space-y-8">
                  {/* Calendar View */}
                  <section>
                    <div className="bg-white shadow-xl rounded-xl p-6">
                      <div className="grid grid-cols-7 gap-4">
                        {/* Calendar Header */}
                        <div className="col-span-5">
                          <div className="flex justify-between items-center mb-6">
                            <h2 className="font-rockwell text-2xl text-[#4B7163]">
                              Schedule Pickups & Drop-offs
                            </h2>
                            <div className="flex gap-2">
                              <CustomButton
                                variant="secondary"
                                onClick={() => handlePreviousMonth()}
                              >
                                Previous
                              </CustomButton>
                              <CustomButton
                                variant="secondary"
                                onClick={() => handleNextMonth()}
                              >
                                Next
                              </CustomButton>
                            </div>
                          </div>
                          
                          {/* Calendar Grid */}
                          <div className="grid grid-cols-7 gap-1">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                              <div key={day} className="p-2 text-center font-medium text-[#4B7163]">
                                {day}
                              </div>
                            ))}
                            {calendarDays.map((day, index) => (
                              <div
                                key={index}
                                onClick={() => handleDateSelect(day.date)}
                                className={cn(
                                  "p-2 min-h-[100px] border rounded-lg cursor-pointer",
                                  selectedDate === day.date ? "border-[#4B7163] bg-[#F8FAF9]" : "border-gray-200",
                                  "hover:border-[#4B7163] transition-colors"
                                )}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <span className="font-medium">{new Date(day.date).getDate()}</span>
                                  {day.hasRequests && (
                                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                      {day.requestCount}
                                    </span>
                                  )}
                                </div>
                                {day.hasRequests && (
                                  <div className="space-y-1">
                                    {day.pickups > 0 && (
                                      <span className="block text-xs text-[#4B7163]">
                                        {day.pickups} pickups
                                      </span>
                                    )}
                                    {day.dropoffs > 0 && (
                                      <span className="block text-xs text-[#4B7163]">
                                        {day.dropoffs} dropoffs
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Selected Date Details */}
                        <div className="col-span-2 border-l pl-6">
                          {selectedDate ? (
                            <>
                              <h3 className="font-rockwell text-xl text-[#4B7163] mb-4">
                                {new Date(selectedDate).toLocaleDateString(undefined, {
                                  weekday: 'long',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </h3>
                              
                              {/* Auto-assigned Requests */}
                              {autoAssignedRequests.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-medium text-[#4B7163] mb-2">Auto-assigned</h4>
                                  <div className="space-y-2">
                                    {autoAssignedRequests.map(request => (
                                      <div 
                                        key={request.id}
                                        className="p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                                      >
                                        <p className="font-medium text-sm">{request.customerName}</p>
                                        <p className="text-xs text-gray-600">{request.address}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Available Requests */}
                              <div className="space-y-4">
                                <h4 className="font-medium text-[#4B7163]">Available Requests</h4>
                                {availableRequests.map(request => (
                                  <div 
                                    key={request.id}
                                    className="p-3 bg-white rounded-lg border hover:border-[#4B7163] transition-colors"
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <p className="font-medium text-sm">{request.customerName}</p>
                                        <p className="text-xs text-gray-600">{request.address}</p>
                                      </div>
                                      <CustomButton
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => handleAssignRequest(request.id)}
                                      >
                                        Assign
                                      </CustomButton>
                                    </div>
                                    <div className="flex gap-2">
                                      {request.items.map(item => (
                                        <img 
                                          key={item.id}
                                          src={item.imageUrl}
                                          alt={item.name}
                                          className="w-10 h-10 rounded object-cover"
                                        />
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <p className="text-gray-500">Select a date to view available requests</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
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