import { IonButton } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { SetttingState } from '../../reducers/settingReducer';
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
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  return (
    <WeatherInfoContainer>
      <CityName>{city}</CityName>
      <Deescription>{description}</Deescription>
      <div>
        <i className={`wi ${weatherIcon} display-1`} />
      </div>
      <AvargeTemperature>
        {temp} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
      </AvargeTemperature>
      <IonButton routerLink='/CurrentWeatherDetails'>more info</IonButton>
    </WeatherInfoContainer>
  );
};
