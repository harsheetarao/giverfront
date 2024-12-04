'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface SwipeCardProps {
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
  onSwipe: (direction: 'left' | 'right') => void;
  isVisible?: boolean;
}

export const SwipeCard = ({ 
  imageUrl, 
  alt, 
  children, 
  onSwipe,
  isVisible = true 
}: SwipeCardProps) => {
  const [exitX, setExitX] = useState<number>(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const dragEndHandler = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x);
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
  };

  const handleAccept = () => {
    setExitX(200);
    onSwipe('right');
  };

  const handleReject = () => {
    setExitX(-200);
    onSwipe('left');
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={dragEndHandler}
      animate={{ x: exitX }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        {/* Card Content */}
        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full h-3/5">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 h-2/5">
            {children}
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-4"
          style={{ opacity: useTransform(x, [-50, 0, 50], [0, 1, 0]) }}
        >
          <button
            onClick={handleReject}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <X className="w-6 h-6 text-red-500" />
          </button>
          <button
            onClick={handleAccept}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <Check className="w-6 h-6 text-green-500" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
