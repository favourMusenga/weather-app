import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Accordin from '../../components/Accordin';
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
} from '../../components/styledComponents/WeatherStyledComponent';
import { WeatherContext } from '../../contexts/WeatherContext';
import { SetttingState } from '../../reducers/settingReducer';

interface CurrentWeatherDetailsProps {}
export const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = () => {
  const { hourlyWeatherInfo, currentWeatherinfo, city } = useContext(
    WeatherContext
  );
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );
  return (
    <IonPage>
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
              <CityName>{city}</CityName>
              <Deescription>{currentWeatherinfo.description}</Deescription>
              <div>
                <i
                  className={`wi ${currentWeatherinfo.weatherIcon} display-1`}
                />
              </div>
              <AvargeTemperature>
                {currentWeatherinfo.temp} &deg;
                {temperatureFormat === 'metric' ? 'C' : 'F'}
              </AvargeTemperature>
              <OtherWeatherInfo>
                <RightSideTab>
                  <LabelText>humidity</LabelText>
                  <UnitValue>{currentWeatherinfo.humidity}</UnitValue>
                </RightSideTab>
                <LeftSideTab>
                  <LabelText>wind speed</LabelText>
                  <UnitValue>{currentWeatherinfo.windSpeed}</UnitValue>
                </LeftSideTab>
              </OtherWeatherInfo>
              <div>
                {hourlyWeatherInfo.map((hourlyInfo, index) => (
                  <Accordin
                    key={index}
                    feelsLike={hourlyInfo.feels_like!}
                    temp={hourlyInfo.temp!}
                    humidity={hourlyInfo.humidity!}
                    windSpeed={hourlyInfo.windSpeed!}
                    time={hourlyInfo.dt!}
                  />
                ))}
              </div>
            </WeatherInfoContainer>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
