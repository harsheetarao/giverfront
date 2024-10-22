'use client';

import React, { useState, useEffect } from 'react';
import { SwipeCard } from './SwipeCard';

interface CardData {
  id: string | number;
  imageUrl: string;
  alt: string;
  content: React.ReactNode;
}

interface SwipeCardDeckProps {
  cards: CardData[];
  onSwipeLeft?: (card: CardData) => void;
  onSwipeRight?: (card: CardData) => void;
  onEmpty?: () => void;
}

export const SwipeCardDeck = ({ 
  cards, 
  onSwipeLeft, 
  onSwipeRight, 
  onEmpty 
}: SwipeCardDeckProps) => {
  const [currentCards, setCurrentCards] = useState<CardData[]>(cards);
  const [history, setHistory] = useState<{card: CardData, direction: 'left' | 'right'}[]>([]);

  useEffect(() => {
    if (currentCards.length === 0) {
      onEmpty?.();
    }
  }, [currentCards, onEmpty]);

  const handleSwipe = (direction: 'left' | 'right', card: CardData) => {
    // Add to history
    setHistory(prev => [...prev, { card, direction }]);
    
    // Remove the card from the deck
    setCurrentCards(prev => prev.filter(c => c.id !== card.id));
    
    // Call the appropriate callback
    if (direction === 'left') {
      onSwipeLeft?.(card);
    } else {
      onSwipeRight?.(card);
    }
  };

  const undoLastSwipe = () => {
    if (history.length === 0) return;
    
    const lastAction = history[history.length - 1];
    setCurrentCards(prev => [...prev, lastAction.card]);
    setHistory(prev => prev.slice(0, -1));
  };

  return (
    <div className="relative w-full max-w-[300px] mx-auto h-[400px]">
      {/* Cards */}
      <div className="relative w-full h-full">
        {currentCards.map((card, index) => {
          const isTop = index === currentCards.length - 1;
          return (
            <SwipeCard
              key={card.id}
              imageUrl={card.imageUrl}
              alt={card.alt}
              isVisible={index >= currentCards.length - 3} // Only render the top 3 cards
              onSwipe={(direction) => handleSwipe(direction, card)}
            >
              {card.content}
            </SwipeCard>
          );
        })}
      </div>
      
      {/* Undo Button */}
      {history.length > 0 && (
        <button
          onClick={undoLastSwipe}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4 
                     px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600
                     hover:bg-gray-200 transition-colors"
        >
          Undo
        </button>
      )}
    </div>
  );
};
