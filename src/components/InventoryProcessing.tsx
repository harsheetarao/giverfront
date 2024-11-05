import { useState } from 'react';
import { CustomButton } from '@/components/CustomButton';
import { FormInput } from '@/components/FormInput';
import { FormDropdown } from '@/components/FormDropdown';
import { ImageUpload } from '@/components/ImageUpload';
import { Card } from '@/components/Card';
import { PickupRequest, RequestStatus } from '@/types/PickupRequest';
import { ItemDetails } from '@/types/PickupItem';

interface InventoryProcessingProps {
  request: PickupRequest;
  onUpdateStatus: (status: RequestStatus) => void;
  onUpdateDetails: (details: ItemDetails) => void;
  onAddProcessingPhotos: (photos: string[]) => void;
  onConfirmReceipt: () => void;
}

export const InventoryProcessing = ({
  request,
  onUpdateStatus,
  onUpdateDetails,
  onAddProcessingPhotos,
  onConfirmReceipt,
}: InventoryProcessingProps) => {
  const [productId, setProductId] = useState('');
  const [description, setDescription] = useState('');
  const [processingPhotos, setProcessingPhotos] = useState<string[]>([]);

  const handleReceiving = () => {
    if (!productId) return;
    onUpdateStatus('in_inventory');
    onUpdateDetails({ productId });
    onConfirmReceipt();
  };

  const handleProcessing = () => {
    if (!description || processingPhotos.length === 0) return;
    onUpdateStatus('ready_for_sale');
    onUpdateDetails({ 
      description,
      processingPhotos 
    });
  };

  return (
    <div className="space-y-6">
      {/* Receiving Stage */}
      {request.status === 'completed' && (
        <Card imageUrl={request.pickupPhoto} alt="Original pickup photo">
          <h3 className="font-rockwell text-lg text-[#4B7163] mb-4">Receiving Stage</h3>
          <FormInput
            label="Product ID"
            placeholder="Enter Product ID"
            value={productId}
            onChange={setProductId}
            state={productId ? "completed" : "required"}
            hint="Enter a unique identifier for this item"
          />
          <CustomButton 
            variant="cta"
            onClick={handleReceiving}
            disabled={!productId}
            className="mt-4"
          >
            Confirm Receipt
          </CustomButton>
        </Card>
      )}

      {/* Processing Stage */}
      {request.status === 'in_inventory' && (
        <Card imageUrl="" alt="">
          <h3 className="heading-3">Item Processing</h3>
          <ImageUpload
            onUpload={setProcessingPhotos}
            maxFiles={5}
            className="mb-4"
          />
          <FormDropdown
            label="Item Category"
            hint="Select the primary category for this item"
            state="required"
            options={[
              { value: '', label: 'Select a category' },
              { value: 'furniture', label: 'Furniture' },
              { value: 'decor', label: 'Home Decor' },
              { value: 'lighting', label: 'Lighting' },
            ]}
          />
          <FormInput
            label="Item Description"
            placeholder="Enter full product description"
            value={description}
            onChange={setDescription}
            state={description ? "completed" : "required"}
            hint="Provide a detailed description of the item"
            className="mt-4"
          />
          <CustomButton 
            variant="cta"
            onClick={handleProcessing}
            disabled={!description || processingPhotos.length === 0}
            className="mt-4"
          >
            Mark Ready for Sale
          </CustomButton>
        </Card>
      )}
    </div>
  );
}; 