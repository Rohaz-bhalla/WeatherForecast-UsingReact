import React from 'react';
import { WeatherData, TemperatureUnit } from '../types/weather';
import { formatTime, getWeatherConditionEmoji } from '../utils/weatherUtils';
import { Droplets, Wind } from 'lucide-react';

interface CurrentWeatherProps {
  weatherData: WeatherData;
  tempUnit: TemperatureUnit;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData, tempUnit }) => {
  const { current, location } = weatherData;
  
  // Get temperature based on selected unit
  const temperature = tempUnit === 'celsius' ? current.temp_c : current.temp_f;
  const feelsLike = tempUnit === 'celsius' ? current.feelslike_c : current.feelslike_f;
  
  return (
    <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 p-6 text-white transition-all duration-500 animate-fadeIn shadow-lg border border-white/10">
      <header className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-1">{location.name}</h1>
          <p className="text-white/80">{location.country}</p>
        </div>
        <p className="text-white/80 mt-2 sm:mt-0">
          {formatTime(location.localtime)}
        </p>
      </header>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-7xl mr-4 transition-all duration-300 hover:scale-110">
            {getWeatherConditionEmoji(current.condition.code)}
          </span>
          <div>
            <p className="text-5xl font-light">
              {Math.round(temperature)}°{tempUnit === 'celsius' ? 'C' : 'F'}
            </p>
            <p className="text-white/80">{current.condition.text}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Droplets className="w-5 h-5 mr-2 text-blue-300" />
            <span>Humidity: {current.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Wind className="w-5 h-5 mr-2 text-blue-300" />
            <span>Wind: {current.wind_kph} km/h {current.wind_dir}</span>
          </div>
          <div>
            <span>Feels like: {Math.round(feelsLike)}°{tempUnit === 'celsius' ? 'C' : 'F'}</span>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 z-0"
        style={{ filter: 'blur(30px)' }}
      ></div>
    </div>
  );
};

export default CurrentWeather;