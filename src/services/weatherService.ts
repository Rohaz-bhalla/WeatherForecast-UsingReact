import axios from 'axios';
import { WeatherData } from '../types/weather';

// Correct API key usage
const API_KEY = import.meta.env.VITE_API_WEATHER;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherData = async (location: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location,
        days: 5,
        aqi: 'no',
        alerts: 'no',
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 403) {
      throw new Error('API key is invalid or expired. Please check your API configuration.');
    }
    throw error;
  }
};

export const getUserLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        resolve,
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error('Location access was denied. Please enable location services or search manually.'));
          } else {
            reject(error);
          }
        }
      );
    }
  });
};
