import { IonButton } from '@ionic/react';
import React from 'react';
import {
  WeatherInfoContainer,
  CityName,
  Deescription,
  AvargeTemperature,
} from '../styledComponents/WeatherStyledComponent';
import { WeatherTextInput } from './WeatherTextInput';

interface DisplayOverviewWeatherInfoProps {}
export const DisplayOverviewWeatherInfo: React.FC<DisplayOverviewWeatherInfoProps> = () => {
  return (
    <WeatherInfoContainer>
      <WeatherTextInput />
      <CityName>Kitwe</CityName>
      <Deescription>light rain</Deescription>
      <div>
        <i className='wi wi-day-rain display-1' />
      </div>
      <AvargeTemperature>17.34 &deg; C</AvargeTemperature>
      <IonButton routerLink='/CurrentWeatherDetails'>more info</IonButton>
    </WeatherInfoContainer>
  );
};
