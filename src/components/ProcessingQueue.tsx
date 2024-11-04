'use client';

import React from 'react';
import { CustomButton } from './CustomButton';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessingItem {
  id: string;
  productId: string;
  pickupPhoto: string;
  pickupDescription: string;
  receivedDate: Date;
  customerName: string;
}

interface ProcessingQueueProps {
  items: ProcessingItem[];
  onSelectItem: (itemId: string) => void;
  className?: string;
}

export const ProcessingQueue = ({
  items,
  onSelectItem,
  className,
}: ProcessingQueueProps) => {
  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6',
      'flex flex-col',
      className
    )}>
      <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
        Items Awaiting Processing ({items.length} {items.length === 1 ? 'item' : 'items'})
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500 font-sourceSans">
          No items awaiting processing
        </div>
      ) : (
        <div className="flex-grow space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.pickupPhoto}
                  alt={`Item ${item.productId}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-rockwell text-lg text-[#4B7163] mb-1">
                      Product ID: {item.productId}
                    </h3>
                    <p className="text-sm text-gray-600 font-sourceSans">
                      {item.pickupDescription}
                    </p>
                  </div>
                  <CustomButton
                    onClick={() => onSelectItem(item.id)}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    Process <ArrowRight className="h-4 w-4" />
                  </CustomButton>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">
                    From: {item.customerName}
                  </span>
                  <span className="text-sm text-gray-500">
                    Received: {new Date(item.receivedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 