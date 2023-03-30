import {GeolocationResponse} from '@react-native-community/geolocation';

export type TrackingItemType = {
  locations: GeolocationResponse[];
  timer: number;
  resetTracking: () => void;
};
