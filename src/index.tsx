import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WeatherContextProvider from './contexts/WeatherContext';
import { WorldTimeContextProvider } from './contexts/WorldTimeContext';



ReactDOM.render(<WeatherContextProvider><WorldTimeContextProvider><App /></WorldTimeContextProvider></WeatherContextProvider>, document.getElementById('root'));

