import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  "flex items-center justify-center text-base font-poppins rounded-md transition-colors duration-200 ease-in-out px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: `
          bg-[#6AB098] text-white
          hover:bg-[#5A9F87]
          active:bg-[#7AC1A9]
        `,
        cta: `
          bg-[#FFD200] text-black
          hover:bg-[#E6BD00]
          active:bg-[#FFD933]
        `,
        secondary: `
          bg-[#A9D2C4] text-black
          hover:bg-[#98C1B3]
          active:bg-[#BAE3D5]
        `,
      },
      size: {
        default: 'h-10',
        sm: 'h-8 text-sm px-3',
        lg: 'h-12 text-lg px-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface CustomButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

export const CustomButton = ({ 
  children, 
  icon,
  label,
  variant, 
  size,
  className, 
  ...props 
}: CustomButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon}
      {label || children}
    </button>
  );
};