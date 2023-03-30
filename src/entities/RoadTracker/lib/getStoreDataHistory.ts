import AsyncStorage from '@react-native-async-storage/async-storage';
import {TrackingItemType} from '../../../shared/types/TrackingItem/TrackingItem';

export const getStoreDataHistory = async () => {
  const jsonValue = await AsyncStorage.getItem('trackingHistory');
  return jsonValue != null
    ? (JSON.parse(jsonValue) as TrackingItemType[])
    : ([] as TrackingItemType[]);
};
