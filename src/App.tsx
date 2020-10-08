import React from 'react';
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
import WeatherContextProvider from './contexts/WeatherContext';
import { WorldTimeContextProvider } from './contexts/WorldTimeContext';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <WeatherContextProvider>
            <WorldTimeContextProvider>
              <Route path='/Weather' component={Weather} exact={true} />
              <Route
                path='/WeeklyWeatherDetails'
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
            </WorldTimeContextProvider>
          </WeatherContextProvider>
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

export default App;
