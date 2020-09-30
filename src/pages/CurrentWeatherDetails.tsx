import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import Accordin from '../components/Accordin';
import {
  WeatherInfoContainer,
  CityName,
  Deescription,
  AvargeTemperature,
  LeftSideTab,
  OtherWeatherInfo,
  RightSideTab,
  LabelText,
  UnitValue,
} from '../components/styledComponents/WeatherStyledComponent';
import { WeatherContext } from '../contexts/WeatherContext';

interface CurrentWeatherDetailsProps {}
export const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = () => {
  const weatherData = {
    temp: '20',
    time: '10:00 pm',
    windSpeed: '2.2',
    humidity: '48',
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Current Weather Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>todays info</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <WeatherInfoContainer>
              <CityName>Kitwe</CityName>
              <Deescription>light rain</Deescription>
              <div>
                <i className='wi wi-day-rain display-1' />
              </div>
              <AvargeTemperature>17.34 &deg; C</AvargeTemperature>
              <OtherWeatherInfo>
                <RightSideTab>
                  <LabelText>humidity</LabelText>
                  <UnitValue>100</UnitValue>
                </RightSideTab>
                <LeftSideTab>
                  <LabelText>wind speed</LabelText>
                  <UnitValue>2.1</UnitValue>
                </LeftSideTab>
              </OtherWeatherInfo>
              <div>
                <Accordin weatherData={weatherData} />
                <Accordin weatherData={weatherData} />
                <Accordin weatherData={weatherData} />
              </div>
            </WeatherInfoContainer>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};
