import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alarm, time, sunny } from 'ionicons/icons';

import { LocalNotification, Plugins } from '@capacitor/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './app.css';

/* tabs pages */
import { Weather } from './pages/weather/weather';
import { WorldTime } from './pages/worldTime/WorldTime';
import { Alarm } from './pages/alarm/Alarm';
import { CurrentWeatherDetails } from './pages/weather/CurrentWeatherDetails';
import { WeeklyWeatherDetails } from './pages/weather/WeeklyWeatherDetails';
import { WorldTimeList } from './pages/worldTime/WorldTimeList';
import { AddNewTimeZone } from './pages/worldTime/AddNewTimeZone';
import { AddAlarm } from './pages/alarm/AddAlarm';
import { AlarmContext } from './contexts/AlarmContext';
import { ALARM_TYPES } from './hooks/useAlarmStorage';

const { LocalNotifications } = Plugins;

const App: React.FC = () => {
  const { dispatch, onIsCompleteChange } = useContext(AlarmContext);
  useEffect(() => {
    const requestPermission = async () => {
      await LocalNotifications.requestPermission();
    };
    requestPermission();

    LocalNotifications.addListener(
      'localNotificationReceived',
      (notification: LocalNotification) => {
        const id = notification.extra.id;

        onIsCompleteChange(+id);
        dispatch({ type: ALARM_TYPES.COMPLETED, payload: { id: +id } });
      }
    );
  }, [onIsCompleteChange, dispatch]);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/Weather' component={Weather} exact={true} />
            <Route
              path='/WeeklyWeatherDetails/:id'
              component={WeeklyWeatherDetails}
            />
            <Route
              path='/CurrentWeatherDetails'
              component={CurrentWeatherDetails}
              exact={true}
            />
            <Route path='/WorldTime' component={WorldTime} exact={true} />
            <Route path='/Alarm' component={Alarm} />
            <Route path='/AddNewTimeZone' component={AddNewTimeZone} />
            <Route path='/WorldTimeList' component={WorldTimeList} />
            <Route path='/AddAlarm' component={AddAlarm} />
            <Route
              path='/'
              render={() => <Redirect to='/Weather' />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='tab1' href='/Weather'>
              <IonIcon icon={sunny} />
              <IonLabel>weather</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab2' href='/WorldTime'>
              <IonIcon icon={time} />
              <IonLabel>world time</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab3' href='/Alarm'>
              <IonIcon icon={alarm} />
              <IonLabel>alarm</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
