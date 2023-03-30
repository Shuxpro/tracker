import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HistoryRoadsScreen} from '../../screens/HistoryRoadsScreen/ui/HistoryRoadsScreen';
import {RoadTrackerScreen} from '../../screens/RoadTrackerScreen/RoadTrackerScreen';
import {BottomTabsStackParams} from '../../shared/types/navigation/BottomTabsStack';

const Tab = createBottomTabNavigator<BottomTabsStackParams>();

export const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      key="BottomTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'RoadTrackerScreen'} component={RoadTrackerScreen} />
      <Tab.Screen name={'HistoryRoadsScreen'} component={HistoryRoadsScreen} />
    </Tab.Navigator>
  );
};
