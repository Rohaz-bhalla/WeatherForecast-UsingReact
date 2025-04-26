import React, { useState, useEffect } from 'react';
import { getWeatherData, getUserLocation } from './services/weatherService';
import { WeatherData, TemperatureUnit } from './types/weather';
import { getWeatherBackground } from './utils/weatherUtils';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import ErrorMessage from './components/ErrorMessage';
import LocationButton from './components/LocationButton';
import { CloudSun } from 'lucide-react';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('celsius');
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    if (initialLoad) {
      fetchUserLocationWeather();
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const fetchUserLocationWeather = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const position = await getUserLocation();
      const { latitude, longitude } = position.coords;
      const data = await getWeatherData(`${latitude},${longitude}`);
      setWeatherData(data);
    } catch (err: any) {
      console.error('Error getting user location weather:', err);
      const errorMessage = err.message.includes('Location access was denied') 
        ? err.message
        : 'Could not get your location. Please search for a city manually.';
      setError(errorMessage);
      
      // Only fetch default location if it's not a 403 error
      if (!err.message.includes('API key is invalid')) {
        await fetchWeatherForLocation('London');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherForLocation = async (location: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherData(location);
      setWeatherData(data);
    } catch (err: any) {
      console.error('Error fetching weather:', err);
      const errorMessage = err.message.includes('API key is invalid')
        ? err.message
        : 'City not found. Please try another location.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (location: string) => {
    fetchWeatherForLocation(location);
  };

  const clearError = () => {
    setError(null);
  };

  const backgroundClass = getWeatherBackground(weatherData);

  return (
    <div className={`min-h-screen p-4 sm:p-6 md:p-8 transition-all duration-1000 ${backgroundClass}`}>
      {error && <ErrorMessage message={error} onClose={clearError} />}
      
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-center items-center mb-8">
          <CloudSun className="w-8 h-8 text-white mr-2" />
          <h1 className="text-2xl font-bold text-white">Weather Forecast</h1>
        </header>
        
        <UnitToggle tempUnit={tempUnit} setTempUnit={setTempUnit} />
        
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg">Loading weather data...</p>
          </div>
        ) : weatherData ? (
          <div className="animate-fadeIn">
            <CurrentWeather weatherData={weatherData} tempUnit={tempUnit} />
            <Forecast weatherData={weatherData} tempUnit={tempUnit} />
          </div>
        ) : (
          <div className="text-center p-12 text-white">
            <p>Search for a location to see the weather forecast</p>
          </div>
        )}
      </div>
      
      <LocationButton onClick={fetchUserLocationWeather} isLoading={loading} />
    </div>
  );
}

export default App;