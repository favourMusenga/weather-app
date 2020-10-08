import React from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import FloatBtn from '../../components/shared/FloatBtn';
import { AlarmCard } from '../../components/AlarmComponenents/AlarmCard';

interface AlarmProps {}
export const Alarm: React.FC<AlarmProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alarm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <AlarmCard />
        <FloatBtn link='AddAlarm' />
      </IonContent>
    </IonApp>
  );
};
