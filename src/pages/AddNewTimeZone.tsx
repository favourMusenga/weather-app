import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  isPlatform,
  IonCard,
  IonInput,
  IonCardContent,
  IonItem,
} from '@ionic/react';
import { add, closeOutline } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface AddNewTimeZoneProps extends RouteComponentProps {}
export const AddNewTimeZone: React.FC<AddNewTimeZoneProps> = ({ history }) => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>add timezone</IonTitle>
          <IonButtons color='primary' slot='start'>
            <IonButton
              color={isPlatform('android') ? 'primary' : ''}
              onClick={() => {
                history.goBack();
              }}>
              <IonIcon icon={closeOutline} />
              <IonLabel>cancel</IonLabel>
            </IonButton>
          </IonButtons>
          <IonButtons color='primary' slot='end'>
            <IonButton color={isPlatform('android') ? 'primary' : ''}>
              <IonLabel>add</IonLabel>
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='ion-padding'>
          <IonCardContent>
            <form className='ion-justify-content-center ion-align-items-center'>
              <IonItem>
                <IonLabel position='floating'>add timezone</IonLabel>
                <IonInput />
              </IonItem>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};
