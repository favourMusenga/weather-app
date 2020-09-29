import styled from 'styled-components';

export const LocalTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LocalTimeInfo = styled.div`
  font-size: 3.5rem;
`;

export const LocalDateInfo = styled.div``;

export const TimeZone = styled.div`
  margin-bottom: 30px !important;
`;

export const WorldTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WorldTimeLocaltionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const City = styled.p`
  font-size: 1.5rem !important;
`;

export const TimeDifference = styled.p``;

export const CurrentDateContainer = styled(WorldTimeLocaltionInfo)``;
export const CurrentTime = styled.p`
  font-size: 1.8rem !important;
`;
export const CurrentDate = styled.p`
  text-align: center;
`;
