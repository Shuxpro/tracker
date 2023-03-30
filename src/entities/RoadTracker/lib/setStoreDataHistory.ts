import AsyncStorage from '@react-native-async-storage/async-storage';
import {TrackingItemType} from '../../../shared/types/TrackingItem/TrackingItem';

export const setStoreDataHistory = async (value: TrackingItemType[]) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('trackingHistory', jsonValue);
};
