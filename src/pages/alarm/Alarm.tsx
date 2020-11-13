import React, { useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import FloatBtn from '../../components/shared/FloatBtn';
import { AlarmCard } from '../../components/AlarmComponenents/AlarmCard';
import { AlarmContext } from '../../contexts/AlarmContext';

interface AlarmProps {}
export const Alarm: React.FC<AlarmProps> = () => {
  const { alarmDateList, dispatch, onIsCompleteChange } = useContext(
    AlarmContext
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alarm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {alarmDateList.map((alarmDate) => (
          <AlarmCard
            key={Array.isArray(alarmDate.id) ? alarmDate.id[0] : alarmDate.id}
            id={alarmDate.id!}
            time={alarmDate.time!}
            days={alarmDate.days!}
            dispatch={dispatch}
            isCompleted={alarmDate.isCompleted!}
            alarmName={alarmDate.alarmName!}
            onIsCompleteChange={onIsCompleteChange}
          />
        ))}
        <FloatBtn link='AddAlarm' />
      </IonContent>
    </IonPage>
  );
};
