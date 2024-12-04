'use client';

import React, { useState } from 'react';
import { SwipeCard } from './SwipeCard';
import { CustomButton } from './CustomButton';
import { Mail, Phone, Calendar, MapPin, X, Check, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MessageThread } from './MessageThread';
import { PickupRequest } from '@/types/PickupRequest';
import { PickupItem } from '@/types/PickupItem';
import { Message } from '@/types/Message';

interface PickupRequestManagerProps {
  pickupRequests: Array<{
    id: string;
    items: Array<{
      id: string;
      name: string;
      status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
      imageUrl: string;
      description: string;
      availableDates: Array<{
        date: string;
        requestCount: number;
      }>;
      location: string;
      pickupPhoto: string;
      pickupDate: Date;
      pickupAddress: string;
      customerName: string;
      customerEmail: string;
      customerPhone: string;
      messages: Message[];
      address: string;
    }>;
    messages: any[];
    status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
    pickupPhoto: string;
    pickupDate: Date;
    pickupAddress: string;
  }>;
  onAcceptRequest: (id: string) => void;
  onRejectRequest: (id: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
  onSendMessage: (id: string, message: string) => void;
  onMessageRead?: (requestId: string, messageId: string) => void;
  className?: string;
}

export const PickupRequestManager = ({
  pickupRequests,
  onAcceptRequest,
  onRejectRequest,
  onUpdateStatus,
  onSendMessage,
  onMessageRead,
  className
}: PickupRequestManagerProps) => {
  const [currentRequestIndex, setCurrentRequestIndex] = useState(0);
  const [items, setItems] = useState(pickupRequests[currentRequestIndex].items);
  const [newMessage, setNewMessage] = useState('');
  const [isMessagesExpanded, setIsMessagesExpanded] = useState(false);
  
  const unreadCount = pickupRequests[currentRequestIndex].messages.filter(msg => !msg.isRead).length;
  const lastMessage = pickupRequests[currentRequestIndex].messages[pickupRequests[currentRequestIndex].messages.length - 1];
  const lastMessageTime = lastMessage 
    ? new Intl.RelativeTimeFormat('en').format(
        Math.ceil((lastMessage.timestamp.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
        'days'
      )
    : null;

  const handleSwipe = (direction: 'left' | 'right', item: any) => {
    if (direction === 'right') {
      onAcceptRequest(pickupRequests[currentRequestIndex].id);
    } else {
      onRejectRequest(pickupRequests[currentRequestIndex].id);
    }
    setItems(prevItems => prevItems.filter(i => i.id !== item.id));
  };

  const handleExpand = () => {
    setIsMessagesExpanded(!isMessagesExpanded);
    // Mark all messages as read when expanding
    if (!isMessagesExpanded && onMessageRead) {
      pickupRequests[currentRequestIndex].messages.forEach(msg => {
        if (!msg.isRead) onMessageRead(pickupRequests[currentRequestIndex].id, msg.id);
      });
    }
  };

  const totalRequests = pickupRequests.length;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Request Navigation */}
      <div className="flex justify-between items-center px-4">
        <CustomButton
          onClick={() => setCurrentRequestIndex(prev => Math.max(0, prev - 1))}
          disabled={currentRequestIndex === 0}
          className="bg-[#4B7163] text-white px-4 py-2 rounded-lg"
        >
          &lt;
        </CustomButton>
        
        <h2 className="font-rockwell text-2xl text-[#4B7163]">
          {currentRequestIndex + 1} of {totalRequests}
        </h2>
        
        <CustomButton
          onClick={() => setCurrentRequestIndex(prev => Math.min(totalRequests - 1, prev + 1))}
          disabled={currentRequestIndex === totalRequests - 1}
          className="bg-[#4B7163] text-white px-4 py-2 rounded-lg"
        >
          &gt;
        </CustomButton>
      </div>

      {/* Swipeable Items Section */}
      <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
        <h3 className="font-rockwell text-xl text-[#4B7163] mb-4">
          Items to Review ({pickupRequests[currentRequestIndex].items.length})
        </h3>
        
        <div className="relative h-[500px]">
          {pickupRequests[currentRequestIndex].items.map((item, index) => (
            <SwipeCard
              key={item.id}
              imageUrl={item.imageUrl}
              alt={item.name || 'Pickup request item'}
              isVisible={index === pickupRequests[currentRequestIndex].items.length - 1}
              onSwipe={(direction) => handleSwipe(direction, item)}
            >
              <div className="space-y-4">
                <p className="font-sourceSans text-gray-600">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#5A7C6F]">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A7C6F]">
                    <Calendar className="h-4 w-4" />
                    <div className="text-sm">
                      Available: 
                      {item.availableDates.map((dateInfo, idx) => (
                        <span key={dateInfo.date}>
                          {idx > 0 && ', '}
                          {dateInfo.date}
                          <span className="text-[#6AB098] ml-1">
                            ({dateInfo.requestCount} request{dateInfo.requestCount !== 1 ? 's' : ''})
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwipeCard>
          ))}
          
          {/* Mobile Swipe Instructions */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500 sm:hidden">
            <div className="flex items-center gap-1">
              <X className="h-4 w-4 text-red-500" /> Swipe left to reject
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" /> Swipe right to accept
            </div>
          </div>
        </div>
      </div>

      {/* Communication Section */}
      <MessageThread
        messages={pickupRequests[currentRequestIndex].messages}
        onSendMessage={(message) => onSendMessage(pickupRequests[currentRequestIndex].id, message)}
        onMessageRead={(messageId) => onMessageRead?.(pickupRequests[currentRequestIndex].id, messageId)}
        className={className}
      />
    </div>
  );
};