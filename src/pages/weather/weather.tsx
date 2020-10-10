import React, { useContext } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { CurrentWeatherInfo } from '../../components/WeatherComponenents/CurrentWeatherInfo';
import { WeeklyWeatherInfo } from '../../components/WeatherComponenents/WeeklyWeatherInfo';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { WeatherContext } from '../../contexts/WeatherContext';
interface WeatherProps {}
export const Weather: React.FC<WeatherProps> = () => {
  const { currentWeatherinfo, dailyWeatherInfo } = useContext(WeatherContext);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <CurrentWeatherInfo currentWeatherInfo={currentWeatherinfo} />
        <WeeklyWeatherInfo dailyWeather={dailyWeatherInfo} />
      </IonContent>
    </IonApp>
  );
};
