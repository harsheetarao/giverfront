import React from 'react';

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
  const getStateClasses = () => {
    switch (state) {
      case 'secondary':
        return 'message-bubble-secondary message-bubble-triangle message-bubble-triangle-right';
      case 'tertiary':
        return 'message-bubble-tertiary message-bubble-triangle message-bubble-triangle-left';
      default:
        return 'message-bubble-primary message-bubble-triangle message-bubble-triangle-left';
    }
  };

  return (
    <div className={`message-bubble p-4 mb-4 ${getStateClasses()} ${className}`}>
      {children}
    </div>
  );
};