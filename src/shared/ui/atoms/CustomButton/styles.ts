import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'yellow',
    marginHorizontal: 24,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
});

export const useStyles = () => ({
  ...styles,
});
