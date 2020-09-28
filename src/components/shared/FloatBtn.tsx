import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';

interface FloatBtnProps {
  link: string;
}

const FloatBtn: React.FC<FloatBtnProps> = ({ link }) => {
  return (
    <IonFab vertical='bottom' horizontal='end' slot='fixed'>
      <IonFabButton routerLink={`/${link}`}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  );
};

export default FloatBtn;
