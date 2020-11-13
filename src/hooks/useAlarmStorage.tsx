import { useEffect, useReducer } from 'react';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export enum ALARM_TYPES {
  'ADD' = 'add',
  'DELETE' = 'delete',
  'COMPLETED' = 'completed',
}

export type alarmArrayType = Array<{
  id?: number | number[];
  time?: number;
  days?: string[];
  alarmName?: string;
  isCompleted?: boolean;
}>;

export type alarmAction = {
  type: ALARM_TYPES.ADD | ALARM_TYPES.COMPLETED | ALARM_TYPES.DELETE;
  payload: {
    id?: number | number[];
    time?: number;
    days?: string[];
    alarmName?: string;
    isCompleted?: boolean;
  };
};
function reducer(state: alarmArrayType, action: alarmAction) {
  switch (action.type) {
    case ALARM_TYPES.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          time: action.payload.time,
          days: action.payload.days,
          isCompleted: action.payload.isCompleted,
          alarmName: action.payload.alarmName,
        },
      ];
    case ALARM_TYPES.DELETE:
      return state.filter((alarmDate) => {
        const id = Array.isArray(alarmDate.id) ? alarmDate.id[0] : alarmDate.id;
        return id !== action.payload.id;
      });
    case ALARM_TYPES.COMPLETED:
      return state.map((alarmDate) => {
        const id = Array.isArray(alarmDate.id) ? alarmDate.id[0] : alarmDate.id;
        if (id === action.payload.id) {
          alarmDate.isCompleted = !alarmDate.isCompleted;
        }
        return alarmDate;
      });
    default:
      return state;
  }
}

const KEY = 'WeatherApp-Alarm';

export default function useAlarmStorage() {
  const [alarmDateList, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const updateStorage = async () => {
      const { value } = await Storage.get({ key: KEY });
      if (value != null) {
        const initialValues = JSON.parse(value);
        if (
          initialValues.length > alarmDateList.length &&
          alarmDateList.length === 0
        ) {
          initialValues.forEach((initialValue: any) => {
            dispatch({ type: ALARM_TYPES.ADD, payload: initialValue });
          });
        } else if (
          initialValues.length > alarmDateList.length &&
          alarmDateList.length > 0
        ) {
          await Storage.set({
            key: KEY,
            value: JSON.stringify(alarmDateList),
          });
        } else if (initialValues.length < alarmDateList.length) {
          await Storage.set({ key: KEY, value: JSON.stringify(alarmDateList) });
        } else {
          await Storage.set({
            key: KEY,
            value: JSON.stringify(alarmDateList),
          });
        }
      } else {
        await Storage.set({ key: KEY, value: JSON.stringify(alarmDateList) });
      }
    };
    updateStorage();
  }, [alarmDateList]);

  return { alarmDateList, dispatch };
}
