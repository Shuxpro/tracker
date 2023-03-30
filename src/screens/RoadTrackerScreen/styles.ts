import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 5,
  },

  containerArea: {
    flex: 1,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },

  location: {
    flex: 1,
  },

  textTimer: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    marginHorizontal: 40,
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
