import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '@src/scenes/SignUp/SignUp';
import SignIn from '@src/scenes/SignIn/SignIn';
import HomeNavigator from '@src/navigation/HomeNavigator';
const Stack = createStackNavigator();
const AuthNavigator: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="HomeNav" component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
