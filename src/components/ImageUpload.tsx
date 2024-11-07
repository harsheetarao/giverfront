'use client';

import React, { useId } from 'react';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onUpload: (photos: string[]) => void;
  maxFiles?: number;
  className?: string;
}

export const ImageUpload = ({
  onUpload,
  maxFiles = 5,
  className
}: ImageUploadProps) => {
  const uniqueId = useId();
  const inputId = `photo-upload-${uniqueId}`;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).slice(0, maxFiles);
      const photoUrls = fileArray.map(file => URL.createObjectURL(file));
      
      console.log('ImageUpload Component - Processing files:', files.length);
      console.log('ImageUpload Component - Created URLs:', photoUrls);
      
      if (photoUrls.length > 0) {
        onUpload(photoUrls);
      }
      
      event.target.value = '';
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="border-2 border-dashed border-[#5A7C6F] rounded-xl p-8 text-center">
        <input
          type="file"
          id={inputId}
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
        <label 
          htmlFor={inputId}
          className="cursor-pointer space-y-4 block"
        >
          <Upload className="h-12 w-12 mx-auto text-[#5A7C6F]" />
          <div className="font-sourceSans">
            <p className="text-lg font-semibold text-[#4B7163]">
              Drop photos here or click to upload
            </p>
            <p className="text-sm text-[#5A7C6F]">
              Upload clear photos (max {maxFiles} files)
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}; 