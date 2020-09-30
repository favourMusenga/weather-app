import React, { createContext } from 'react';

interface WeatherContextProps {}
export const WeatherContext = createContext<
  | { weeklyWeatherInfo: {}; currentWeatherinfo: {}; hourlyWeatherInfo: {} }
  | string
>('');

const WeatherContextProvider: React.FC<WeatherContextProps> = ({
  children,
}) => {
  return (
    <WeatherContext.Provider value='favour'>{children}</WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
