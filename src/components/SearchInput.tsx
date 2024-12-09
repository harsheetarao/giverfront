'use client';

import React from 'react';
import { FormInput } from './FormInput';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, placeholder = "Search...", className }, ref) => {
    return (
      <div className="relative">
        <FormInput
          ref={ref}
          label="Search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "pl-10", // Add padding for the search icon
            className
          )}
        />
        <Search 
          className="absolute left-3 top-[34px] w-4 h-4 text-[#5A7C6F]/60" 
          aria-hidden="true"
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput'; 