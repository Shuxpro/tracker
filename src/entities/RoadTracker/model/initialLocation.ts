import {createEvent, restore} from 'effector';
import {Point} from 'react-native-yamap';

const setInitialLocation = createEvent<Point>();

const reset = createEvent();

const $initialLocation = restore(setInitialLocation, {} as Point).reset(reset);

export {$initialLocation, setInitialLocation, reset};
