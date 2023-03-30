import React, {useCallback} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {BottomTab} from './BottomTab';
import {BottomTabIcon, BottomTabName} from './config';
import {useStyles} from './styles';

interface BottomTabItemProps {
  routeNames: string[];
  focused: number;
}

export const BottomTabs: React.FC<BottomTabItemProps> = ({
  focused,
  routeNames,
}) => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsBottomBar(true);
      return () => {
        setIsBottomBar(false);
      };
    }, []),
  );

  const styles = useStyles();

  const getTabName = (route: string) => {
    return BottomTabName[route as keyof typeof BottomTabName];
  };

  const getIconName = (route: string) => {
    return BottomTabIcon[route as keyof typeof BottomTabIcon]?.toLowerCase();
  };

  const getIconColor = (index: number) => {
    return focused === index;
  };

  return (
    <View style={[styles.container]}>
      {routeNames.map((item, index) => {
        return (
          <BottomTab
            key={index}
            onPress={() => {
              navigation.navigate(item);
            }}
            isFocused={focused === index}
            iconColor={getIconColor(index)}
            iconName={getIconName(item)}
            title={getTabName(item)}
          />
        );
      })}
    </View>
  );
};
