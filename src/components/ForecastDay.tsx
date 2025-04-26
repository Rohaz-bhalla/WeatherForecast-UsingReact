import React from 'react';
import { ForecastDay as ForecastDayType, TemperatureUnit } from '../types/weather';
import { formatDate, getWeatherConditionEmoji } from '../utils/weatherUtils';

interface ForecastDayProps {
  forecast: ForecastDayType;
  tempUnit: TemperatureUnit;
  isToday?: boolean;
}

const ForecastDay: React.FC<ForecastDayProps> = ({ forecast, tempUnit, isToday = false }) => {
  const { date, day } = forecast;
  
  // Get temperature based on selected unit
  const maxTemp = tempUnit === 'celsius' ? day.maxtemp_c : day.maxtemp_f;
  const minTemp = tempUnit === 'celsius' ? day.mintemp_c : day.mintemp_f;
  
  return (
    <div className={`
      backdrop-blur-md bg-white/10 rounded-xl p-4 
      flex flex-col items-center transition-transform duration-300
      border border-white/10 hover:bg-white/20
      ${isToday ? 'border-white/30 bg-white/20' : ''}
    `}>
      <h3 className="font-medium mb-2">{isToday ? 'Today' : formatDate(date)}</h3>
      
      <div className="my-2 text-3xl">
        {getWeatherConditionEmoji(day.condition.code)}
      </div>
      
      <p className="text-sm mb-1">{day.condition.text}</p>
      
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="font-medium">
          {Math.round(maxTemp)}°
        </span>
        <span className="text-white/70">
          {Math.round(minTemp)}°
        </span>
      </div>
      
      {day.daily_chance_of_rain > 0 && (
        <p className="text-xs mt-2 text-blue-200">
          {day.daily_chance_of_rain}% chance of rain
        </p>
      )}
    </div>
  );
};

export default ForecastDay;