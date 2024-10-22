import React from 'react';

interface CardProps {
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
}

export const Card = ({ imageUrl, alt, children }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-[#4B7163] p-4 flex flex-col items-center">
      <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden mb-4">
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
