import { IonCard, IonCardContent } from '@ionic/react';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import {
  City,
  CurrentDate,
  CurrentDateContainer,
  CurrentTime,
  TimeDifference,
  WorldTimeContainer,
  WorldTimeLocaltionInfo,
} from '../styledComponents/WorldTimeStyledComponent';

interface WorldTimeCardProps {
  worldTime: {
    city?: string;
    timezone?: string;
    id?: string;
  };
}
function timeDiff(timezone: string) {
  const localTime = DateTime.local().offset;

  const diffTimezone = DateTime.local().setZone(timezone).offset;

  const diffInHours = (localTime - diffTimezone) / 60;

  if (diffInHours > 0) {
    return `${diffInHours} hours behind`;
  } else if (diffInHours === 0) {
    return `same as local time`;
  } else {
    return `${-1 * diffInHours} hours ahead`;
  }
}
export const WorldTimeCard: React.FC<WorldTimeCardProps> = ({
  worldTime: { city, id, timezone },
}) => {
  const dt = DateTime.local().setZone(timezone + '');
  const [time, setTime] = useState<string>(dt.toFormat('HH:mm '));
  const [date, setDate] = useState<string>(dt.toFormat('EEE dd MMM yyyy'));

  const difference = timeDiff(timezone + '');

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setInterval(() => setTime(DateTime.local().toFormat('HH:mm')), 1000);
      setDate(DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));
    }
    return () => {
      clearInterval();
      isMounted = false;
    };
  }, [time]);

  return (
    <IonCard>
      <IonCardContent>
        <WorldTimeContainer>
          <WorldTimeLocaltionInfo>
            <City>{city}</City>
            <TimeDifference>
              {timezone === 'local' ? 'local time zone' : difference}
            </TimeDifference>
          </WorldTimeLocaltionInfo>
          <CurrentDateContainer>
            <CurrentTime>{time}</CurrentTime>
            <CurrentDate>{date}</CurrentDate>
          </CurrentDateContainer>
        </WorldTimeContainer>
      </IonCardContent>
    </IonCard>
  );
};
