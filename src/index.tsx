import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WeatherContextProvider from './contexts/WeatherContext';
import { WorldTimeContextProvider } from './contexts/WorldTimeContext';
import { AlarmContextProvider } from './contexts/AlarmContext';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <WeatherContextProvider>
      <AlarmContextProvider>
        <WorldTimeContextProvider>
          <App />
        </WorldTimeContextProvider>
      </AlarmContextProvider>
    </WeatherContextProvider>
  </Provider>,
  document.getElementById('root')
);
