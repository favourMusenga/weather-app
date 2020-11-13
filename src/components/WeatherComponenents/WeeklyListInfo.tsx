import { IonIcon, IonItem, IonLabel, IonText, isPlatform } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { SetttingState } from '../../reducers/settingReducer';

interface WeeklyListInfoProps {
  date: string;
  temp: string;
  id: string;
}
export const WeeklyListInfo: React.FC<WeeklyListInfoProps> = ({
  date,
  temp,
  id,
}) => {
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  return (
    <IonItem routerLink={`/WeeklyWeatherDetails/${id}`}>
      <IonLabel>{date}</IonLabel>
      <IonText>
        {temp} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
      </IonText>
      {isPlatform('android') ? <IonIcon icon={chevronForward} /> : null}
    </IonItem>
  );
};
