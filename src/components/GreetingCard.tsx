
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface GreetingCardProps {
  greeting: string;
  language: string;
  country: string;
  color: "blue" | "green" | "coral" | "purple" | "yellow" | "teal";
  flagEmoji: string;
  pronunciation?: string;
}

const GreetingCard = ({
  greeting,
  language,
  country,
  color,
  flagEmoji,
  pronunciation,
}: GreetingCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-greeting-blue",
    green: "bg-gradient-to-br from-green-50 to-green-100 border-greeting-green",
    coral: "bg-gradient-to-br from-red-50 to-red-100 border-greeting-coral",
    purple: "bg-gradient-to-br from-purple-50 to-purple-100 border-greeting-purple",
    yellow: "bg-gradient-to-br from-amber-50 to-amber-100 border-greeting-yellow",
    teal: "bg-gradient-to-br from-teal-50 to-teal-100 border-greeting-teal",
  };

  const textColorClasses = {
    blue: "text-greeting-blue",
    green: "text-greeting-green",
    coral: "text-greeting-coral",
    purple: "text-greeting-purple",
    yellow: "text-greeting-yellow",
    teal: "text-greeting-teal",
  };

  return (
    <div 
      className={cn(
        "greeting-card cursor-pointer w-full h-64 md:h-80 mb-6", 
        isFlipped && "flipped"
      )}
      onClick={handleFlip}
    >
      <div className="greeting-card-inner h-full">
        <div className={cn(
          "greeting-card-front shadow-md border-2 p-6 flex flex-col items-center justify-center",
          colorClasses[color]
        )}>
          <div className="text-6xl mb-4">{flagEmoji}</div>
          <h2 className={cn("font-serif text-3xl md:text-4xl font-bold mb-2", textColorClasses[color])}>
            {greeting}
          </h2>
          <p className="text-gray-600">{language}</p>
        </div>
        <div className={cn(
          "greeting-card-back shadow-md border-2 p-6 flex flex-col items-center justify-center",
          colorClasses[color]
        )}>
          <h3 className="text-xl font-bold mb-2">{country}</h3>
          {pronunciation && (
            <div className="mb-4">
              <span className="text-sm text-gray-600">Pronunciation:</span>
              <p className="italic font-medium">{pronunciation}</p>
            </div>
          )}
          <div className="flex items-center justify-center mt-2">
            <span className="text-sm text-gray-500">Tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
