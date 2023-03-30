import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  containerScroll: {
    flex: 1,
    minHeight: '100%',
    padding: 16,
    gap: 5,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    marginHorizontal: 130,
  },

  history: {
    height: 80,
    width: '100%',
    alignItems: 'center',
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
