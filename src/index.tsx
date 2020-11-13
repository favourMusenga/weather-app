import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WeatherContextProvider from './contexts/WeatherContext';
import { WorldTimeContextProvider } from './contexts/WorldTimeContext';
import { AlarmContextProvider } from './contexts/AlarmContext';

ReactDOM.render(
  <WeatherContextProvider>
    <AlarmContextProvider>
      <WorldTimeContextProvider>
        <App />
      </WorldTimeContextProvider>
    </AlarmContextProvider>
  </WeatherContextProvider>,
  document.getElementById('root')
);
