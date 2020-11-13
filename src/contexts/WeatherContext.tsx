import Axios, { AxiosResponse } from 'axios';
import { DateTime } from 'luxon';
import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';
import { RefetchOptions } from 'react-query/types/core/query';
import { useSelector } from 'react-redux';
import useLocation from '../hooks/useLocation';
import { SetttingState } from '../reducers/settingReducer';
import {
  currentweatherType,
  dailyWeatherType,
  hourlyWeatherType,
} from '../types/weatherType';

export const WeatherContext = createContext<{
  dailyWeatherInfo: dailyWeatherType;
  currentWeatherinfo: currentweatherType;
  hourlyWeatherInfo: hourlyWeatherType;
  city: string;
  isLoading: boolean;
  isError: boolean;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<AxiosResponse<any> | null | undefined>;
}>({
  dailyWeatherInfo: [],
  currentWeatherinfo: {},
  hourlyWeatherInfo: [],
  city: '',
  isLoading: false,
  isError: false,
  refetch: (options): Promise<null> => new Promise((rev, reject) => null),
});

const API_KEY = process.env.REACT_APP_API_KEY;

async function fetchWeatherInfo(
  key: string,
  latitude: string,
  longitude: string,
  temperatureFormat: string
) {
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}&units=${temperatureFormat}`;

  if (latitude === '' || longitude === '') {
    return null;
  }
  const json = await Axios(api);

  return json;
}
const WEATHER_ICON = {
  thunderstorm: 'wi-thinderstorm',
  dizzle: 'wi-sleet',
  rain: 'wi-rain',
  atomsphere: 'wi-fog',
  snow: 'wi-snow',
  clear: 'wi-day-sunny',
  clouds: 'wi-day-fog',
};
function getWeatherIcon(id: number) {
  if (id >= 200 && id <= 232) {
    return WEATHER_ICON.thunderstorm;
  } else if (id >= 300 && id <= 321) {
    return WEATHER_ICON.dizzle;
  } else if (id >= 500 && id <= 531) {
    return WEATHER_ICON.rain;
  } else if (id >= 600 && id <= 622) {
    return WEATHER_ICON.snow;
  } else if (id >= 700 && id <= 781) {
    return WEATHER_ICON.atomsphere;
  } else if (id === 800) {
    return WEATHER_ICON.clear;
  } else if (id >= 801 && id <= 804) {
    return WEATHER_ICON.clouds;
  } else {
    return 'unknown';
  }
}

const WeatherContextProvider: React.FC = ({ children }) => {
  let currentWeather: object = {};
  let dailyWeather: dailyWeatherType = [];
  let hourlyWeather: Array<object> = [];
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );

  const { longitude, latitude } = useLocation();
  const [city] = useState<string>('local');

  const { data, isLoading, isError, refetch } = useQuery(
    ['weather', latitude, longitude, temperatureFormat],
    fetchWeatherInfo,
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      refetchOnMount: false,
    }
  );
  const weatherDataJson = data?.data;
  console.log(data);

  if (weatherDataJson) {
    currentWeather = {
      temp: weatherDataJson.current.temp,
      windSpeed: weatherDataJson.current.wind_speed,
      humidity: weatherDataJson.current.humidity,
      weatherIcon: getWeatherIcon(+weatherDataJson.current.weather[0].id),
      description: weatherDataJson.current.weather[0].description,
    };
    console.log(
      DateTime.fromJSDate(new Date(weatherDataJson.current.dt * 1000))
        .setZone(weatherDataJson.timezone)
        .toFormat('ccc dd MMM HH:mm')
    );

    const filteredWeatherDataJson = weatherDataJson.hourly.filter(
      (hourlyInfo: any) => +weatherDataJson.current.dt < +hourlyInfo.dt
    );
    hourlyWeather = filteredWeatherDataJson.map((hourlyTemp: any) => ({
      dt: DateTime.fromJSDate(new Date(hourlyTemp.dt * 1000))
        .setZone(weatherDataJson.timezone)
        .toFormat('HH:mm'),
      temp: hourlyTemp.temp,
      windSpeed: hourlyTemp.wind_speed,
      humidity: hourlyTemp.humidity,
      feels_like: hourlyTemp.feels_like,
    }));

    dailyWeather = weatherDataJson.daily.map((dailyTemp: any, index: any) => {
      return {
        id: index,
        dt: DateTime.fromJSDate(new Date(dailyTemp.dt * 1000))
          .setZone(weatherDataJson.timezone)
          .toFormat('ccc dd MMM'),
        temp_day: dailyTemp.temp.day,
        temp_eve: dailyTemp.temp.eve,
        temp_night: dailyTemp.temp.night,
        temp_morning: dailyTemp.temp.morn,
        temp_min: dailyTemp.temp.min,
        temp_max: dailyTemp.temp.max,
        windSpeed: dailyTemp.wind_speed,
        humidity: dailyTemp.humidity,
        sunrise: DateTime.fromJSDate(new Date(dailyTemp.sunrise * 1000))
          .setZone(weatherDataJson.timezone)
          .toFormat('HH:mm'),
        sunset: DateTime.fromJSDate(new Date(dailyTemp.sunset * 1000))
          .setZone(weatherDataJson.timezone)
          .toFormat('HH:mm'),
        weatherIcon: getWeatherIcon(+dailyTemp.weather[0].id),
        description: dailyTemp.weather[0].description,
      };
    });
    dailyWeather.shift();
    hourlyWeather = hourlyWeather.slice(0, 25);
    console.log(dailyWeather);
  }

  return (
    <WeatherContext.Provider
      value={{
        dailyWeatherInfo: dailyWeather,
        currentWeatherinfo: currentWeather,
        hourlyWeatherInfo: hourlyWeather,
        city: city,
        isLoading: isLoading,
        isError: isError,
        refetch: refetch,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
