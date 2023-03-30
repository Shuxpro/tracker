import {createEvent, restore} from 'effector';
import {TrackingItemType} from '../../../shared/types/TrackingItem/TrackingItem';

const setSelectTrackingRoad = createEvent<TrackingItemType>();

const reset = createEvent();

const $selectTrackingRoad = restore(
  setSelectTrackingRoad,
  {} as TrackingItemType,
).reset(reset);

export {$selectTrackingRoad, setSelectTrackingRoad, reset};
