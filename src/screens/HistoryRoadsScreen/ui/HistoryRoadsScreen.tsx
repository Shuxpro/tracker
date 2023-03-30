import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Pressable} from 'react-native';
import {useStyles} from './styles';
import {useStore} from 'effector-react';
import {$trackingHistory} from '../../../entities/RoadTracker/model/historyRoads';
import dayjs from 'dayjs';
import YandexMap from '../../../shared/ui/organisms/yandexMap/YandexMap';
import {locationSerialization} from '../../../shared/lib/locationSerialization';
import {$initialLocation} from '../../../entities/RoadTracker/model/initialLocation';
import {
  $selectTrackingRoad,
  setSelectTrackingRoad,
} from '../../../entities/RoadTracker/model/selectTrackingRoad';

export const HistoryRoadsScreen: React.FC = () => {
  const styles = useStyles();
  const trackingHistory = useStore($trackingHistory);
  const initialLocation = useStore($initialLocation);
  const selectTrackingRoad = useStore($selectTrackingRoad);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.containerScroll}>
        <YandexMap
          locations={locationSerialization(selectTrackingRoad.locations)}
          initialLocation={initialLocation}
        />
        <View>
          <Text style={styles.text}>Tracking history</Text>
          {trackingHistory.map((item, index) => {
            const lastItem = item.locations[item.locations.length - 1];
            const firstItem = item.locations[0];

            return (
              <Pressable
                key={index}
                style={styles.history}
                onPress={() => setSelectTrackingRoad(item)}>
                <Text>
                  start date:
                  {dayjs(firstItem.timestamp).toDate().toDateString()}
                </Text>
                <Text>
                  finish date:
                  {dayjs(lastItem.timestamp).toDate().toDateString()}
                </Text>
                <Text>time: {item.timer}s</Text>

                <Text></Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
