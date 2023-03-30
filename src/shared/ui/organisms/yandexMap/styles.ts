import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
    minHeight: 600,
  },
});

export const useStyles = () => ({
  ...styles,
});
