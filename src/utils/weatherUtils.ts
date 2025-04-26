import { WeatherCondition, WeatherData } from '../types/weather';

// Get proper background color based on weather condition and time of day
export const getWeatherBackground = (weatherData: WeatherData | null): string => {
  if (!weatherData) return 'bg-gradient-to-br from-blue-400 to-blue-600';
  
  const conditionCode = weatherData.current.condition.code;
  const localTime = new Date(weatherData.location.localtime);
  const hours = localTime.getHours();
  const isDay = hours >= 6 && hours < 20;

  // Clear
  if (conditionCode === 1000) {
    return isDay 
      ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
      : 'bg-gradient-to-br from-indigo-900 to-purple-900';
  }
  
  // Partly cloudy
  if (conditionCode >= 1003 && conditionCode <= 1030) {
    return isDay 
      ? 'bg-gradient-to-br from-blue-300 to-gray-400' 
      : 'bg-gradient-to-br from-gray-800 to-gray-900';
  }
  
  // Rain, drizzle, etc.
  if (conditionCode >= 1063 && conditionCode <= 1201) {
    return isDay 
      ? 'bg-gradient-to-br from-gray-400 to-gray-600' 
      : 'bg-gradient-to-br from-gray-800 to-gray-900';
  }
  
  // Snow
  if (conditionCode >= 1210 && conditionCode <= 1237) {
    return isDay 
      ? 'bg-gradient-to-br from-blue-100 to-blue-300' 
      : 'bg-gradient-to-br from-blue-900 to-gray-800';
  }
  
  // Fog, mist
  if (conditionCode >= 1135 && conditionCode <= 1147) {
    return isDay 
      ? 'bg-gradient-to-br from-gray-300 to-gray-500' 
      : 'bg-gradient-to-br from-gray-700 to-gray-900';
  }
  
  // Thunderstorm
  if (conditionCode >= 1273 && conditionCode <= 1282) {
    return isDay 
      ? 'bg-gradient-to-br from-gray-600 to-gray-800' 
      : 'bg-gradient-to-br from-gray-800 to-gray-900';
  }
  
  return isDay 
    ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
    : 'bg-gradient-to-br from-indigo-900 to-purple-900';
};

// Format date to readable string
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Format time to readable string (12-hour format)
export const formatTime = (timeString: string): string => {
  const time = new Date(timeString);
  return time.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
};

// Get weather condition description
export const getWeatherConditionEmoji = (conditionCode: number): string => {
  switch (conditionCode) {
    case 1000: // Sunny/Clear
      return '☀️';
    case 1003: // Partly cloudy
      return '⛅';
    case 1006: case 1009: // Cloudy
      return '☁️';
    case 1030: case 1135: case 1147: // Mist/Fog
      return '🌫️';
    case 1063: case 1150: case 1153: case 1180: case 1183: case 1186: case 1189: case 1192: case 1195: // Rain
      return '🌧️';
    case 1066: case 1114: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: // Snow
      return '❄️';
    case 1087: case 1273: case 1276: case 1279: case 1282: // Thunderstorm
      return '⛈️';
    default:
      return '🌤️';
  }
};