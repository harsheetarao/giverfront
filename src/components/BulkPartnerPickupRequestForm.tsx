'use client';

import React, { useState } from 'react';
import { PickupRequestForm } from './PickupRequestForm';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { Upload, FolderUp, Calendar, CheckCircle2 } from 'lucide-react';
import { ImageUpload } from './ImageUpload';
import { ProgressStep } from './Progress';

interface PartnerUploadedItem {
  id: string;
  imageUrl: string;
  description?: string;
  quantity?: number;
}

export const BulkPartnerPickupRequestForm = (props: any) => {
  const [uploadMethod, setUploadMethod] = useState<'bulk' | 'individual' | null>(null);
  const [spreadsheet, setSpreadsheet] = useState<File | null>(null);
  const [bulkPhotos, setBulkPhotos] = useState<FileList | null>(null);
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');

  // Custom steps for partner form
  const steps: ProgressStep[] = [
    {
      label: 'Upload Files',
      description: 'Upload your inventory spreadsheet',
      icon: FolderUp
    },
    {
      label: 'Drop-off Time',
      description: 'Choose your preferred drop-off time',
      icon: Calendar
    }
  ];

  const handleSpreadsheetUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSpreadsheet(event.target.files[0]);
    }
  };

  const handleBulkPhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setBulkPhotos(event.target.files);
    }
  };

  const handleSubmit = (data: any) => {
    const formData = {
      ...data,
      uploadMethod,
      spreadsheet,
      bulkPhotos,
      dropOffDate,
      dropOffTime
    };
    console.log('Form submitted:', formData);
  };

  // Custom render function for both steps
  const renderCustomStep = (currentStep: number) => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          {!uploadMethod ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="p-6 bg-[#F8FAF9] rounded-xl hover:bg-[#E9EFED] cursor-pointer transition-colors"
                onClick={() => setUploadMethod('bulk')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <FolderUp className="w-12 h-12 text-[#4B7163]" />
                  <h3 className="text-lg font-semibold">Bulk Directory Upload</h3>
                  <p className="text-sm text-gray-600">
                    Upload a spreadsheet and multiple photos from a directory
                  </p>
                </div>
              </div>

              <div 
                className="p-6 bg-[#F8FAF9] rounded-xl hover:bg-[#E9EFED] cursor-pointer transition-colors"
                onClick={() => setUploadMethod('individual')}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <Upload className="w-12 h-12 text-[#4B7163]" />
                  <h3 className="text-lg font-semibold">Individual Upload</h3>
                  <p className="text-sm text-gray-600">
                    Upload photos and add descriptions one by one
                  </p>
                </div>
              </div>
            </div>
          ) : uploadMethod === 'bulk' ? (
            <div className="space-y-6">
              <div className="p-6 bg-[#F8FAF9] rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Upload Spreadsheet</h3>
                <input
                  type="file"
                  accept=".xls,.xlsx,.csv"
                  onChange={handleSpreadsheetUpload}
                  className="w-full"
                />
                {spreadsheet && (
                  <p className="text-sm text-gray-500 mt-2">
                    Uploaded: {spreadsheet.name}
                  </p>
                )}
              </div>

              <div className="p-6 bg-[#F8FAF9] rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Upload Photos</h3>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleBulkPhotoUpload}
                  className="w-full"
                />
                {bulkPhotos && (
                  <p className="text-sm text-gray-500 mt-2">
                    {bulkPhotos.length} photos selected
                  </p>
                )}
              </div>

              <CustomButton
                variant="secondary"
                onClick={() => setUploadMethod(null)}
                className="mt-4"
              >
                Change Upload Method
              </CustomButton>
            </div>
          ) : (
            <div className="space-y-6">
              <ImageUpload
                onUpload={(photos) => {
                  console.log('Individual photos uploaded:', photos);
                }}
                maxFiles={10}
              />
              
              <CustomButton
                variant="secondary"
                onClick={() => setUploadMethod(null)}
                className="mt-4"
              >
                Change Upload Method
              </CustomButton>
            </div>
          )}
        </div>
      );
    } else if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <div className="bg-[#F8FAF9] rounded-xl p-4">
            <h3 className="font-rockwell text-lg text-[#4B7163] mb-4">
              Schedule Drop-off
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                type="date"
                label="Drop-off Date"
                value={dropOffDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={setDropOffDate}
              />
              <FormInput
                type="time"
                label="Drop-off Time"
                value={dropOffTime}
                onChange={setDropOffTime}
              />
            </div>
            <p className="text-sm text-[#5A7C6F] mt-2">
              Please select a date and time during our business hours (Mon-Fri, 9AM-5PM)
            </p>
          </div>
        </div>
      );
    } else if (currentStep === 3) {
      return (
        <div className="space-y-6">
          <div className="bg-[#F8FAF9] rounded-xl p-6 text-center">
            <CheckCircle2 className="w-16 h-16 text-[#4B7163] mx-auto mb-4" />
            <h3 className="font-rockwell text-2xl text-[#4B7163] mb-4">
              Thank You for Your Request!
            </h3>
            <p className="text-[#5A7C6F] mb-6">
              We'll review your request and get back to you shortly.
              Thank you for being a sustainable partner!
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <PickupRequestForm
      onSubmit={handleSubmit}
      skipConfirmationStep={true}
      selectedDate={dropOffDate}
      selectedTime={dropOffTime}
      onDateSelect={setDropOffDate}
      onTimeSelect={setDropOffTime}
      steps={steps}
      renderDetailsStep={() => null} // Override the default first step
      renderCustomStep={renderCustomStep} // Add custom step rendering
    />
  );
}; 