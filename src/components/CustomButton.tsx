import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton = ({ children, className = '', ...props }: CustomButtonProps) => {
  return (
    <button
      className={`button-custom px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};