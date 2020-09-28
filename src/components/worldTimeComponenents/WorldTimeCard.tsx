import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import {
  City,
  CurrentDate,
  CurrentDateContainer,
  CurrentTime,
  TimeDifference,
  WorldTimeContainer,
  WorldTimeLocaltionInfo,
} from '../styledComponents/WorldTimeStyledComponent';

interface WorldTimeCardProps {}
export const WorldTimeCard: React.FC<WorldTimeCardProps> = () => {
  return (
    <IonCard>
      <IonCardContent>
        <WorldTimeContainer>
          <WorldTimeLocaltionInfo>
            <City>New York</City>
            <TimeDifference>6 hours behind</TimeDifference>
          </WorldTimeLocaltionInfo>
          <CurrentDateContainer>
            <CurrentTime>15:00 pm</CurrentTime>
            <CurrentDate>mon 28 sept</CurrentDate>
          </CurrentDateContainer>
        </WorldTimeContainer>
      </IonCardContent>
    </IonCard>
  );
};
