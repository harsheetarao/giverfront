'use client';

import React, { useState } from 'react';
import { SwipeCard } from './SwipeCard';
import { MessageBubble } from './MessageBubble';
import { CustomButton } from './CustomButton';
import { Mail, Phone, Calendar, MapPin, X, Check, MessageCircle } from 'lucide-react';

interface PickupItem {
  id: string;
  imageUrl: string;
  description: string;
  availableDates: string[];
  location: string;
}

interface PickupRequestManagerProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: PickupItem[];
  onAcceptItem: (itemId: string) => void;
  onRejectItem: (itemId: string) => void;
  onSendMessage: (message: string) => void;
}

interface Message {
  id: string;
  type: 'incoming' | 'outgoing';
  message: string;
  timestamp: Date;
}

export const PickupRequestManager = ({
  customerName,
  customerEmail,
  customerPhone,
  items: initialItems,
  onAcceptItem,
  onRejectItem,
  onSendMessage,
}: PickupRequestManagerProps) => {
  const [items, setItems] = useState(initialItems);
  // Example message thread
  const [messages] = useState<Message[]>([
    {
      id: '1',
      type: 'incoming',
      message: "Hi, I have several items to donate. When can you come pick them up?",
      timestamp: new Date('2024-02-10T10:00:00')
    },
    {
      id: '2',
      type: 'outgoing',
      message: "Hello! Thanks for reaching out. We'd be happy to help. I see you've listed several available dates. Would Wednesday 2/14 AM work best for you?",
      timestamp: new Date('2024-02-10T10:15:00')
    },
    {
      id: '3',
      type: 'incoming',
      message: "Yes, Wednesday morning would be perfect! What time do you typically arrive?",
      timestamp: new Date('2024-02-10T10:20:00')
    },
    {
      id: '4',
      type: 'outgoing',
      message: "We usually start pickups at 9:00 AM. We'll send you a confirmation once we've reviewed all your items. Each one looks great so far!",
      timestamp: new Date('2024-02-10T10:25:00')
    },
    {
      id: '5',
      type: 'incoming',
      message: "9:00 AM works great. I'll make sure everything is ready and easily accessible.",
      timestamp: new Date('2024-02-10T10:30:00')
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSwipe = (direction: 'left' | 'right', item: PickupItem) => {
    if (direction === 'right') {
      onAcceptItem(item.id);
    } else {
      onRejectItem(item.id);
    }
    setItems(prevItems => prevItems.filter(i => i.id !== item.id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Customer Info Header */}
      <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">
          {customerName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex items-center gap-2 text-[#5A7C6F]">
            <Mail className="h-5 w-5" />
            <span className="font-sourceSans">{customerEmail}</span>
          </div>
          <div className="flex items-center gap-2 text-[#5A7C6F]">
            <Phone className="h-5 w-5" />
            <span className="font-sourceSans">{customerPhone}</span>
          </div>
        </div>
      </div>

      {/* Swipeable Items Section */}
      <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
        <h3 className="font-rockwell text-xl text-[#4B7163] mb-4">
          Items to Review ({items.length})
        </h3>
        
        <div className="relative h-[500px]">
          {items.map((item, index) => (
            <SwipeCard
              key={item.id}
              imageUrl={item.imageUrl}
              isVisible={index === items.length - 1}
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
                    <span className="text-sm">
                      Available: {item.availableDates.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </SwipeCard>
          ))}
          
          {/* Swipe Instructions */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 text-sm text-gray-500">
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
      <div className="bg-white rounded-2xl border-2 border-[#4B7163] p-6">
        <h3 className="font-rockwell text-xl text-[#4B7163] mb-4">
          Messages
        </h3>
        
        {/* Message Thread */}
        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              state={message.type === 'incoming' ? 'secondary' : 'primary'}
            >
              <div className="space-y-1">
                <p className="font-sourceSans">{message.message}</p>
                <div className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </MessageBubble>
          ))}
        </div>

        {/* Message Input */}
        <div className="space-y-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full h-24 p-3 border-2 border-[#5A7C6F] rounded-lg font-sourceSans resize-none focus:outline-none focus:ring-2 focus:ring-[#5A7C6F]"
            placeholder="Type your message here..."
          />
          <CustomButton
            onClick={() => {
              onSendMessage(newMessage);
              setNewMessage('');
            }}
            className="w-full"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Send Message
          </CustomButton>
        </div>
      </div>
    </div>
  );
};