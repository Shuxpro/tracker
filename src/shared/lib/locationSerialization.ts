import {GeolocationResponse} from '@react-native-community/geolocation';
import {Point} from 'react-native-yamap';

export const locationSerialization = (data: GeolocationResponse[]): Point[] => {
  if (!data) {
    return [];
  }
  return data.map(item => {
    return {
      lat: item.coords.latitude,
      lon: item.coords.longitude,
    };
  });
};
