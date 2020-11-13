import { Plugins } from '@capacitor/core';

const { LocalNotifications } = Plugins;

export async function runAlarmOnce(time: number, id: number, body: string) {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'alarm',
        body,
        id,
        schedule: { at: new Date(time) },
        sound: 'Nokia Ringtone Evolution (192 kbps).mp3',
        extra: {
          id: id,
        },
      },
    ],
  });
}

export async function runAlarmEveryday(id: number, time: number, body: string) {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'alarm',
        id,
        body,
        sound: 'Nokia Ringtone Evolution (192 kbps).mp3',
        schedule: { every: 'day', at: new Date(time) },
        extra: {
          id: id,
        },
      },
    ],
  });
}
export async function runAlarmOnSpecificDay(
  id: number,
  time: number,
  day: number,
  body: string
) {
  await LocalNotifications.schedule({
    notifications: [
      {
        id,
        title: 'alarm',
        body,
        schedule: { on: { day: day }, at: new Date(time) },
        extra: {
          id: id,
        },
      },
    ],
  });
}

export function setNameOfDay(days: string): string {
  switch (days) {
    case '0':
      return 'sun';
    case '1':
      return 'mon';
    case '2':
      return 'tue';
    case '3':
      return 'wed';
    case '4':
      return 'thru';
    case '5':
      return 'fri';
    case '6':
      return 'sat';
    default:
      return '';
  }
}
