import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { CurrentTime } from '../../components/worldTimeComponenents/CurrentTime';

interface WorldTimeProps {}
export const WorldTime: React.FC<WorldTimeProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Local time</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <CurrentTime />
      </IonContent>
    </IonApp>
  );
};
