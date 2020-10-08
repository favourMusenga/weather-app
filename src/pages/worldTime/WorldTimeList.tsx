import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import FloatBtn from '../../components/shared/FloatBtn';
import { WorldTimeCard } from '../../components/worldTimeComponenents/WorldTimeCard';
import { WorldTimeContext } from '../../contexts/WorldTimeContext';

interface WorldTimeListProps {}
export const WorldTimeList: React.FC<WorldTimeListProps> = () => {
  const { userWorldTimeList, dispatch } = useContext(WorldTimeContext);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>world time</IonTitle>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/WorldTime' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {userWorldTimeList.map((worldTime) => (
          <WorldTimeCard
            key={worldTime.id}
            worldTime={worldTime}
            dispatch={dispatch}
          />
        ))}
        <FloatBtn link='AddNewTimeZone' />
      </IonContent>
    </IonApp>
  );
};
