import { IonIcon, IonItem, IonLabel, IonText, isPlatform } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import React from 'react';

interface WeeklyListInfoProps {
  date: string;
  temp: string;
  id: string;
}
export const WeeklyListInfo: React.FC<WeeklyListInfoProps> = ({
  date,
  temp,
  id,
}) => {
  return (
    <IonItem routerLink={`/WeeklyWeatherDetails/${id}`}>
      <IonLabel>{date}</IonLabel>
      <IonText>{temp} &deg; C</IonText>
      {isPlatform('android') ? <IonIcon icon={chevronForward} /> : null}
    </IonItem>
  );
};
