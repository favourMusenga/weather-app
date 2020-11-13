import {
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
} from '@ionic/react';
import { AxiosResponse } from 'axios';
import React from 'react';
import { RefetchOptions } from 'react-query/types/core/query';
import errorImage from '../../assets/error.svg';
interface ErrorProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<AxiosResponse<any> | null | undefined>;
}
export const Error: React.FC<ErrorProps> = ({ refetch }) => {
  return (
    <IonCard className='ion-text-center ion-padding'>
      <IonCardContent>
        <IonImg
          src={errorImage}
          style={{ height: '100px', width: '100px', margin: '0px auto' }}
        />
        <br />
        <IonText>oop! something went wrong</IonText>
        <br />
        <IonButton onClick={() => refetch()}>refresh</IonButton>
      </IonCardContent>
    </IonCard>
  );
};
