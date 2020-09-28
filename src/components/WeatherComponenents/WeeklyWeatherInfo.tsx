import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import { WeeklyListInfo } from './WeeklyListInfo';

interface WeeklyWeatherInfoProps {}
export const WeeklyWeatherInfo: React.FC<WeeklyWeatherInfoProps> = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>next 5 days weather</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <WeeklyListInfo />
        </IonCardContent>
      </IonCard>
    </>
  );
};
