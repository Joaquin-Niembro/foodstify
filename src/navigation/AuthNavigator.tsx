import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '@src/scenes/SignUp/SignUp';
import SignIn from '@src/scenes/SignIn/SignIn';

const Stack = createStackNavigator();
const AuthNavigator: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Signin" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
