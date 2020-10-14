import { useState } from 'react';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

export default function useLocation() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');

  const getLocation = async () => {
    const currentPostion = await Geolocation.getCurrentPosition();
    const coLatitude = currentPostion.coords.latitude;
    const coLongitude = currentPostion.coords.longitude;

    setLatitude(coLatitude + '');
    setLongitude(coLongitude + '');
  };
  if (latitude === '' || longitude === '') {
    getLocation();
  }

  return { longitude, setLongitude, latitude, setLatitude };
}
