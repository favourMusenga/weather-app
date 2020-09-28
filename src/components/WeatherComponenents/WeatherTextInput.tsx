import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';

interface WeatherTextInputProps {}
export const WeatherTextInput: React.FC<WeatherTextInputProps> = () => {
  return (
    <IonItem>
      <IonLabel position='floating'>search for city</IonLabel>
      <IonInput></IonInput>
    </IonItem>
  );
};
