'use client';

import React, { useCallback, useState, useId } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((files: FileList) => {
    const fileArray = Array.from(files).slice(0, maxFiles);
    const photoUrls = fileArray.map(file => URL.createObjectURL(file));
    
    if (photoUrls.length > 0) {
      onUpload(photoUrls);
    }
  }, [maxFiles, onUpload]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
      event.target.value = '';
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center transition-colors",
          isDragging ? "border-[#4B7163] bg-[#F8FAF9]" : "border-[#5A7C6F]",
          "hover:border-[#4B7163] hover:bg-[#F8FAF9]"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
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
            <p className="text-sm text-[#5A7C6F] mt-2">
              Drag and drop multiple files at once
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}; 