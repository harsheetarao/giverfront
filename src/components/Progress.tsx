import React from 'react';
import { Check } from 'lucide-react';

interface ProgressProps {
  steps: string[];
  currentStep: number;
}

export const Progress = ({ steps, currentStep }: ProgressProps) => {
  return (
    <div className="relative flex items-center justify-between w-full max-w-2xl mx-auto px-[12.5px]">
      {/* Connecting Lines - at 30% opacity for incomplete */}
      <div 
        className="absolute top-[12.5px] left-[37.5px] right-[37.5px] h-[3px] z-0" 
        style={{ backgroundColor: 'rgba(90, 124, 111, 1.0)' }}
      />
      {/* Active line - full opacity */}
      <div 
        className="absolute top-[12.5px] left-[37.5px] h-[3px] z-0 transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: '#5A7C6F',
          width: `${Math.max(0, Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100))}%`,
          maxWidth: `calc(100% - ${25}px)`
        }} 
      />

      {/* Steps */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`
                w-[25px] h-[25px] rounded-full 
                flex items-center justify-center
                border-[3px] border-[#5A7C6F]
                transition-colors duration-300 ease-in-out
                ${index < currentStep ? 'bg-[#5A7C6F]' : 'bg-white'}
              `}
            >
              {index < currentStep && (
                <Check className="w-4 h-4 text-white" />
              )}
            </div>
            <span className="mt-2 text-sm text-center">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};