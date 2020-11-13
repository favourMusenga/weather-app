import {
  createGesture,
  Gesture,
  IonCard,
  IonCardContent,
  IonToggle,
} from '@ionic/react';
import { DateTime } from 'luxon';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { alarmAction, ALARM_TYPES } from '../../hooks/useAlarmStorage';
import { SetttingState } from '../../reducers/settingReducer';
import {
  runAlarmEveryday,
  runAlarmOnce,
  runAlarmOnSpecificDay,
  setNameOfDay,
} from '../../utils';
import {
  AlarmContainer,
  AlarmTime,
  AlarmDateInfo,
  AlarmDate,
  AlarmName,
} from '../styledComponents/AlarmStyledComponents';

interface AlarmCardProps {
  time: number;
  days: string[];
  isCompleted: boolean;
  dispatch: React.Dispatch<alarmAction>;
  id: number | number[];
  alarmName: string;
  onIsCompleteChange: (id: number | number[]) => Promise<void>;
}

function setDaysString(days: string[]) {
  if (days.length === 7) return 'everyday';

  const dayInStr = days.slice().join();

  return dayInStr;
}
export const AlarmCard: React.FC<AlarmCardProps> = ({
  days,
  time,
  isCompleted,
  dispatch,
  id,
  alarmName,
  onIsCompleteChange,
}) => {
  const cardRef = useRef(null);
  const { timeFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  const formatedTime = DateTime.fromJSDate(new Date(time)).toFormat(timeFormat);
  const daysInStringForm = [...days.map((day) => setNameOfDay(day))];
  const daysSelected =
    daysInStringForm.length === 0
      ? DateTime.fromJSDate(new Date(time)).toFormat('EEE dd MMM')
      : setDaysString(daysInStringForm);

  function onMove(details: any, element: any) {
    const deltaX = details.deltaX;
    if (element.current != null) {
      element.current.style.transform = `translateX(${deltaX}px)`;
    }
  }

  function onEnd(ev: any, element: React.RefObject<HTMLElement>) {
    let deltaX = +ev.deltaX;
    element.current!.style.transition = 'transform 1s ease-out';
    if (element.current != null) {
      if (deltaX >= 167) {
        element.current.style.backgroundColor = '#EA5455';
        element.current.style.transform = `translateX(-1000px)`;
        element.current.style.display = `none`;
        if (Array.isArray(id)) {
          id.forEach((dayId) => {
            onIsCompleteChange(dayId);
          });
        } else {
          onIsCompleteChange(id);
        }
        dispatch({
          type: ALARM_TYPES.DELETE,
          payload: { id: Array.isArray(id) ? id[0] : id! },
        });
      } else if (deltaX <= -167) {
        element.current.style.backgroundColor = '#EA5455';
        element.current.style.transform = `translateX(-1000px)`;
        element.current.style.display = `none`;
        if (Array.isArray(id)) {
          id.forEach((dayId) => {
            onIsCompleteChange(dayId);
          });
        } else {
          onIsCompleteChange(id);
        }
        dispatch({
          type: ALARM_TYPES.DELETE,
          payload: { id: Array.isArray(id) ? id[0] : id! },
        });
      } else {
        element.current.style.transform = `translateX(0px)`;
      }
    }
  }

  useEffect(() => {
    const gesture: Gesture = createGesture({
      el: cardRef.current!,
      gestureName: 'delete-gesture',
      onMove: (detail: any) => {
        console.log('test');
        onMove(detail, cardRef);
      },
      onEnd: (ev: any) => {
        onEnd(ev, cardRef);
      },
    });

    gesture.enable();
  }, []);

  function onChangeHandler(e: any) {
    const isChecked = !e.detail.checked;
    if (isChecked && Array.isArray(id)) {
      id.forEach((dayId) => {
        onIsCompleteChange(dayId);
      });
    } else if (isChecked) {
      onIsCompleteChange(id);
    } else if (Array.isArray(id)) {
      id.forEach((dayId, index) => {
        runAlarmOnSpecificDay(dayId, time, +days[index], alarmName);
      });
    } else {
      if (days.length === 7) {
        runAlarmEveryday(id, time, alarmName);
      } else {
        runAlarmOnce(time, id, alarmName);
      }
    }
    dispatch({ type: ALARM_TYPES.COMPLETED, payload: { id: id } });
  }
  return (
    <IonCard ref={cardRef} style={{ transitions: 'all 1s ease-in' }}>
      <IonCardContent>
        <AlarmContainer>
          <AlarmDateInfo direction='column'>
            <AlarmTime>{formatedTime}</AlarmTime>
            <AlarmName>{alarmName}</AlarmName>
          </AlarmDateInfo>

          <AlarmDateInfo direction='row'>
            <AlarmDate>{daysSelected}</AlarmDate>
            <IonToggle checked={isCompleted} onIonChange={onChangeHandler} />
          </AlarmDateInfo>
        </AlarmContainer>
      </IonCardContent>
    </IonCard>
  );
};
