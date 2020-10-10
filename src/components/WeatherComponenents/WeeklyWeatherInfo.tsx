import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import { dailyWeatherType } from '../../types/weatherType';
import { WeeklyListInfo } from './WeeklyListInfo';

interface WeeklyWeatherInfoProps {
  dailyWeather: dailyWeatherType;
}
export const WeeklyWeatherInfo: React.FC<WeeklyWeatherInfoProps> = ({
  dailyWeather,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>next 7 days weather</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {dailyWeather.map((weatherInfo) => (
            <WeeklyListInfo
              key={weatherInfo.id}
              temp={weatherInfo.temp_day!}
              date={weatherInfo.dt!}
              id={weatherInfo.id!}
            />
          ))}
        </IonCardContent>
      </IonCard>
    </>
  );
};
