import React, { createContext } from 'react';
export const WeatherContext = createContext<{
  weeklyWeatherInfo: {};
  currentWeatherinfo: {};
  hourlyWeatherInfo: {};
}>({ weeklyWeatherInfo: {}, currentWeatherinfo: {}, hourlyWeatherInfo: {} });

const WeatherContextProvider: React.FC = ({ children }) => {
  return (
    <WeatherContext.Provider
      value={{
        weeklyWeatherInfo: {},
        currentWeatherinfo: {},
        hourlyWeatherInfo: {},
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
