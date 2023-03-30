import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === 'granted') {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};

export const getLocations = (
  onGet: (position: GeolocationResponse) => void,
) => {
  const result = requestLocationPermission();
  result.then(res => {
    if (res) {
      Geolocation.getCurrentPosition(
        position => {
          onGet(position);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  });
};
