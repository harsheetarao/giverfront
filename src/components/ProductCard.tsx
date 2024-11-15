'use client';

import React from 'react';
import { Tag } from './Tag';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductAttribute {
  label: string;
  value: string;
}

interface ProductCardProps {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  price: number;
  salePrice?: number;
  attributes?: ProductAttribute[];
  onAddToCart?: () => void;
  className?: string;
}

export const ProductCard = ({
  imageUrl,
  title,
  category,
  description,
  price,
  salePrice,
  attributes,
  onAddToCart,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn(
      'bg-white rounded-2xl border-2 border-[#4B7163] p-6',
      'flex flex-col',
      className
    )}>
      {/* Image Container */}
      <div className="w-full h-[200px] rounded-xl overflow-hidden mb-6">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <div className="flex-grow space-y-4">
          {/* Category and Title Group */}
          <div>
            <span className="text-sm font-sourceSans text-[#5A7C6F] mb-1 block">
              {category}
            </span>
            <h3 className="font-rockwell text-2xl text-[#4B7163]">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-sourceSans text-gray-600 text-base">
            {description}
          </p>

          {/* Attributes */}
          <div className="flex flex-wrap gap-2">
            {attributes?.map((attr, index) => (
              <Tag
                key={index}
                text={attr.label}
                variant="secondary"
              />
            ))}
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="font-rockwell text-3xl text-[#4B7163]">
              ${price.toFixed(2)}
            </span>
            <span className="font-sourceSans text-sm text-gray-500">
              USD
            </span>
          </div>
          <CustomButton
            onClick={onAddToCart}
            className="flex items-center gap-2 px-6"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
};