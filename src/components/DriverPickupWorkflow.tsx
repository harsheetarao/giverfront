'use client';

import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { Camera, Calendar, MapPin, Check, X, MessageCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MessageThread } from './MessageThread';
import { AcceptedRequest } from '@/types/AcceptedRequest';
import { AcceptedPickupItem } from '@/types/PickupItem';
import { FormDropdown } from './FormDropdown';
import { SwipeCard } from './SwipeCard';
import { MapModal } from './MapModal';

interface AcceptedRequestManagerProps {
  requests: AcceptedRequest[];
  onUpdateItemStatus: (requestId: string, itemId: string, status: AcceptedPickupItem['status']) => void;
  onAddPhoto: (requestId: string, itemId: string, photo: File, note?: string) => void;
  onReschedule: (requestId: string, newDate: string) => void;
  onCompletePickup: (requestId: string) => void;
  onSendMessage: (requestId: string, message: string) => void;
  onMessageRead?: (requestId: string, messageId: string) => void;
  availableDates: string[];
  className?: string;
}

export const DriverPickupWorkflow = ({
  requests = [],
  onUpdateItemStatus,
  onAddPhoto,
  onReschedule,
  onCompletePickup,
  onSendMessage,
  onMessageRead,
  availableDates = [],
  className
}: AcceptedRequestManagerProps) => {
  const [selectedRequest, setSelectedRequest] = useState<AcceptedRequest | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isMessagesExpanded, setIsMessagesExpanded] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // Sort requests by pickup date
  const filteredRequests = (requests || [])
    .sort((a, b) => {
      const dateA = a.pickupDate ? new Date(a.pickupDate).getTime() : 0;
      const dateB = b.pickupDate ? new Date(b.pickupDate).getTime() : 0;
      return dateA - dateB;
    })
    .filter(request => !selectedDate || request.pickupDate?.toISOString().split('T')[0] === selectedDate);

  if (!selectedRequest) {
    return (
      <div className={cn(
        'bg-white rounded-2xl border-2 border-[#4B7163] p-6',
        'flex flex-col',
        className
      )}>
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
          Pickups ({filteredRequests.length})
        </h2>

        <div className="mb-4">
          <FormDropdown
            label="Filter by Date"
            value={selectedDate || ''}
            onChange={(value) => setSelectedDate(value || null)}
            options={[
              { value: '', label: 'All Dates' },
              ...(availableDates || []).map(date => ({
                value: date,
                label: new Date(date).toLocaleDateString()
              }))
            ]}
          />
        </div>

        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              onClick={() => setSelectedRequest(request)}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAF9] hover:bg-[#F0F4F2] cursor-pointer transition-colors"
            >
              <div className="flex-grow">
                <h3 className="font-rockwell text-lg text-[#4B7163]">
                  {request.customerName}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#5A7C6F] mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{request.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5A7C6F] mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>{request.pickupDate ? new Date(request.pickupDate).toLocaleDateString() : 'No date set'}</span>
                </div>
              </div>
              <ChevronRight className="h-6 w-6 text-[#5A7C6F]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <CustomButton
        variant="secondary"
        onClick={() => setSelectedRequest(null)}
        className="mb-4"
      >
        ← Back to List
      </CustomButton>

      <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6 space-y-6">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">
          Pickup Details
        </h2>

        <div className="mb-6">
          <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">Customer Information</h3>
          <div className="bg-[#F8FAF9] p-4 rounded-xl">
            <p className="text-[#5A7C6F] mb-2"><strong>Name:</strong> {selectedRequest.customerName}</p>
            <p className="text-[#5A7C6F] mb-2"><strong>Contact:</strong> {selectedRequest.customerEmail || selectedRequest.customerPhone}</p>
            <div 
              className="flex items-center gap-2 text-[#5A7C6F] cursor-pointer hover:text-[#4B7163] transition-colors"
              onClick={() => setIsMapModalOpen(true)}
            >
              <MapPin className="h-4 w-4" />
              <p className="underline">{selectedRequest.address}</p>
            </div>
            <div className="flex items-center gap-2 text-[#5A7C6F] mt-2">
              <Calendar className="h-4 w-4" />
              <p>{new Date(selectedRequest.pickupDate || '').toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {isMapModalOpen && (
          <MapModal
            address={selectedRequest.address}
            onClose={() => setIsMapModalOpen(false)}
          />
        )}

        <div className="flex flex-col gap-4">
          <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">Items</h3>
          <div className="grid grid-cols-1 gap-8 mb-4">
            {selectedRequest.items.map((item) => (
              <div 
                className="aspect-[3/4] w-full relative"
                key={item.id}
              >
                <div className="absolute inset-0 -mx-8">
                  <div className="relative h-full mx-8">
                    <SwipeCard
                      imageUrl={item.verificationPhotos?.[0]?.imageUrl || item.imageUrl || ''}
                      alt={item.name}
                      onSwipe={(direction) => {
                        onUpdateItemStatus(
                          selectedRequest.id,
                          item.id,
                          direction === 'right' ? 'verified' : 'incorrect'
                        );
                      }}
                    >
                      <div className="bg-[#F8FAF9] p-4 rounded-xl h-full overflow-y-auto">
                        <h4 className="font-semibold text-[#4B7163] mb-2">{item.name}</h4>
                        <p className="text-sm text-[#5A7C6F] mb-2">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "px-2 py-1 rounded-full text-xs",
                            item.status === 'verified' && "bg-green-100 text-green-800",
                            item.status === 'incorrect' && "bg-red-100 text-red-800",
                            item.status === 'pending' && "bg-yellow-100 text-yellow-800"
                          )}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </SwipeCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Swipe Instructions */}
          <div className="flex justify-center gap-8 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <X className="h-4 w-4 text-red-500" /> Swipe left if not picking up item
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" /> Swipe right if you have picked up the item
            </div>
          </div>
        </div>

        <div className="mt-6">
          <MessageThread
            messages={selectedRequest.messages}
            onSendMessage={(message) => onSendMessage(selectedRequest.id, message)}
            onMessageRead={(messageId) => onMessageRead?.(selectedRequest.id, messageId)}
          />
        </div>
      </div>
    </div>
  );
}; 