import React, { useContext } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonLoading,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { CurrentWeatherInfo } from '../../components/WeatherComponenents/CurrentWeatherInfo';
import { WeeklyWeatherInfo } from '../../components/WeatherComponenents/WeeklyWeatherInfo';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { WeatherContext } from '../../contexts/WeatherContext';
import { ReactQueryDevtools } from 'react-query-devtools';
interface WeatherProps {}
export const Weather: React.FC<WeatherProps> = () => {
  const { currentWeatherinfo, dailyWeatherInfo, city, isLoading } = useContext(
    WeatherContext
  );
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {isLoading ? (
          <IonLoading isOpen={true} />
        ) : (
          <>
            <CurrentWeatherInfo
              currentWeatherInfo={currentWeatherinfo}
              city={city}
            />
            <WeeklyWeatherInfo dailyWeather={dailyWeatherInfo} />
          </>
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </IonContent>
    </IonApp>
  );
};
