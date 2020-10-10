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
}
export const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = ({
  currentWeatherInfo,
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
          />
        </IonCardContent>
      </IonCard>
    </>
  );
};
