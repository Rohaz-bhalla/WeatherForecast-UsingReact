export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_dir: string;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    daily_chance_of_rain: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: {
    time: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    chance_of_rain: number;
  }[];
}

export type TemperatureUnit = 'celsius' | 'fahrenheit';

export interface WeatherCondition {
  code: number;
  day: string;
  night: string;
  icon: number;
}