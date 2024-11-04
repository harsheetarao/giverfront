'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';
import { MessageBubble } from './MessageBubble';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  sender: 'user' | 'admin';
}

interface MessageThreadProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onMessageRead?: (messageId: string) => void;
  className?: string;
}

export const MessageThread = ({
  messages,
  onSendMessage,
  onMessageRead,
  className
}: MessageThreadProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  
  const unreadCount = messages.filter(msg => !msg.isRead).length;
  const lastMessage = messages[messages.length - 1];
  const lastMessageTime = lastMessage 
    ? new Intl.RelativeTimeFormat('en').format(
        Math.ceil((lastMessage.timestamp.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
        'days'
      )
    : null;

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    // Mark all messages as read when expanding
    if (!isExpanded && onMessageRead) {
      messages.forEach(msg => {
        if (!msg.isRead) onMessageRead(msg.id);
      });
    }
  };

  return (
    <div className={cn("bg-white rounded-2xl border-2 border-[#4B7163] p-6", className)}>
      <button
        onClick={handleExpand}
        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAF9]"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-[#4B7163]" />
          <span className="font-medium text-[#4B7163]">Messages</span>
          {unreadCount > 0 && (
            <span className="bg-[#6AB098] text-white text-sm px-2 py-1 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
        {lastMessage && (
          <span className="text-sm text-gray-500">
            Last message {lastMessageTime}
          </span>
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              <MessageBubble
                state={message.sender === 'admin' ? 'secondary' : 'primary'}
                className={cn(
                  message.sender === 'admin' ? "ml-8" : "mr-8"
                )}
              >
                <p className="text-[#4B7163]">{message.content}</p>
                <span className="text-sm text-gray-500 mt-2 block">
                  {message.timestamp.toLocaleString()}
                </span>
              </MessageBubble>
            </div>
          ))}
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (newMessage.trim()) {
                onSendMessage(newMessage);
                setNewMessage('');
              }
            }}
            className="flex gap-2 mt-4"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border-2 border-[#4B7163] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6AB098]"
            />
            <CustomButton
              type="submit"
              disabled={!newMessage.trim()}
              className="bg-[#4B7163] text-white px-4 py-2 rounded-lg hover:bg-[#3A5A4F]"
            >
              Send
            </CustomButton>
          </form>
        </div>
      )}
    </div>
  );
}; 