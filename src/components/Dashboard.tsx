import React, { useEffect, useState } from 'react';
import { AcceptedRequestManager } from './AcceptedRequestManager';
import { AcceptedRequest } from '@/types/PickupRequest';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  sender: "user" | "admin";
}

interface PickupRequest {
  id: string;
  status: 'pending' | 'completed' | 'error';
  messages: Message[];
  lastStatusChange?: Date;
}

interface DashboardProps {
  pickupRequests: PickupRequest[];
  acceptedRequests: AcceptedRequest[];
  onRequestClick?: (requestId: string) => void;
  onUpdateItemStatus: (requestId: string, itemId: string, status: string) => void;
  onAddPhoto: (requestId: string, itemId: string, photo: File, note?: string) => void;
  onReschedule: (requestId: string, newDate: string) => void;
  onCompletePickup: (requestId: string) => void;
  onSendMessage: (requestId: string, message: string) => void;
  onMessageRead?: (requestId: string, messageId: string) => void;
  availableDates: string[];
}

export const Dashboard = ({ 
  pickupRequests, 
  acceptedRequests, 
  onRequestClick,
  onUpdateItemStatus,
  onAddPhoto,
  onReschedule,
  onCompletePickup,
  onSendMessage,
  onMessageRead,
  availableDates
}: DashboardProps) => {
  const [unreadMessages, setUnreadMessages] = useState<{[key: string]: Message[]}>({});
  const [recentStatusChanges, setRecentStatusChanges] = useState<PickupRequest[]>([]);

  useEffect(() => {
    // Group unread messages by request
    const unreadMsgs = pickupRequests.reduce((acc, request) => {
      const unread = request.messages.filter(msg => !msg.isRead);
      if (unread.length > 0) {
        acc[request.id] = unread;
      }
      return acc;
    }, {} as {[key: string]: Message[]});
    
    setUnreadMessages(unreadMsgs);

    // Find requests with recent status changes (last 24 hours)
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentChanges = pickupRequests.filter(
      request => request.lastStatusChange && new Date(request.lastStatusChange) > dayAgo
    );
    setRecentStatusChanges(recentChanges);
  }, [pickupRequests]);

  return (
    <>
      <AcceptedRequestManager
        requests={acceptedRequests}
        onUpdateItemStatus={onUpdateItemStatus}
        onAddPhoto={onAddPhoto}
        onReschedule={onReschedule}
        onCompletePickup={onCompletePickup}
        onSendMessage={onSendMessage}
        onMessageRead={onMessageRead}
        availableDates={availableDates}
      />
      
      {/* Unread Messages Section */}
      <div className="bg-white rounded-lg shadow p-6 mx-6">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">Unread Messages</h2>
        {Object.entries(unreadMessages).length > 0 ? (
          Object.entries(unreadMessages).map(([requestId, messages]) => (
            <div 
              key={requestId}
              className="p-4 border rounded-lg mb-4 cursor-pointer hover:bg-gray-50"
              onClick={() => onRequestClick?.(requestId)}
            >
              <div className="flex items-center justify-between">
                <span>Request #{requestId}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {messages.length} unread
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Latest: {messages[messages.length - 1].content.substring(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No unread messages</p>
        )}
      </div>

      {/* Status Changes Section */}
      <div className="bg-white rounded-lg shadow p-6 mx-6">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">Recent Status Changes</h2>
        {recentStatusChanges.length > 0 ? (
          recentStatusChanges.map((request) => (
            <div 
              key={request.id}
              className="p-4 border rounded-lg mb-4 cursor-pointer hover:bg-gray-50"
              onClick={() => onRequestClick?.(request.id)}
            >
              <div className="flex items-center justify-between">
                <span>Request #{request.id}</span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  request.status === 'completed' ? 'bg-green-100 text-green-800' :
                  request.status === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {request.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Status changed: {new Date(request.lastStatusChange!).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recent status changes</p>
        )}
      </div>
    </>
  );
};