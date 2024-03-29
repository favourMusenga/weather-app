import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import {
  LocalDateInfo,
  LocalTimeContainer,
  LocalTimeInfo,
  TimeZone,
} from '../styledComponents/WorldTimeStyledComponent';
import { SetttingState } from '../../reducers/settingReducer';
import { useSelector } from 'react-redux';

interface CurrentTimeProps {}
export const CurrentTime: React.FC<CurrentTimeProps> = () => {
  const { timeFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  const [time, setTime] = useState<string>(
    DateTime.local().toFormat(timeFormat)
  );
  const [dateInfo, setDateInfo] = useState(
    DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
  );
  const timeZone = DateTime.local().toFormat('ZZZZZ');
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setInterval(() => setTime(DateTime.local().toFormat(timeFormat)), 1000);
      setDateInfo(
        DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
      );
    }
    return () => {
      clearInterval();
      isMounted = false;
    };
  }, [time]);
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>local time</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <LocalTimeContainer>
          <LocalDateInfo>{dateInfo}</LocalDateInfo>
          <LocalTimeInfo>{time}</LocalTimeInfo>
          <TimeZone> {timeZone} </TimeZone>
          <IonList style={{ width: '100%' }}>
            <IonListHeader>fun information</IonListHeader>
            <IonItem>
              <IonLabel>day of year</IonLabel>
              <IonText>{DateTime.local().toFormat('ooo')}</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>week number</IonLabel>
              <IonText>{DateTime.local().toFormat('WW')}</IonText>
            </IonItem>
          </IonList>
          <IonButton routerLink='/WorldTimeList'>check world time</IonButton>
        </LocalTimeContainer>
      </IonCardContent>
    </IonCard>
  );
};
