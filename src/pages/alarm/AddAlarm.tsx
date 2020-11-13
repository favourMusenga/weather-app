import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonButton,
  IonCol,
  IonAlert,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonInput,
} from '@ionic/react';
import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { AlarmContext } from '../../contexts/AlarmContext';
import { ALARM_TYPES } from '../../hooks/useAlarmStorage';
import { Plugins } from '@capacitor/core';
import {
  runAlarmEveryday,
  runAlarmOnce,
  runAlarmOnSpecificDay,
} from '../../utils';

const { LocalNotifications } = Plugins;

interface AddAlarmProps extends RouteComponentProps {}

export const AddAlarm: React.FC<AddAlarmProps> = ({ history }) => {
  const [dateTimeValue, setDateTimeValue] = useState<string>('');
  const [alarmName, setAlarmName] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [days, setDay] = useState<string[]>([]);
  const { dispatch } = useContext(AlarmContext);

  function handleCancel() {
    setShowAlert(true);
  }

  function randomNumber() {
    return Math.floor(Math.random() * 10000);
  }
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (dateTimeValue === '') {
      setErrMsg('select a time');
      return;
    }

    let dt = new Date(dateTimeValue).getTime();
    let id: number;
    if (days.length === 0) {
      id = randomNumber();
      if (dt < Date.now()) {
        dt = dt + 1000 * 60 * 60 * 24;
        runAlarmOnce(
          dt,
          id,
          alarmName !== '' ? alarmName : 'reminder of a set alert'
        );
      } else {
        runAlarmOnce(
          dt,
          id,
          alarmName !== '' ? alarmName : 'reminder of a set alert'
        );
      }
      dispatch({
        type: ALARM_TYPES.ADD,
        payload: {
          id: id,
          time: new Date(dt).getTime(),
          isCompleted: true,
          days: days,
          alarmName: alarmName,
        },
      });
    } else if (days.length === 7) {
      id = randomNumber();
      runAlarmEveryday(
        id,
        dt,
        alarmName !== '' ? alarmName : 'reminder of a set alert'
      );
      dispatch({
        type: ALARM_TYPES.ADD,
        payload: {
          id: id,
          time: dt,
          isCompleted: true,
          days: days,
          alarmName: alarmName,
        },
      });
    } else {
      const arrayOfIds: number[] = [];
      days.forEach((day) => {
        id = randomNumber();
        runAlarmOnSpecificDay(
          id,
          dt,
          +day,
          alarmName !== '' ? alarmName : 'reminder of a set alert'
        );
        arrayOfIds.push(id);
      });
      console.log(arrayOfIds);
      dispatch({
        type: ALARM_TYPES.ADD,
        payload: {
          id: arrayOfIds,
          time: dt,
          isCompleted: true,
          days: [...days]!,
          alarmName: alarmName,
        },
      });
    }
    setTimeout(() => history.goBack(), 2000);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/Alarm' />
            <IonTitle>Add alarm</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='ion-padding'>
          <IonCardContent>
            <IonCardTitle>add the date</IonCardTitle>
            <IonItem>
              <IonLabel position='floating'>add name of alarm</IonLabel>
              <IonInput
                value={alarmName}
                onIonChange={(e) => setAlarmName(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel>add time</IonLabel>
              <IonDatetime
                displayFormat='HH:mm '
                value={dateTimeValue}
                placeholder='add time'
                onIonChange={(e) => setDateTimeValue(e.detail.value!)}
              />
            </IonItem>
            <p style={{ color: 'tomato' }}>{errMsg}</p>
            <br />
            <form onSubmit={onSubmitHandler}>
              <IonItem>
                <IonLabel>select day to repeat: </IonLabel>
                <IonSelect
                  onIonChange={(e) => {
                    console.log(e.detail.value!);
                    return setDay((preDays) => {
                      const daysSelected = [...e.detail.value!];
                      return daysSelected;
                    });
                  }}
                  multiple>
                  <IonSelectOption value='1'>monday</IonSelectOption>
                  <IonSelectOption value='2'>tueday</IonSelectOption>
                  <IonSelectOption value='3'>wednesday</IonSelectOption>
                  <IonSelectOption value='4'>thursday</IonSelectOption>
                  <IonSelectOption value='5'>friday</IonSelectOption>
                  <IonSelectOption value='6'>saturday</IonSelectOption>
                  <IonSelectOption value='0'>sunday</IonSelectOption>
                </IonSelect>
              </IonItem>
              <div className='d-flex justify-content-center ml-5 mt-5'>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonButton type='submit'>save alarm</IonButton>
                    </IonCol>

                    <IonCol>
                      <IonButton color='medium' onClick={handleCancel}>
                        cancel
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </form>
            <IonAlert
              isOpen={showAlert}
              header='Confirmation'
              message='do you want to leave without saving?'
              buttons={[
                {
                  text: 'no',
                  role: 'cancel',
                  handler: () => console.log('alert cancelled'),
                },
                { text: 'yes', handler: () => history.goBack() },
              ]}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
