'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check, X, AlertCircle, ChevronDown } from 'lucide-react';

type DropdownState = 'normal' | 'completed' | 'error' | 'required' | 'blankRequired' | 'disabled';

interface FormDropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  label: string;
  hint?: string;
  state?: DropdownState;
  options: Array<{ value: string; label: string; }>;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
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

export const FormDropdown = React.forwardRef<HTMLDivElement, FormDropdownProps>(
  ({ label, hint, state = 'normal', options, className, disabled, value, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentState = disabled ? 'disabled' : state;
    const styles = stateStyles[currentState];
    
    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="space-y-1.5" ref={dropdownRef}>
        <label 
          className={cn(
            'block text-sm font-medium uppercase',
            styles.text
          )}
        >
          {label}
        </label>

        <div className="relative">
          <button
            type="button"
            disabled={disabled}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'w-full px-3 py-2 text-left',
              'pr-16',
              'rounded-[4px]',
              'border-2',
              'font-poppins text-base',
              'focus:outline-none focus:ring-2 focus:ring-[#4B7163] focus:ring-offset-1',
              styles.border,
              disabled && 'bg-gray-50 cursor-not-allowed',
              className
            )}
          >
            {selectedOption?.label || 'Select an option'}
            <ChevronDown 
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5',
                'text-[#5A7C6F]/60',
                isOpen && 'transform rotate-180'
              )}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 py-1 bg-white border-2 border-[#5A7C6F] rounded-lg shadow-lg">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-left',
                    'hover:bg-[#F8FAF9]',
                    'transition-colors',
                    option.value === value 
                      ? 'bg-[#4B7163] text-white' 
                      : 'text-[#5A7C6F]'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {styles.icon && (
            <div className={cn(
              'absolute right-8 top-1/2 -translate-y-1/2',
              'rounded-full w-4 h-4',
              'flex items-center justify-center',
              styles.iconBg
            )}>
              {styles.icon}
            </div>
          )}
        </div>

        {hint && (
          <p className={cn('text-sm', styles.text)}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

FormDropdown.displayName = 'FormDropdown';