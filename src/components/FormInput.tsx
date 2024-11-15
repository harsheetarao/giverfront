'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X, AlertCircle } from 'lucide-react';

type InputState = 'normal' | 'completed' | 'error' | 'required' | 'blankRequired' | 'disabled';

interface FormInputProps {
  label: string;
  hint?: string;
  state?: InputState;
  className?: string;
  value: string;
  type?: string;
  min?: number;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
}

const stateStyles = {
  normal: {
    border: 'border-[#5A7C6F]',
    text: 'text-[#5A7C6F]',
    icon: null,
  },
  completed: {
    border: 'border-[#5A7C6F]',
    text: 'text-[#5A7C6F]',
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: 'bg-[#5A7C6F]',
  },
  error: {
    border: 'border-red-500',
    text: 'text-red-500',
    icon: <X className="h-3 w-3 text-white" />,
    iconBg: 'bg-red-500',
  },
  required: {
    border: 'border-[#109BD4]',
    text: 'text-[#5A7C6F]',
    icon: null,
  },
  blankRequired: {
    border: 'border-[#ED933F]',
    text: 'text-[#5A7C6F]',
    icon: <AlertCircle className="h-3 w-3 text-white" />,
    iconBg: 'bg-[#ED933F]',
  },
  disabled: {
    border: 'border-gray-300',
    text: 'text-gray-400',
    icon: null,
  },
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, hint, state = 'normal', className, disabled, value, onChange, placeholder, ...props }, ref) => {
    // If disabled prop is true, override state to 'disabled'
    const currentState = disabled ? 'disabled' : state;
    const styles = stateStyles[currentState];

    return (
      <div className="space-y-1.5">
        {/* Label */}
        <label 
          className={cn(
            'block text-sm font-medium uppercase',
            styles.text
          )}
        >
          {label}
        </label>

        {/* Input Container */}
        <div className="relative">
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              'w-full px-3 py-2',
              'rounded-[4px]',
              'border-2',
              'font-poppins text-base',
              'placeholder:text-[#5A7C6F]/60',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              styles.border,
              disabled && 'bg-gray-50 cursor-not-allowed',
              className
            )}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            {...props}
          />
          
          {/* State Icon */}
          {styles.icon && (
            <div 
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2',
                'rounded-full w-4 h-4',
                'flex items-center justify-center',
                styles.iconBg
              )}
            >
              {styles.icon}
            </div>
          )}
        </div>

        {/* Hint Text */}
        {hint && (
          <p className={cn(
            'text-sm',
            styles.text
          )}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
