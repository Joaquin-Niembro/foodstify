import {StyleSheet} from 'react-native';
import {Colors} from './colors';
export const SignUpStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.dark,
  },
  subContainer: {
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  inputIcon: {position: 'absolute', left: 10},
  input: {
    color: Colors.white,
    paddingLeft: 40,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  btnPrimary: {
    backgroundColor: Colors.yellow,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  line: {height: 1, width: 30, backgroundColor: Colors.gray},
  titleContainer: {flexDirection: 'row', marginTop: 20},
  title: {fontWeight: 'bold', fontSize: 28, color: Colors.yellow},
  subTitle: {fontWeight: 'bold', fontSize: 28, color: Colors.light},
  title2: {fontSize: 27, fontWeight: 'bold', color: Colors.yellow},
  subTitle2: {fontSize: 19, fontWeight: 'bold', color: Colors.light},
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  bottomText: {color: Colors.light, fontWeight: 'bold'},
});
