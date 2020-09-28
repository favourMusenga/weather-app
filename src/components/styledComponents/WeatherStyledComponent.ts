import styled from 'styled-components';

export const WeatherInfoContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  padding: 10px 14px;
  justify-content: center !important;
  align-items: center !important;
  line-height: 1.5;
`;

export const CityName = styled.p`
  font-size: 2.5rem !important;
  margin-top: 30px !important;
`;

export const Deescription = styled.p`
  font-size: 1rem !important;
  margin-bottom: 30px !important;
`;

export const AvargeTemperature = styled.p`
  margin-top: 30px !important;
  font-size: 3.5rem !important;
`;

export const OtherWeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px !important;
`;

export const RightSideTab = styled.div`
  border-right: 1px solid;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftSideTab = styled(RightSideTab)`
  border: none;
`;

export const LabelText = styled.p`
  font-size: 1rem !important;
  text-align: center !important;

  @media screen and (max-width: 375px) {
    font-size: 1rem !important;
  }
`;

export const UnitValue = styled.p<UnitValueProp>`
  font-size: 2rem !important;
  @media screen and (max-width: 375px) {
    font-size: ${(props) => props.textSize} !important;
  }
`;

//types

type UnitValueProp = {
  textSize?: string;
};
