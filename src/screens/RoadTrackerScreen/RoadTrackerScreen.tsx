import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import {locationSerialization} from '../../shared/lib/locationSerialization';
import {useTrackingLocations} from '../../shared/lib/useLocations';
import {CustomButton} from '../../shared/ui/atoms/CustomButton';
import YandexMap from '../../shared/ui/organisms/yandexMap/YandexMap';
import {useStyles} from './styles';
import {
  $trackingHistory,
  setTrackingHistory,
} from '../../entities/RoadTracker/model/historyRoads';
import {useStore} from 'effector-react';
import {$initialLocation} from '../../entities/RoadTracker/model/initialLocation';

export const RoadTrackerScreen: React.FC = () => {
  const styles = useStyles();
  const [isTracing, setIsTracing] = useState(false);
  const trackingItem = useTrackingLocations(isTracing);

  const trackingHistory = useStore($trackingHistory);
  const initialLocation = useStore($initialLocation);

  return (
    <SafeAreaView style={styles.containerArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>My tracker</Text>
        </View>
        <View style={styles.location}>
          {initialLocation !== undefined && (
            <YandexMap
              locations={locationSerialization(trackingItem.locations)}
              initialLocation={initialLocation}
            />
          )}
        </View>

        {trackingItem.timer > 0 && (
          <Text style={styles.textTimer}>{trackingItem.timer}s</Text>
        )}
        <CustomButton
          text={isTracing ? 'Pause' : 'Go'}
          onPress={() => setIsTracing(!isTracing)}
        />
        <CustomButton
          text="Сохранить"
          onPress={() => {
            if (!trackingItem) {
              return;
            }

            setTrackingHistory([...trackingHistory, trackingItem]);
            setIsTracing(false);
            trackingItem.resetTracking();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
