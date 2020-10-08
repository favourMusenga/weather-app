import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

interface AddAlarmProps {}
export const AddAlarm: React.FC<AddAlarmProps> = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/Alarm' />
            <IonTitle>Add alarm</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>add alarm</IonTitle>
        <IonItem>
          <IonLabel>add time</IonLabel>
          <IonDatetime displayFormat='h:mm a' placeholder='add time' />
        </IonItem>
        <IonItem>
          <IonLabel>add time</IonLabel>
          <IonDatetime
            displayFormat='DDD DD MMM '
            pickerFormat='DDD DD MMM'
            placeholder='add time'
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
};
