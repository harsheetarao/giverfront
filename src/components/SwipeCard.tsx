'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
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

  // Background color indicators for swipe direction
  const rightBgOpacity = useTransform(x, [0, 125], [0, 1]);
  const leftBgOpacity = useTransform(x, [-125, 0], [1, 0]);

  const dragEndHandler = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x);
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
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
      whileDrag={{ cursor: 'grabbing' }}
      initial={{ x: 0 }}
    >
      {/* Swipe Indicators */}
      <motion.div 
        className="absolute inset-0 bg-green-500/20 rounded-2xl z-10"
        style={{ opacity: rightBgOpacity }}
      >
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <Check className="w-12 h-12 text-green-500" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-red-500/20 rounded-2xl z-10"
        style={{ opacity: leftBgOpacity }}
      >
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <X className="w-12 h-12 text-red-500" />
        </div>
      </motion.div>

      {/* Card Content */}
      <div className="absolute inset-0 bg-white rounded-2xl border border-[#4B7163] p-4 flex flex-col">
        <div className="relative w-full h-3/5 rounded-2xl overflow-hidden mb-4">
          <img 
            src={imageUrl} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
