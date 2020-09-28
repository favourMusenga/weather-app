import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react'

interface WorldTimeListProps {

}
export const WorldTimeList: React.FC<WorldTimeListProps> = ({}) => {
        return (
          <IonApp>
            <IonHeader>
              <IonToolbar>
                <IonTitle>weather</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <h1>weather</h1>
            </IonContent>
          </IonApp>
        );
}