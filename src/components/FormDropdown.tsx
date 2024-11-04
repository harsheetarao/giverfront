'use client';

import React from 'react';
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

export const FormDropdown = React.forwardRef<HTMLSelectElement, FormDropdownProps>(
  ({ label, hint, state = 'normal', options, className, disabled, value, onChange, ...props }, ref) => {
    const currentState = disabled ? 'disabled' : state;
    const styles = stateStyles[currentState];

    return (
      <div className="space-y-1.5">
        <label 
          className={cn(
            'block text-sm font-medium uppercase',
            styles.text
          )}
        >
          {label}
        </label>

        <div className="relative">
          <select
            ref={ref}
            disabled={disabled}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              'w-full px-3 py-2',
              'pr-16',
              'rounded-[4px]',
              'border-2',
              'font-poppins text-base',
              'appearance-none',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              styles.border,
              disabled && 'bg-gray-50 cursor-not-allowed',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
            {styles.icon && (
              <div className={cn(
                'rounded-full w-4 h-4 mr-2',
                'flex items-center justify-center',
                styles.iconBg
              )}>
                {styles.icon}
              </div>
            )}
            <ChevronDown 
              className={cn(
                'h-5 w-5',
                styles.text
              )} 
            />
          </div>
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