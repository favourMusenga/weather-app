import styled from 'styled-components';

export const AlarmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlarmTime = styled.div`
  font-size: 1.5rem !important;
`;
export const AlarmName = styled.div`
  font-size: 0.8rem !important;
`;

export const AlarmDateInfo = styled.div<AlarmDateInfoType>`
  display: flex;
  align-items: ${({ direction }) =>
    direction === 'row' ? 'center' : 'flex-start'};
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
`;

export const AlarmDate = styled.p`
  margin-right: 10px !important;
`;

type AlarmDateInfoType = {
  direction: 'row' | 'column';
};
