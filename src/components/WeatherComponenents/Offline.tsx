import { IonCard, IonCardContent, IonImg, IonText } from '@ionic/react';
import React from 'react';
import image from '../../assets/no-signal.svg';

export const Offline: React.FC = () => {
  return (
    <IonCard className='d-flex justify-content-center align-items-center '>
      <IonCardContent>
        <IonImg src={image} style={{ height: '100px', width: '100px' }} />
        <IonText>you are offline</IonText>
      </IonCardContent>
    </IonCard>
  );
};
