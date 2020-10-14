import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import { currentweatherType } from '../../types/weatherType';
import { DisplayOverviewWeatherInfo } from './DisplayOverviewWeatherInfo';

interface CurrentWeatherInfoProps {
  currentWeatherInfo: currentweatherType;
  city: string;
}
export const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = ({
  currentWeatherInfo,
  city,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Current weather info</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <DisplayOverviewWeatherInfo
            temp={currentWeatherInfo.temp!}
            description={currentWeatherInfo.description!}
            weatherIcon={currentWeatherInfo.weatherIcon!}
            city={city}
          />
        </IonCardContent>
      </IonCard>
    </>
  );
};
