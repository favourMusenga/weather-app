import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import {
  LocalDateInfo,
  LocalTimeContainer,
  LocalTimeInfo,
  TimeZone,
} from '../styledComponents/WorldTimeStyledComponent';

interface CurrentTimeProps {}
export const CurrentTime: React.FC<CurrentTimeProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>local time</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <LocalTimeContainer>
          <LocalDateInfo>
            mon 28<sup>th</sup> sept 2020
          </LocalDateInfo>
          <LocalTimeInfo>8:00 pm</LocalTimeInfo>
          <TimeZone>Central African Time</TimeZone>
          <IonButton routerLink='/WorldTimeList'>check world time</IonButton>
        </LocalTimeContainer>
      </IonCardContent>
    </IonCard>
  );
};
