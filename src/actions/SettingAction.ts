import { Dispatch } from 'redux';
import { ActionsTypes, SetttingState } from '../reducers/settingReducer';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const KEY = 'WeatherApp-user-preferences';

export const updateSetting = (settings: SetttingState): ActionsTypes => {
  return {
    payload: {
      temperatureFormat: settings.temperatureFormat,
      timeFormat: settings.timeFormat,
    },
    type: 'UPDATE',
  };
};

export const getSetting = () => async (dispatch: Dispatch) => {
  const { value: setting } = await Storage.get({ key: KEY });
  if (setting == null) {
    const initialSetting: SetttingState = {
      temperatureFormat: 'metric',
      timeFormat: 'HH:mm',
    };
    dispatch(updateSetting(initialSetting));

    await Storage.set({ key: KEY, value: JSON.stringify(initialSetting) });
  } else {
    const userPreferences: SetttingState = JSON.parse(setting);
    dispatch(updateSetting(userPreferences));
  }
};

export const setSetting = (settings: SetttingState) => async (
  dispatch: Dispatch
) => {
  dispatch(updateSetting(settings));

  await Storage.set({ key: KEY, value: JSON.stringify(settings) });
};
