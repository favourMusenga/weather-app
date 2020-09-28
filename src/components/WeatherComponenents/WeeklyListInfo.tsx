import { IonIcon, IonItem, IonLabel, IonText, isPlatform } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import React from 'react';

interface WeeklyListInfoProps {}
export const WeeklyListInfo: React.FC<WeeklyListInfoProps> = () => {
  return (
    <IonItem routerLink='/WeeklyWeatherDetails'>
      <IonLabel>tueday</IonLabel>
      <IonText>10 &deg; C</IonText>
      {isPlatform('android') ? <IonIcon icon={chevronForward} /> : null}
    </IonItem>
  );
};
