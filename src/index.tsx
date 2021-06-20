import React from 'react';
import AuthNavigator from '@src/navigation/AuthNavigator';
import HomeNavigator from '@src/navigation/HomeNavigator';
import {connect} from 'react-redux';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
const index: React.FC<{
  User: FirebaseAuthTypes.UserCredential;
}> = ({User}) => {
  return !User ? <AuthNavigator /> : <HomeNavigator />;
};

const mapStateToProps = (state: any) => {
  return {
    User: state.Auth.user,
  };
};
export default connect(mapStateToProps)(index);
