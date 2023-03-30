import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigation} from './navigation/BottomTabsStack';
import YaMap from 'react-native-yamap';
import {getLocations} from '../shared/lib/getLocation';
import {setInitialLocation} from '../entities/RoadTracker/model/initialLocation';
import {getCashHistoryFx} from '../entities/RoadTracker/model/historyRoads';

YaMap.init('fba3b7a9-dd5a-4345-a91f-0653686b08dd');

const Application: React.FC = () => {
  useEffect(() => {
    getLocations(position => {
      setInitialLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      getCashHistoryFx();
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <TabNavigation></TabNavigation>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Application;
