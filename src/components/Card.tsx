import React from 'react';

export interface CardProps {
  imageUrl?: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ imageUrl, alt, children, className = '', onClick }: CardProps) => {
  return (
    <div className="card-custom" onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="card-custom-image">
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};