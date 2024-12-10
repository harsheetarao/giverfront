'use client';

import React, { useState } from 'react';
import { Package, FileSpreadsheet, Plus, Minus, Search } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';
import { MessageThread } from './MessageThread';
import { SearchInput } from './SearchInput';

interface DropoffItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  condition: string;
  category: string;
  imageUrl: string;
  estimatedValue: number;
}

interface DropoffRequest {
  id: string;
  partnerName: string;
  partnerEmail: string;
  partnerPhone: string;
  scheduledDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  items: DropoffItem[];
  messages: Array<{
    id: string;
    content: string;
    timestamp: Date;
    isRead: boolean;
    sender: 'user' | 'admin';
  }>;
}

interface DropoffRequestManagerProps {
  dropoffRequests: DropoffRequest[];
  onApproveRequest: (id: string) => void;
  onRejectRequest: (id: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
  onSendMessage: (id: string, message: string) => void;
  onUpdateQuantity: (requestId: string, itemId: string, quantity: number) => void;
  className?: string;
}

export const DropoffRequestManager = ({
  dropoffRequests,
  onApproveRequest,
  onRejectRequest,
  onUpdateStatus,
  onSendMessage,
  onUpdateQuantity,
  className
}: DropoffRequestManagerProps) => {
  const [currentRequestIndex, setCurrentRequestIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof DropoffItem>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const currentRequest = dropoffRequests[currentRequestIndex];
  const filteredItems = currentRequest?.items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = [...(filteredItems || [])].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-rockwell text-[#4B7163]">
          Partner Drop-off Requests
        </h2>
        <div className="flex gap-2">
          <CustomButton
            onClick={() => setCurrentRequestIndex(prev => Math.max(0, prev - 1))}
            disabled={currentRequestIndex === 0}
          >
            Previous
          </CustomButton>
          <CustomButton
            onClick={() => setCurrentRequestIndex(prev => Math.min(dropoffRequests.length - 1, prev + 1))}
            disabled={currentRequestIndex === dropoffRequests.length - 1}
          >
            Next
          </CustomButton>
        </div>
      </div>

      {/* Partner Info */}
      <div className="bg-[#F8FAF9] p-4 rounded-lg">
        <h3 className="font-semibold text-[#4B7163] mb-2">Partner Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium">{currentRequest.partnerName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium">{currentRequest.partnerEmail}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium">{currentRequest.partnerPhone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Scheduled Date</p>
            <p className="font-medium">{currentRequest.scheduledDate}</p>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="bg-white rounded-lg border-2 border-[#4B7163] overflow-hidden">
        <div className="p-4 border-b border-[#4B7163]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[#4B7163] flex items-center gap-2">
              <Package className="w-5 h-5" />
              Items ({currentRequest?.items.length})
            </h3>
            <div className="flex gap-2">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search items..."
              />
              <CustomButton
                variant="secondary"
                onClick={() => window.open('/path-to-spreadsheet')}
                className="flex items-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4" />
                Export
              </CustomButton>
            </div>
          </div>

          {/* Spreadsheet-like table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAF9]">
                <tr>
                  <th className="p-2 text-left">Image</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Category</th>
                  <th className="p-2 text-left">Condition</th>
                  <th className="p-2 text-right">Est. Value</th>
                  <th className="p-2 text-center">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="p-2">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.description}</td>
                    <td className="p-2">{item.category}</td>
                    <td className="p-2">{item.condition}</td>
                    <td className="p-2 text-right">${item.estimatedValue}</td>
                    <td className="p-2">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(currentRequest.id, item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(currentRequest.id, item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Communication */}
      <MessageThread
        messages={currentRequest.messages}
        onSendMessage={(message) => onSendMessage(currentRequest.id, message)}
      />
    </div>
  );
}; 