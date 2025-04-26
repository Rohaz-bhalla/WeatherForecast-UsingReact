import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const LocationButton: React.FC<LocationButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="fixed bottom-8 right-8 z-10 bg-white/20 hover:bg-white/30
                backdrop-blur-md rounded-full p-3 border border-white/10
                transition-all duration-300 hover:scale-110
                shadow-lg disabled:opacity-50 disabled:hover:scale-100"
      aria-label="Use current location"
    >
      <MapPin className="h-6 w-6 text-white" />
    </button>
  );
};

export default LocationButton;