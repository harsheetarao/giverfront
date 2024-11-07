import { PickupRequest } from '@/types/PickupRequest';
import { Card } from '@/components/Card';

interface PickupListProps {
  pickups: PickupRequest[];
  onSelectPickup: (pickup: PickupRequest) => void;
}

export const PickupList = ({ pickups, onSelectPickup }: PickupListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {pickups.map((pickup) => (
        <Card 
          key={pickup.id}
          imageUrl={pickup.pickupPhoto}
          alt={`Pickup ${pickup.id}`}
          onClick={() => onSelectPickup(pickup)}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="p-4">
            <h3 className="font-rockwell text-lg text-[#4B7163]">
              Pickup #{pickup.id}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Status: {pickup.status}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}; 