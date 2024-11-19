import React from 'react';
import { Check } from 'lucide-react';

interface ProgressProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
}

export const Progress = ({ steps, currentStep, onStepClick }: ProgressProps) => {
  return (
    <div className="relative flex items-center justify-between w-full max-w-3xl mx-auto py-4 px-6">
      {/* Connecting Lines - at 30% opacity for incomplete */}
      <div 
        className="absolute top-[-10px] left-[12.5px] right-[12.5px] h-[3px] z-0" 
        style={{ backgroundColor: 'rgba(90, 124, 111, 0.3)' }}
      />
      {/* Active line - full opacity */}
      <div 
        className="absolute top-[-10px] left-[12.5px] h-[3px] z-0 transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: '#5A7C6F',
          width: `${Math.max(0, Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100))}%`,
          maxWidth: `calc(100% - ${25}px)`
        }} 
      />

      {/* Steps */}
      <div className="relative z-10 flex items-center justify-between w-full px-[12.5px]">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="absolute" 
            style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
          >
            <button
              onClick={() => onStepClick?.(index + 1)}
              className={`
                flex flex-col items-center -translate-x-1/2 
                cursor-pointer hover:opacity-80 transition-opacity
                ${index >= currentStep ? 'opacity-50' : ''}
              `}
            >
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
              <span className="mt-2 text-sm text-center hidden sm:block h-10 max-w-[80px]">
                {step}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};