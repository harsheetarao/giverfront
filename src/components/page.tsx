'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const Page: React.FC<PageProps> = ({ children, className }) => (
  <div className={cn("min-h-screen flex flex-col", className)}>
    {children}
  </div>
);
