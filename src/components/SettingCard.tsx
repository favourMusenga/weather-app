import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from '../actions/SettingAction';
import { SetttingState } from '../reducers/settingReducer';

interface SettingCardProps {}
const SettingCard: React.FC<SettingCardProps> = () => {
  const dispatchRedux = useDispatch();
  const { temperatureFormat, timeFormat } = useSelector<
    SetttingState,
    SetttingState
  >((state) => state);
  const [timeFormatSelected, setTimeFormatSelected] = useState<string>(
    timeFormat
  );
  const [temperatureFormatSelected, setTemperatureFormatSelected] = useState<
    string
  >(temperatureFormat);
  function saveSettingHandler() {
    console.log(timeFormatSelected);
    console.log(temperatureFormatSelected);

    dispatchRedux(
      setSetting({
        temperatureFormat: temperatureFormatSelected,
        timeFormat: timeFormatSelected,
      })
    );
  }
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>choose your preferences: </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <br />
        <IonItem>
          <IonLabel>time format:</IonLabel>
          <IonSelect
            value={timeFormatSelected}
            onIonChange={(e) => setTimeFormatSelected(e.detail.value)}>
            <IonSelectOption value='HH:mm'>24-hours</IonSelectOption>
            <IonSelectOption value='hh:mm a'>12-hours</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>temperature:</IonLabel>
          <IonSelect
            value={temperatureFormatSelected}
            onIonChange={(e) => setTemperatureFormatSelected(e.detail.value)}>
            <IonSelectOption value='metric'>&deg; C</IonSelectOption>
            <IonSelectOption value='imperial'>&deg; F</IonSelectOption>
          </IonSelect>
        </IonItem>

        <br />
        <IonButton expand='full' onClick={saveSettingHandler}>
          save
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};
export default SettingCard;
