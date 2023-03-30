import {GeolocationResponse} from '@react-native-community/geolocation';
import {useState, useEffect} from 'react';
import {getLocations} from './getLocation';

export const useTrackingLocations = (isTracing: boolean) => {
  const [location, setLocation] = useState<GeolocationResponse[]>([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      if (!isTracing) {
        return;
      }

      getLocations(position => setLocation(prev => [...prev, position]));

      setTimer(timer + 1);
    }, 1000);

    return () => clearTimeout(myTimeout);
  }, [timer, isTracing]);

  const reset = () => {
    setLocation([]);
    setTimer(0);
  };

  return {
    locations: location,
    timer: timer,
    resetTracking: reset,
  };
};
