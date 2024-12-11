import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ProgressStep {
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProgressProps {
  steps: ProgressStep[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export const Progress = ({ steps, currentStep, onStepClick }: ProgressProps) => {
  return (
    <div className="flex justify-between relative mb-16">
      {/* Make line thicker and more visible */}
      <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200" />
      <div 
        className="absolute top-3 left-0 h-1 bg-[#4B7163] transition-all duration-200"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />

      {steps.map((step, index) => {
        const StepIcon = step.icon;
        const isCompleted = index + 1 < currentStep;
        const isCurrent = index + 1 === currentStep;

        return (
          <div 
            key={index}
            className={cn(
              "flex flex-col items-center cursor-pointer group relative",
              isCurrent ? "text-[#4B7163]" : 
              isCompleted ? "text-[#4B7163]" : "text-gray-400"
            )}
            onClick={() => onStepClick(index + 1)}
          >
            {/* Make circle background more visible */}
            <div 
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center relative z-10",
                isCompleted || isCurrent ? "bg-[#4B7163]" : "bg-white border-2 border-gray-200"
              )}
            >
              {isCompleted ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <StepIcon className={cn(
                  "w-4 h-4",
                  isCurrent ? "text-white" : "text-gray-400"
                )} />
              )}
            </div>
            
            {/* Make labels more visible */}
            <div className={cn(
              "text-sm font-medium mt-2",
              isCompleted || isCurrent ? "text-[#4B7163]" : "text-gray-400"
            )}>
              {step.label}
            </div>

            {/* Improved tooltip */}
            <div className="invisible group-hover:visible absolute -bottom-12 bg-[#4B7163] text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-20 shadow-lg">
              {step.description}
              {/* Add arrow */}
              <div className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 bg-[#4B7163] transform rotate-45" />
            </div>
          </div>
        );
      })}
    </div>
  );
};