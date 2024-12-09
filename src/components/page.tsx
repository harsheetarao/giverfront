'use client';

import { cn } from '@/lib/utils';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => (
  <div className={cn("min-h-screen flex flex-col", className)}>
    {children}
  </div>
);
