import { IonCard, IonCardContent, IonToggle } from '@ionic/react';
import React from 'react';
import {
  AlarmContainer,
  AlarmTime,
  AlarmDateInfo,
  AlarmDate,
} from '../styledComponents/AlarmStyledComponents';

interface AlarmCardProps {}
export const AlarmCard: React.FC<AlarmCardProps> = () => {
  return (
    <IonCard>
      <IonCardContent>
        <AlarmContainer>
          <AlarmTime>8:00 pm</AlarmTime>
          <AlarmDateInfo>
            <AlarmDate>wed 29 sept</AlarmDate>
            <IonToggle />
          </AlarmDateInfo>
        </AlarmContainer>
      </IonCardContent>
    </IonCard>
  );
};
