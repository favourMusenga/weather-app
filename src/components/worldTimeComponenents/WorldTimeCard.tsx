import { IonCard, IonCardContent, createGesture, Gesture } from '@ionic/react';
import { DateTime } from 'luxon';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TYPES, WorldTimeAction } from '../../hooks/useLocalStorage';
import { SetttingState } from '../../reducers/settingReducer';
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
  dispatch: React.Dispatch<WorldTimeAction>;
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
  dispatch,
}) => {
  const { timeFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  const [time, setTime] = useState<string>(
    DateTime.local().setZone(timezone!).toFormat(timeFormat)
  );
  const [date, setDate] = useState<string>(
    DateTime.local().setZone(timezone!).toFormat('EEE dd MMM yyyy')
  );

  const cardRef = useRef(null);

  const difference = timeDiff(timezone + '');

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setInterval(() => {
        setTime(DateTime.local().setZone(timezone!).toFormat(timeFormat));
      }, 1000);
      setDate(DateTime.local().setZone(timezone!).toFormat('EEE dd MMM yyyy'));
    }
    return () => {
      clearInterval();
      isMounted = false;
    };
  }, [time]);

  function onMove(details: any, element: any) {
    const deltaX = details.deltaX;
    if (element.current != null) {
      element.current.style.transform = `translateX(${deltaX}px)`;
    }
  }

  function onStart(ev: any, element: any) {
    // element.current.style.transform = `translateX(0px)`;
  }
  function onEnd(ev: any, element: React.RefObject<HTMLElement>) {
    let deltaX = +ev.deltaX;
    element.current!.style.transition = 'transform 1s ease-out';
    if (element.current != null) {
      if (deltaX >= 167) {
        if (id === '1') {
          element.current.style.transform = `translateX(0px)`;
        } else {
          element.current.style.backgroundColor = '#EA5455';
          element.current.style.transform = `translateX(-1000px)`;
          element.current.style.display = `none`;
          dispatch({ type: TYPES.DELETE, payload: { id: id! } });
        }
      } else if (deltaX <= -167) {
        if (id === '1') {
          element.current.style.transform = `translateX(0px)`;
        } else {
          element.current.style.backgroundColor = '#EA5455';
          element.current.style.transform = `translateX(-1000px)`;
          element.current.style.display = `none`;
          dispatch({ type: TYPES.DELETE, payload: { id: id! } });
        }
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
      onStart: (ev: any) => {
        onStart(ev, cardRef);
      },
      onEnd: (ev: any) => {
        onEnd(ev, cardRef);
      },
    });

    gesture.enable();
  }, []);

  return (
    <IonCard ref={cardRef} style={{ transitions: 'all 1s ease-in' }}>
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
