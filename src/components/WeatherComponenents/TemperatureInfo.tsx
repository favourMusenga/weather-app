import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from '@ionic/react';
import React from 'react';
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

interface TemperatureInfoProps {}
export const TemperatureInfo: React.FC<TemperatureInfoProps> = () => {
  return (
    <>
      <WeatherInfoContainer>
        <CityName>Kitwe</CityName>
        <Deescription>light rain</Deescription>
        <div>
          <i className='wi wi-day-rain display-1' />
        </div>
        <AvargeTemperature>26.4 &deg; C</AvargeTemperature>
        <OtherWeatherInfo>
          <RightSideTab>
            <LabelText>min temp</LabelText>
            <UnitValue>16.6</UnitValue>
          </RightSideTab>
          <LeftSideTab>
            <LabelText>max temp</LabelText>
            <UnitValue>26.6</UnitValue>
          </LeftSideTab>
        </OtherWeatherInfo>
        <IonList style={{ width: '100%' }}>
          <IonListHeader style={{ color: '#555' }}>
            more information:
          </IonListHeader>
          <IonItem>
            <IonLabel>eve temp:</IonLabel>
            <IonText>28 &deg; C</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>morn temp:</IonLabel>
            <IonText>24 &deg; C</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>night temp:</IonLabel>
            <IonText>18 &deg; C</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>sunrise:</IonLabel>
            <IonText>06:00 pm</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>sunset:</IonLabel>
            <IonText>18:00 pm</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>wind speed:</IonLabel>
            <IonText>2.5</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>humdity:</IonLabel>
            <IonText>95%</IonText>
          </IonItem>
        </IonList>
      </WeatherInfoContainer>
    </>
  );
};
