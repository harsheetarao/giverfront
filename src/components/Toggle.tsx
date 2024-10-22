'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type ToggleVariant = 'primary' | 'cta' | 'secondary';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: ToggleVariant;
  disabled?: boolean;
  className?: string;
}

const variantStyles = {
  primary: {
    active: 'bg-[#6AB098] hover:bg-[#5A9F87]',
  },
  cta: {
    active: 'bg-[#FFD200] hover:bg-[#E6BD00]',
  },
  secondary: {
    active: 'bg-[#A9D2C4] hover:bg-[#98C1B3]',
  },
};

export const Toggle = ({ 
  checked, 
  onChange, 
  variant = 'primary', 
  disabled = false,
  className 
}: ToggleProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled) {
        onChange(!checked);
      }
    }
  };

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={handleKeyDown}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full bg-[#F8FAF9]',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'border border-gray-200',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
      animate={checked ? "checked" : "unchecked"}
      whileTap={disabled ? undefined : { scale: 0.95 }}
    >
      <motion.span
        className={cn(
          'pointer-events-none inline-block h-5 w-5 rounded-full shadow-lg ring-0',
          'absolute top-[2px]',
          disabled ? 'cursor-not-allowed bg-gray-400' : 
          checked ? variantStyles[variant].active : 'bg-gray-400 hover:bg-gray-500'
        )}
        animate={{
          x: checked ? "24px" : "2px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </motion.button>
  );
};