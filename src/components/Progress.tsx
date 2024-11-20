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
    <div className="flex justify-between relative">
      <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-200" />
      <div 
        className="absolute top-3 left-0 h-[2px] bg-[#4B7163] transition-all duration-200"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />

      {steps.map((step, index) => {
        const StepIcon = step.icon;
        return (
          <div 
            key={index}
            className={cn(
              "flex flex-col items-center cursor-pointer group relative",
              index + 1 === currentStep ? "text-[#4B7163]" : "text-gray-400"
            )}
            onClick={() => onStepClick(index + 1)}
          >
            <div className="flex items-center relative z-10">
              {StepIcon && (
                <StepIcon className={cn(
                  "w-6 h-6 mb-2",
                  index + 1 <= currentStep 
                    ? "text-white fill-[#4B7163] stroke-white" 
                    : "text-gray-400"
                )} />
              )}
            </div>
            <div className="text-sm font-medium">{step.label}</div>
            <div className="invisible group-hover:visible absolute -bottom-8 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
              {step.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};