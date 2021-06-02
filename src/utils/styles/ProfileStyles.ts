import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const ProfileStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkerBlue,
    height: '100%',

    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  subcontainer: {
    backgroundColor: '#c7e7f3',
    height: '80%',
    width: '90%',
    borderRadius: 15,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.darkerBlue,
  },
  logContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loggedIn: {
      color: Colors.darkerBlue,
      fontWeight: 'bold'
  }
});
