import React, { createContext } from 'react';
import useAlarmStorage, {
  alarmAction,
  alarmArrayType,
} from '../hooks/useAlarmStorage';
import { LocalNotificationPendingList, Plugins } from '@capacitor/core';

const { LocalNotifications } = Plugins;

export const AlarmContext = createContext<{
  alarmDateList: alarmArrayType;
  dispatch: React.Dispatch<alarmAction>;
  onIsCompleteChange: (id: number | number[]) => Promise<void>;
}>({
  alarmDateList: [],
  dispatch: () => {},
  onIsCompleteChange: (id): Promise<void> => new Promise((rev, reject) => {}),
});

export const AlarmContextProvider: React.FC = ({ children }) => {
  const { alarmDateList, dispatch } = useAlarmStorage();
  console.log(alarmDateList);

  async function onIsCompleteChange(id: number | number[]) {
    const pending: LocalNotificationPendingList = await LocalNotifications.getPending();
    const matchingId = pending.notifications.filter((notification) => {
      return notification.id === id.toString();
    });
    const notificationToRemove: LocalNotificationPendingList = {
      notifications: matchingId,
    };

    await LocalNotifications.cancel(notificationToRemove);
  }

  return (
    <AlarmContext.Provider
      value={{ alarmDateList, dispatch, onIsCompleteChange }}>
      {children}
    </AlarmContext.Provider>
  );
};
