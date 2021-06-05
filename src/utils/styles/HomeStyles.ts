import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    height: '100%',
    padding: 10,
  },
  upLevel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logoutBtn: {
    paddingTop: 20,
  },
  recommendedText: {
    color: Colors.light,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20
  },
});
