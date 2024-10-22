'use client';

import React, { useState, useEffect } from 'react';
import { CustomButton } from './CustomButton';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ShoppingCartProps {
  items: CartItem[];
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  className?: string;
}

export const ShoppingCart = ({
  items: initialItems,
  onRemoveItem,
  onCheckout,
  className,
}: ShoppingCartProps) => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.0825; // 8.25% tax
  const total = subtotal + tax;

  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6',
      'flex flex-col',
      className
    )}>
      {/* Header */}
      <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
        Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500 font-sourceSans">
          Your cart is empty
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-grow space-y-6 mb-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0"
              >
                {/* Item Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-rockwell text-lg text-[#4B7163] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-sourceSans">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex justify-end items-center mt-4">
                    <span className="font-rockwell text-lg text-[#4B7163]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-[#F8FAF9] rounded-xl p-4 space-y-3">
            <div className="flex justify-between font-sourceSans text-[#5A7C6F]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-sourceSans text-[#5A7C6F]">
              <span>Tax (8.25%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-[#5A7C6F]/20 pt-3">
              <div className="flex justify-between font-rockwell text-xl text-[#4B7163]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <CustomButton
            onClick={onCheckout}
            className="w-full mt-6"
            variant="cta"
          >
            Proceed to Checkout
          </CustomButton>
        </>
      )}
    </div>
  );
};