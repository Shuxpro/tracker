import React from 'react';
import {YaMap, Polyline, Point} from 'react-native-yamap';
import {useStyles} from './styles';

interface LocationProps {
  locations: Point[];
  initialLocation: Point;
}

const YandexMap: React.FC<LocationProps> = ({locations, initialLocation}) => {
  const styles = useStyles();

  return (
    <YaMap
      mapType={'vector'}
      initialRegion={{
        lat: initialLocation.lat,
        lon: initialLocation.lon,
        zoom: 7,
        azimuth: 0,
      }}
      zoomGesturesEnabled={true}
      rotateGesturesEnabled={true}
      style={styles.map}>
      <Polyline
        points={locations}
        strokeColor="#2166d4"
        strokeWidth={4}
        zIndex={50}
      />
    </YaMap>
  );
};

export default YandexMap;
