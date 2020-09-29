import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import FloatBtn from '../components/shared/FloatBtn';
import { WorldTimeCard } from '../components/worldTimeComponenents/WorldTimeCard';

interface WorldTimeListProps {}
export const WorldTimeList: React.FC<WorldTimeListProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>world time</IonTitle>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/WorldTime' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <WorldTimeCard />
        <WorldTimeCard />
        <FloatBtn link='AddNewTimeZone' />
      </IonContent>
    </IonApp>
  );
};
