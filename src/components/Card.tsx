import React from 'react';

export interface CardProps {
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
}

export const Card = ({ imageUrl, alt, children }: CardProps) => {
  return (
    <div className="card-custom">
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