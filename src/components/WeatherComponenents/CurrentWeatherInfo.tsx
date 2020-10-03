import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import { DisplayOverviewWeatherInfo } from './DisplayOverviewWeatherInfo';

interface CurrentWeatherInfoProps {}
export const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Current weather info</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <DisplayOverviewWeatherInfo />
        </IonCardContent>
      </IonCard>
    </>
  );
};
