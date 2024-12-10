'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Truck, Package, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormInput } from '@/components/FormInput';
import { CustomButton } from '@/components/CustomButton';

interface TimeSlotDetails {
  id: string;
  customerName: string;
  address: string;
  items: Array<{
    id: string;
    name: string;
    imageUrl: string;
    description: string;
  }>;
}

interface TimeSlot {
  time: string;
  availableDrivers: number;
  pickupCount: number;
  dropoffCount: number;
  pickups: TimeSlotDetails[];
  dropoffs: TimeSlotDetails[];
}

export interface DayDetails {
  date: string;
  timeSlots: TimeSlot[];
  totalPickups: number;
  totalDropoffs: number;
  availableDrivers: number;
}

interface LogisticsCalendarProps {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
  className?: string;
  calendarData?: DayDetails[];
}

export const LogisticsCalendar = ({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime,
  className,
  calendarData = []
}: LogisticsCalendarProps) => {
  const dayDetails = calendarData;
  const availableDates = dayDetails.map(d => d.date);
  const [showDetails, setShowDetails] = useState(false);

  const selectedTimeSlot = selectedDate && selectedTime ? 
    dayDetails.find(d => d.date === selectedDate)?.timeSlots.find(t => t.time === selectedTime)
    : null;

  const handleTimeSelect = (time: string) => {
    onTimeSelect(time);
    setShowDetails(true);
  };

  return (
    <div className={cn("bg-white rounded-xl border-2 border-[#4B7163] p-6", className)}>
      <div className="space-y-6">
        {!showDetails ? (
          <>
            {/* Calendar Section */}
            <div>
              <h3 className="font-rockwell text-xl text-[#4B7163] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Select Date
              </h3>
              <div className="relative">
                <FormInput
                  type="date"
                  label="Date"
                  value={selectedDate || ''}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(value: string) => {
                    if (availableDates.includes(value)) {
                      onDateSelect(value);
                    }
                  }}
                  className={cn(
                    "w-full",
                    dayDetails.some(d => d.date === selectedDate) && "border-[#4B7163] bg-[#F8FAF9]"
                  )}
                  list="available-dates"
                />
                <datalist id="available-dates">
                  {availableDates.map(date => (
                    <option key={date} value={date} />
                  ))}
                </datalist>
                {!availableDates.includes(selectedDate || '') && selectedDate && (
                  <p className="text-sm text-red-500 mt-1">No available times for this date</p>
                )}
              </div>
            </div>

            {/* Time Slots Section */}
            {selectedDate && dayDetails.find(d => d.date === selectedDate) && (
              <div>
                <h3 className="font-rockwell text-xl text-[#4B7163] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Available Times
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dayDetails.find(d => d.date === selectedDate)?.timeSlots
                    .sort((a, b) => a.time.localeCompare(b.time))  // Sort times chronologically
                    .map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => handleTimeSelect(slot.time)}
                        className={cn(
                          "p-4 rounded-lg border-2 text-left transition-colors h-full", // Added h-full
                          selectedTime === slot.time
                            ? "border-[#4B7163] bg-[#4B7163] text-white"
                            : "border-[#4B7163]/20 hover:border-[#4B7163]"
                        )}
                      >
                        <div className="flex flex-col h-full justify-between">  {/* Structured layout */}
                          <div className="mb-3">
                            <div className="text-lg font-semibold mb-1">{slot.time}</div>
                            <div className="text-sm opacity-75">
                              {slot.availableDrivers} drivers available
                            </div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <div className="flex flex-col items-center" title="Number of pickups">
                              <Truck className="w-5 h-5 mb-1" />
                              <div className="text-lg font-bold">
                                {slot.pickupCount}
                              </div>
                            </div>
                            <div className="flex flex-col items-center" title="Number of drop-offs">
                              <Package className="w-5 h-5 mb-1" />
                              <div className="text-lg font-bold">
                                {slot.dropoffCount}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>

                {/* Daily Summary */}
                <div className="mt-6 p-4 bg-[#F8FAF9] rounded-lg">
                  <h4 className="font-semibold text-[#4B7163] mb-2">Daily Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Total Pickups: {dayDetails[0].totalPickups}</div>
                    <div>Total Drop-offs: {dayDetails[0].totalDropoffs}</div>
                    <div>Available Drivers: {dayDetails[0].availableDrivers}</div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-rockwell text-xl text-[#4B7163] flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {selectedDate} at {selectedTime}
              </h3>
              <CustomButton
                variant="secondary"
                onClick={() => setShowDetails(false)}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Back to Calendar
              </CustomButton>
            </div>

            <div className="space-y-6">
              {/* Pickups Section */}
              <div className="bg-[#F8FAF9] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#4B7163]" />
                    <h4 className="font-semibold text-[#4B7163]">
                      Pickups ({selectedTimeSlot?.pickupCount})
                    </h4>
                  </div>
                </div>
                <div className="space-y-4">
                  {selectedTimeSlot?.pickups.map((pickup) => (
                    <div key={pickup.id} className="border-b border-[#4B7163]/20 pb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{pickup.customerName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#5A7C6F] mb-2">
                        <MapPin className="w-4 h-4" />
                        {pickup.address}
                      </div>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {pickup.items.map((item) => (
                          <img
                            key={item.id}
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                            title={item.description}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drop-offs Section */}
              <div className="bg-[#F8FAF9] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#4B7163]" />
                    <h4 className="font-semibold text-[#4B7163]">
                      Drop-offs ({selectedTimeSlot?.dropoffCount})
                    </h4>
                  </div>
                </div>
                <div className="space-y-4">
                  {selectedTimeSlot?.dropoffs.map((dropoff) => (
                    <div key={dropoff.id} className="border-b border-[#4B7163]/20 pb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{dropoff.customerName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#5A7C6F] mb-2">
                        <MapPin className="w-4 h-4" />
                        {dropoff.address}
                      </div>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {dropoff.items.map((item) => (
                          <img
                            key={item.id}
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                            title={item.description}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};