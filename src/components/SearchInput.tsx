'use client';

import React from 'react';
import { FormInput } from './FormInput';
import { Search, Filter } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  onFilter?: () => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, onSearch, onFilter, placeholder = "Search...", className }, ref) => {
    return (
      <div className="flex gap-2 items-end">
        <div className="flex-1 relative">
          <FormInput
            ref={ref}
            label="Search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn("pl-10", className)}
          />
          <Search 
            className="absolute left-3 top-[34px] w-4 h-4 text-[#5A7C6F]/60" 
            aria-hidden="true"
          />
        </div>
        <CustomButton
          variant="secondary"
          onClick={onFilter}
          className="flex items-center gap-2 h-[42px] mt-6"
        >
          <Filter className="w-4 h-4" />
          Filter
        </CustomButton>
        <CustomButton
          variant="primary"
          onClick={onSearch}
          className="flex items-center gap-2 h-[42px] mt-6"
        >
          <Search className="w-4 h-4" />
          Search
        </CustomButton>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput'; 