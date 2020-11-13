import React, { useContext } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonPage,
} from '@ionic/react';
import { TemperatureInfo } from '../../components/WeatherComponenents/TemperatureInfo';
import { RouteComponentProps } from 'react-router';
import { WeatherContext } from '../../contexts/WeatherContext';

interface WeeklyWeatherDetailsProps
  extends RouteComponentProps<{ id: string }> {}
export const WeeklyWeatherDetails: React.FC<WeeklyWeatherDetailsProps> = ({
  match,
}) => {
  const { dailyWeatherInfo, city } = useContext(WeatherContext);
  const {
    temp_day,
    temp_night,
    temp_morning,
    temp_eve,
    temp_min,
    temp_max,
    windSpeed,
    humidity,
    sunrise,
    sunset,
    weatherIcon,
    description,
    dt,
  } = dailyWeatherInfo[+match.params.id - 1];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{dt}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <TemperatureInfo
              temp_day={temp_day!}
              temp_night={temp_night!}
              temp_morning={temp_morning!}
              temp_eve={temp_eve!}
              temp_min={temp_min!}
              temp_max={temp_max!}
              windSpeed={windSpeed!}
              humidity={humidity!}
              sunrise={sunrise!}
              sunset={sunset!}
              weatherIcon={weatherIcon!}
              description={description!}
              city={city}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
