import { IonButton, IonCard, IonCardContent, IonText } from '@ionic/react';
import { AxiosResponse } from 'axios';
import React from 'react';
import { RefetchOptions } from 'react-query/types/core/query';
interface ErrorProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<AxiosResponse<any> | null | undefined>;
}
export const Error: React.FC<ErrorProps> = ({ refetch }) => {
  return (
    <IonCard className='ion-text-center ion-padding'>
      <IonCardContent>
        <IonText>oop! something went wrong</IonText>
        <br />
        <IonButton onClick={() => refetch()}>refresh</IonButton>
      </IonCardContent>
    </IonCard>
  );
};
