import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';
import ForecastDay from './ForecastDay';

interface ForecastProps {
  weatherData: WeatherData;
  tempUnit: TemperatureUnit;
}

const Forecast: React.FC<ForecastProps> = ({ weatherData, tempUnit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-medium mb-4 text-white">5-Day Forecast</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {weatherData.forecast.forecastday.map((day, index) => (
          <ForecastDay 
            key={day.date} 
            forecast={day} 
            tempUnit={tempUnit}
            isToday={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;