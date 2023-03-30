import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingHorizontal: 16,
    bottom: 16,
    right: 16,
    left: 16,
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 16,
  },

  tab: {
    height: 78,
    width: 78,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red"
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
