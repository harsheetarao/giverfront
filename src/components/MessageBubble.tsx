import React from 'react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  children: React.ReactNode;
  state?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export const MessageBubble = ({ 
  children, 
  state = 'primary',
  className = '' 
}: MessageBubbleProps) => {
  const stateClasses = {
    primary: 'bg-[#4B7163] text-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl relative after:content-[""] after:absolute after:left-[-13px] after:bottom-0 after:border-[8px] after:border-[#4B7163] after:border-l-transparent after:border-t-transparent',
    secondary: 'bg-[#6AB098] text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl relative after:content-[""] after:absolute after:right-[-13px] after:bottom-0 after:border-[8px] after:border-[#6AB098] after:border-r-transparent after:border-t-transparent',
    tertiary: 'bg-[#FFE082] text-black rounded-tr-2xl rounded-tl-2xl rounded-br-2xl relative after:content-[""] after:absolute after:left-[-16px] after:bottom-0 after:border-[8px] after:border-[#FFE082] after:border-l-transparent after:border-t-transparent',
  };

  return (
    <div className={cn(
      'p-4 mb-6 max-w-[80%] w-fit',
      stateClasses[state],
      className
    )}>
      {children}
    </div>
  );
};