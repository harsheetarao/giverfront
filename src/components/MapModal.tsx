'use client';

import React from 'react';
import { Modal } from './Modal';
import { CustomButton } from './CustomButton';
import { Navigation, MapPin } from 'lucide-react';
import { getGeocode } from 'use-places-autocomplete';

interface MapModalProps {
  address: string;
  onClose: () => void;
}

export const MapModal = ({ address, onClose }: MapModalProps) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const openInGoogleMaps = () => {
    window.open(directionsUrl, '_blank');
  };

  return (
    <Modal onClose={onClose}>
      <div className="p-6">
        <h2 className="font-rockwell text-2xl text-[#4B7163] mb-4">
          Pickup Location
        </h2>
        
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#5A7C6F] mb-4">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <p>{address}</p>
          </div>

          {/* Map Preview */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-4 border-2 border-[#4B7163]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={mapUrl}
              allowFullScreen
            />
          </div>
          
          <CustomButton 
            onClick={openInGoogleMaps}
            className="w-full flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </CustomButton>
        </div>

        <p className="text-sm text-[#5A7C6F]">
          Opening directions will use your current location as the starting point
        </p>
      </div>
    </Modal>
  );
}; 