import React from 'react';
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
} from '@ionic/react';
import { TemperatureInfo } from '../../components/WeatherComponenents/TemperatureInfo';

interface WeeklyWeatherDetailsProps {}
export const WeeklyWeatherDetails: React.FC<WeeklyWeatherDetailsProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>on 26 th sept</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <TemperatureInfo />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};
