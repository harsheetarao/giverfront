'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeSampleProps {
  code: string;
  language?: string;
}

export const CodeSample = ({ code, language = 'tsx' }: CodeSampleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 border rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50"
      >
        <span>View Code</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      
      {isOpen && (
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 p-2 rounded-md hover:bg-gray-700"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400" />
            )}
          </button>
          <pre className={cn(
            'p-4 bg-gray-800 text-gray-100 overflow-x-auto',
            'text-sm font-mono'
          )}>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}; 