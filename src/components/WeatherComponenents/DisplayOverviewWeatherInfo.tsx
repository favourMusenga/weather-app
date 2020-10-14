import { IonButton } from '@ionic/react';
import React from 'react';
import {
  WeatherInfoContainer,
  CityName,
  Deescription,
  AvargeTemperature,
} from '../styledComponents/WeatherStyledComponent';

interface DisplayOverviewWeatherInfoProps {
  temp: string;
  description: string;
  weatherIcon: string;
  city: string;
}
export const DisplayOverviewWeatherInfo: React.FC<DisplayOverviewWeatherInfoProps> = ({
  temp,
  description,
  weatherIcon,
  city,
}) => {
  return (
    <WeatherInfoContainer>
      <CityName>{city}</CityName>
      <Deescription>{description}</Deescription>
      <div>
        <i className={`wi ${weatherIcon} display-1`} />
      </div>
      <AvargeTemperature>{temp} &deg; C</AvargeTemperature>
      <IonButton routerLink='/CurrentWeatherDetails'>more info</IonButton>
    </WeatherInfoContainer>
  );
};
