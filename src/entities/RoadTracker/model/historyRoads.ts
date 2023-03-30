import {createEffect, createEvent, forward, restore, sample} from 'effector';

import {TrackingItemType} from '../../../shared/types/TrackingItem/TrackingItem';
import {getStoreDataHistory} from '../lib/getStoreDataHistory';
import {setStoreDataHistory} from '../lib/setStoreDataHistory';

const setTrackingHistory = createEvent<TrackingItemType[]>();

const reset = createEvent();

const $trackingHistory = restore(
  setTrackingHistory,
  [] as TrackingItemType[],
).reset(reset);

const getCashHistoryFx = createEffect(async () => {
  const response = await getStoreDataHistory();
  return response;
});

const setCashHistoryFx = createEffect(async (data: TrackingItemType[]) => {
  await setStoreDataHistory(data);
});

sample({
  source: getCashHistoryFx.doneData,
  target: $trackingHistory,
});

forward({
  from: setTrackingHistory,
  to: setCashHistoryFx,
});

export {$trackingHistory, setTrackingHistory, reset, getCashHistoryFx};
