import { useState } from 'react';
import { PickupList } from './PickupList';
import { InventoryProcessing } from './InventoryProcessing';
import { PickupRequest } from '@/types/PickupRequest';

interface ReceivingProps {
  pickups: PickupRequest[];
}

export const Receiving = ({ pickups }: ReceivingProps) => {
  const [selectedPickup, setSelectedPickup] = useState<PickupRequest | null>(null);

  const handleSelectPickup = (pickup: PickupRequest) => {
    setSelectedPickup(pickup);
  };

  if (selectedPickup) {
    return (
      <div>
        <button 
          onClick={() => setSelectedPickup(null)}
          className="mb-4 text-[#4B7163] hover:text-[#3A5A4F] font-sourceSans"
        >
          ← Back to Queue
        </button>
        <InventoryProcessing
          request={selectedPickup}
          onUpdateStatus={(status) => console.log('Status updated:', status)}
          onUpdateDetails={(details) => console.log('Details updated:', details)}
          onAddProcessingPhotos={(photos) => console.log('Photos added:', photos)}
          onConfirmReceipt={() => console.log('Receipt confirmed')}
        />
      </div>
    );
  }

  return (
    <PickupList
      pickups={pickups}
      onSelectPickup={handleSelectPickup}
    />
  );
}; 