
# 🌍 Weather Forecast Web Application

*(Built with React.js, TypeScript, Vite, and Tailwind CSS)*

---

## 1. Introduction

The **Weather Forecast Web Application** is a responsive and interactive web app that allows users to view real-time weather information for any city worldwide. Built using React.js and TypeScript, the application integrates with the Weather Forecast API to fetch current and future weather data. The project emphasizes modularity, clean code architecture, and delivering a great user experience across different devices.

## 2. Objectives

- Create a dynamic and scalable weather forecast web app using modern web technologies.
- Implement real-time API integration for fetching accurate weather data.
- Enhance code reliability and maintainability with TypeScript.
- Apply modular coding practices by separating components, services, utilities, and types.

## 3. Tools and Technologies Used

- **React.js**: Frontend development
- **TypeScript**: Strong typing and improved developer experience
- **Vite**: Project scaffolding and build tool
- **Tailwind CSS**: Utility-first styling and responsiveness
- **Weather Forecast API**: Source of real-time weather data
- **Axios**: HTTP client for API requests
- **Git & GitHub**: Version control and code hosting

## 4. Project Structure

```plaintext
src/
|
├── components/
│   ├── CurrentWeather.tsx
│   ├── ErrorMessage.tsx
│   ├── Forecast.tsx
│   ├── ForecastDay.tsx
│   ├── LocationButton.tsx
│   ├── SearchBar.tsx
│   └── UnitToggle.tsx
|
├── services/
│   └── weatherService.ts
|
├── types/
│   └── weather.ts
|
├── utils/
│   └── weatherUtils.ts
|
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## 5. Core Features

- City-based weather search
- Current weather details
- 5-day forecast display
- Temperature unit toggle (Celsius/Fahrenheit)
- Location-based weather using geolocation
- Graceful error handling
- Fully responsive user interface

## 6. API Integration

Weather data is fetched from the Weather Forecast API through a service layer (`weatherService.ts`).

Example usage:

```typescript
const fetchWeatherData = async (city: string, unit: string) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
    },
  });
  return response.data;
};
```

TypeScript models are used to ensure consistent and safe data handling.

## 7. Challenges Faced

- Typing complex, nested API responses using TypeScript
- Managing asynchronous operations and handling errors effectively
- Designing a scalable and maintainable architecture
- Ensuring responsive design across various screen sizes
- Validating and handling incorrect user inputs

## 8. Outcome

The project was successfully completed, fulfilling all stated objectives. The resulting application is functional, scalable, user-friendly, and demonstrates best practices in React.js and TypeScript development.

## 9. Future Enhancements

- Add hourly weather forecasts
- Integrate animated weather icons
- Implement a feature to save favorite cities
- Add a dark/light mode theme toggle
- Deploy PWA (Progressive Web App) features for offline usage

## 10. Commands to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

*(Attach screenshots such as Homepage, Weather Results, Error Messages, and Mobile Views.)*

## 11. Conclusion

This project provided valuable hands-on experience in building a full-stack React application with real-time API integration. It significantly strengthened skills in frontend development, TypeScript, API handling, and responsive UI design.

---

> **Crafted with passion and precision.** 💛

