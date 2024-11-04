'use client';

import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';
import { FormInput } from './FormInput';
import { FormDropdown } from './FormDropdown';
import { CustomButton } from './CustomButton';
import { Tag } from './Tag';
import { Card } from './Card';
import { Save, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessingItem {
  id: string;
  productId: string;
  pickupPhoto: string;
  pickupDescription: string;
  receivedDate: Date;
  status: 'in_inventory' | 'ready_for_sale';
  customerName: string;
}

interface ItemDetails {
  title: string;
  description: string;
  condition: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  materials: string[];
  attributes: string[];
  estimatedValue: number;
  category: string;
  tags: string[];
  features: string;
  defects: string;
  storageLocation: string;
  processingPhotos: string[];
}

interface InventoryItemProcessingProps {
  items: ProcessingItem[];
  onUpdateDetails: (itemId: string, details: ItemDetails) => void;
  onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
  onSaveDraft: (itemId: string, details: Partial<ItemDetails>) => void;
  className?: string;
}

export const InventoryItemProcessing = ({
  items,
  onUpdateDetails,
  onUpdateStatus,
  onSaveDraft,
  className
}: InventoryItemProcessingProps) => {
  const [selectedItem, setSelectedItem] = useState<ProcessingItem | null>(null);
  const [processingPhotos, setProcessingPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState<Partial<ItemDetails>>({
    title: '',
    description: '',
    condition: '',
    dimensions: { length: 0, width: 0, height: 0 },
    materials: [],
    attributes: [],
    estimatedValue: 0,
    category: '',
    tags: [],
    features: '',
    defects: '',
    storageLocation: '',
  });
  const [newAttribute, setNewAttribute] = useState('');

  const handleSubmit = () => {
    if (!selectedItem || !isFormValid()) return;
    
    const details: ItemDetails = {
      ...formData as ItemDetails,
      processingPhotos
    };
    
    onUpdateDetails(selectedItem.id, details);
    onUpdateStatus(selectedItem.id, 'ready_for_sale');
    resetForm();
  };

  const handleSaveDraft = () => {
    if (!selectedItem) return;
    onSaveDraft(selectedItem.id, { ...formData, processingPhotos });
  };

  const isFormValid = () => {
    return (
      formData.title &&
      formData.description &&
      formData.condition &&
      formData.category &&
      formData.storageLocation &&
      processingPhotos.length > 0
    );
  };

  const resetForm = () => {
    setSelectedItem(null);
    setProcessingPhotos([]);
    setFormData({});
  };

  const handleAddAttribute = () => {
    if (newAttribute.trim()) {
      setFormData(prev => ({
        ...prev,
        attributes: [...(prev.attributes || []), newAttribute.trim()]
      }));
      setNewAttribute('');
    }
  };

  if (!selectedItem) {
    return (
      <div className={cn('bg-white rounded-2xl border-2 border-[#4B7163] p-6', className)}>
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-6">
          Items Pending Processing ({items.length})
        </h2>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <img
                src={item.pickupPhoto}
                alt={`Item ${item.productId}`}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-rockwell text-lg text-[#4B7163]">
                    Product ID: {item.productId}
                  </h3>
                  <span className="text-sm text-gray-500">
                    Received: {new Date(item.receivedDate).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.pickupDescription}</p>
                <p className="text-sm text-gray-500 mt-2">From: {item.customerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      <Card imageUrl={selectedItem.pickupPhoto} alt="Original pickup photo">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h3 className="font-rockwell text-lg text-[#4B7163]">
              Processing Item: {selectedItem.productId}
            </h3>
            <Tag text={selectedItem.status} variant="primary" />
          </div>

          <ImageUpload
            onUpload={setProcessingPhotos}
            maxFiles={5}
            className="mb-4"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Title"
              value={formData.title ?? ''}
              onChange={(value) => setFormData({ ...formData, title: value })}
              state={formData.title ? "completed" : "required"}
            />
            <div className="space-y-2">
              <div className="flex gap-2">
                <FormInput
                  label="Add Attribute"
                  value={newAttribute}
                  onChange={setNewAttribute}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddAttribute()}
                />
                <CustomButton
                  onClick={handleAddAttribute}
                  variant="secondary"
                  className="mt-6"
                >
                  Add
                </CustomButton>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.attributes?.map((attr, index) => (
                  <Tag
                    key={index}
                    text={attr}
                    onDelete={() => setFormData(prev => ({
                      ...prev,
                      attributes: prev.attributes?.filter((_, i) => i !== index)
                    }))}
                  />
                ))}
              </div>
            </div>
          </div>

          <FormDropdown
            label="Category"
            options={[
              { value: 'furniture', label: 'Furniture' },
              { value: 'decor', label: 'Home Decor' },
              { value: 'lighting', label: 'Lighting' },
            ]}
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
            state={formData.category ? "completed" : "required"}
          />

          <FormInput
            label="Description"
            value={formData.description ?? ''}
            onChange={(value) => setFormData({ ...formData, description: value })}
            state={formData.description ? "completed" : "required"}
          />

          {/* Add more form fields as needed */}

          <div className="flex justify-end gap-4 mt-6">
            <CustomButton
              onClick={handleSaveDraft}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Draft
            </CustomButton>
            <CustomButton
              onClick={handleSubmit}
              variant="cta"
              disabled={!isFormValid()}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Mark Ready for Sale
            </CustomButton>
          </div>
        </div>
      </Card>
    </div>
  );
}; 