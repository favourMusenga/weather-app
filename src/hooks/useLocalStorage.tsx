import { useReducer, useEffect } from 'react';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export enum TYPES {
  DELETE = 'delete',
  ADD = 'add',
}
export type ListArrayType = Array<{
  id?: string;
  city?: string;
  timezone?: string;
}>;

export type WorldTimeAction = {
  type: TYPES.ADD | TYPES.DELETE;
  payload: { id: string; city?: string; timezone?: string };
};

function reducer(state: ListArrayType, action: WorldTimeAction) {
  switch (action.type) {
    case TYPES.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          city: action.payload.city,
          timezone: action.payload.timezone,
        },
      ];
    case TYPES.DELETE:
      return state.filter((prevState) => prevState.id !== action.payload.id);
    default:
      return state;
  }
}
const initialState = [{ id: '1', city: 'local', timezone: 'local' }];
const KEY = 'WeatherApp-worldList';
export const useLocalStorage = () => {
  const [worldTimeList, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const addList = async () => {
      const { value } = await Storage.get({ key: KEY });

      if (value != null) {
        const InitialValues = JSON.parse(value);
        if (
          InitialValues.length > worldTimeList.length &&
          worldTimeList.length === 0
        ) {
          InitialValues.forEach((InitialValue: any) => {
            dispatch({ type: TYPES.ADD, payload: InitialValue });
          });
        } else if (
          InitialValues.length > worldTimeList.length &&
          worldTimeList.length > 0
        ) {
          await Storage.set({
            key: KEY,
            value: JSON.stringify(worldTimeList),
          });
        } else if (InitialValues.length === worldTimeList.length) {
          return null;
        } else if (InitialValues.length < worldTimeList.length) {
          await Storage.set({ key: KEY, value: JSON.stringify(worldTimeList) });
        }
      } else {
        await Storage.set({ key: KEY, value: JSON.stringify(initialState) });
      }
    };
    addList();
  }, [worldTimeList]);

  return { worldTimeList, dispatch };
};
