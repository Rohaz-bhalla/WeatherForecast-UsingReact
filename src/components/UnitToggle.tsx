import React from 'react';
import { TemperatureUnit } from '../types/weather';

interface UnitToggleProps {
  tempUnit: TemperatureUnit;
  setTempUnit: (unit: TemperatureUnit) => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ tempUnit, setTempUnit }) => {
  return (
    <div className="fixed top-4 right-4 z-10 bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/10">
      <div className="flex">
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
            tempUnit === 'celsius' 
              ? 'bg-white text-blue-900' 
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setTempUnit('celsius')}
        >
          °C
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
            tempUnit === 'fahrenheit' 
              ? 'bg-white text-blue-900' 
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setTempUnit('fahrenheit')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default UnitToggle;