import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

interface WorldTimeProps {}
export const WorldTime: React.FC<WorldTimeProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>World time</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>world time</h1>
      </IonContent>
    </IonApp>
  );
};
