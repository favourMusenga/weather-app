import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { SetttingState } from '../../reducers/settingReducer';
import {
  AvargeTemperature,
  CityName,
  Deescription,
  WeatherInfoContainer,
  OtherWeatherInfo,
  RightSideTab,
  LeftSideTab,
  LabelText,
  UnitValue,
} from '../styledComponents/WeatherStyledComponent';

interface TemperatureInfoProps {
  temp_day: string;
  temp_eve: string;
  temp_night: string;
  temp_morning: string;
  temp_min: string;
  temp_max: string;
  windSpeed: string;
  humidity: string;
  sunrise: string;
  sunset: string;
  weatherIcon: string;
  description: string;
  city: string;
}
export const TemperatureInfo: React.FC<TemperatureInfoProps> = ({
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
  city,
}) => {
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  return (
    <>
      <WeatherInfoContainer>
        <CityName>{city}</CityName>
        <Deescription>{description}</Deescription>
        <div>
          <i className={`wi ${weatherIcon} display-1`} />
        </div>
        <AvargeTemperature>
          {temp_day} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
        </AvargeTemperature>
        <OtherWeatherInfo>
          <RightSideTab>
            <LabelText>min temp</LabelText>
            <UnitValue>{temp_min}</UnitValue>
          </RightSideTab>
          <LeftSideTab>
            <LabelText>max temp</LabelText>
            <UnitValue>{temp_max}</UnitValue>
          </LeftSideTab>
        </OtherWeatherInfo>
        <IonList style={{ width: '100%' }}>
          <IonListHeader style={{ color: '#555' }}>
            more information:
          </IonListHeader>
          <IonItem>
            <IonLabel>evening temp:</IonLabel>
            <IonText>
              {temp_eve} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>morning temp:</IonLabel>
            <IonText>
              {temp_morning} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>night temp:</IonLabel>
            <IonText>
              {temp_night} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>sunrise:</IonLabel>
            <IonText>{sunrise}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>sunset:</IonLabel>
            <IonText>{sunset}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>wind speed:</IonLabel>
            <IonText>
              {windSpeed} {temperatureFormat === 'metric' ? 'm/s' : 'mi/hr'}
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>humdity:</IonLabel>
            <IonText>{humidity}%</IonText>
          </IonItem>
        </IonList>
      </WeatherInfoContainer>
    </>
  );
};
