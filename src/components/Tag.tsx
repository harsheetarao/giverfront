'use client';

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type TagVariant = 'primary' | 'cta' | 'secondary';

interface TagProps {
  text: string;
  variant?: TagVariant;
  onDelete?: () => void;
  className?: string;
}

const variantStyles = {
  primary: {
    border: 'border-[#6AB098]',
    text: 'text-[#6AB098]',
    deleteButton: 'bg-[#6AB098] hover:bg-[#5A9F87]',
  },
  cta: {
    border: 'border-[#FFD200]',
    text: 'text-[#FFD200]',
    deleteButton: 'bg-[#FFD200] hover:bg-[#E6BD00]',
  },
  secondary: {
    border: 'border-[#A9D2C4]',
    text: 'text-[#A9D2C4]',
    deleteButton: 'bg-[#A9D2C4] hover:bg-[#98C1B3]',
  },
};

export const Tag = ({ 
  text, 
  variant = 'primary',
  onDelete,
  className 
}: TagProps) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        'inline-flex items-center',
        'h-7 pl-1 pr-3',
        'rounded-full',
        'font-poppins font-semibold text-sm',
        'bg-[#F8FAF9]',
        'border-2',
        'transition-all duration-200',
        styles.border,
        styles.text,
        className
      )}
    >
      {onDelete && (
        <div className="flex items-center">
          <button
            type="button"
            onClick={onDelete}
            className={cn(
              'flex items-center justify-center',
              'w-5 h-5 rounded-full mr-1',
              'transition-colors duration-200',
              styles.deleteButton,
              'focus:outline-none focus:ring-2 focus:ring-offset-1'
            )}
            aria-label={`Remove ${text}`}
          >
            <X className="h-3 w-3 text-white" />
          </button>
        </div>
      )}
      <span className="truncate">{text}</span>
    </div>
  );
};