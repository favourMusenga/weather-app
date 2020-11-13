import {
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
  IonCardContent,
  IonAlert,
  IonPage,
} from '@ionic/react';
import { add, closeOutline } from 'ionicons/icons';
import React, { useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import AutoSuggest from 'react-autosuggest';
// the timezone list
import { TIMEZONE_LIST } from '../../assets/timeZoneList';

import './addNewTimezone.css';
import { WorldTimeContext } from '../../contexts/WorldTimeContext';
import { TYPES } from '../../hooks/useLocalStorage';
import { v4 as uuid4 } from 'uuid';
import { DateTime } from 'luxon';

interface AddNewTimeZoneProps extends RouteComponentProps {}

export const AddNewTimeZone: React.FC<AddNewTimeZoneProps> = ({ history }) => {
  const { dispatch, userWorldTimeList } = useContext(WorldTimeContext);
  const [timeZoneInputValue, setTimeZoneInputValue] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [suggestions, setSuggestions] = useState(TIMEZONE_LIST);

  /* function  to add a new timezone to the array */
  function handleAddCilck() {
    // check if the user submit a emptry a string
    if (timeZoneInputValue !== '') {
      //check if the timezone is valid
      if (TIMEZONE_LIST.includes(timeZoneInputValue)) {
        let city: string;

        const timezoneSplit = timeZoneInputValue.split('/');
        let cityTxt: string;
        let cityTxtSplit;
        // ckecking the length of the split array
        if (timezoneSplit.length === 2) {
          cityTxt = timezoneSplit[1];
        } else {
          cityTxt = timezoneSplit[2];
        }
        /* 
            separating the city into two arrays if it contains a _
            and then make a single string
         */
        if (cityTxt.includes('_')) {
          cityTxtSplit = cityTxt.split('_');
          city = cityTxtSplit[0] + ' ' + cityTxtSplit[1];
        } else {
          city = cityTxt;
        }
        /**
         *  checking the timezone enterd already exists in
         *  the the  userWorldTimeList variable
         */
        for (let worldtime of userWorldTimeList) {
          if (
            worldtime.timezone === timeZoneInputValue ||
            worldtime.timezone === DateTime.local().zoneName
          ) {
            setError('timezone already added');
            return null;
          }
        }
        dispatch({
          type: TYPES.ADD,
          payload: { id: uuid4(), city: city, timezone: timeZoneInputValue },
        });
        // redirct the user the previous page
        history.goBack();
      } else {
        setError('enter correct timezone ');
      }
    } else {
      setError('timezone required');
    }
  }
  function alertHandle() {
    if (timeZoneInputValue !== '') {
      setShowAlert(true);
      return null;
    }
    history.goBack();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>add timezone</IonTitle>
          <IonButtons color='primary' slot='start'>
            <IonButton
              color={isPlatform('android') ? 'primary' : ''}
              onClick={alertHandle}>
              <IonIcon icon={closeOutline} />
              <IonLabel>cancel</IonLabel>
            </IonButton>
          </IonButtons>
          <IonButtons color='primary' slot='end'>
            <IonButton
              color={isPlatform('android') ? 'primary' : ''}
              onClick={handleAddCilck}>
              <IonLabel>add</IonLabel>
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='ion-padding' style={{ height: '80%' }}>
          <IonCardContent>
            <form
              className='d-flex flex-column justify-content-center align-items-center'
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCilck();
              }}>
              <label htmlFor='timeZoneInput'>enter timezone</label>
              <AutoSuggest
                inputProps={{
                  value: timeZoneInputValue,
                  placeholder: 'enter timezone',
                  onChange: (event, { newValue }) => {
                    setTimeZoneInputValue(newValue.trim());
                  },
                  id: 'timeZoneInput',
                }}
                suggestions={suggestions}
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                onSuggestionsFetchRequested={({ value }) => {
                  if (!value) {
                    setSuggestions([]);
                    return;
                  }
                  return setSuggestions(
                    TIMEZONE_LIST.filter((timezone) =>
                      timezone
                        .toLowerCase()
                        .includes(value.trim().toLowerCase())
                    )
                  );
                }}
                onSuggestionsClearRequested={() => {
                  setSuggestions([]);
                }}
              />
              <p className='text-danger'>{error ? error : ''}</p>
            </form>
          </IonCardContent>
        </IonCard>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header='Confirmation'
          message='do you want to leave without saving?'
          buttons={[
            {
              text: 'no',
              role: 'cancel',
              handler: () => console.log('alert cancelled'),
            },
            { text: 'yes', handler: () => history.goBack() },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};
