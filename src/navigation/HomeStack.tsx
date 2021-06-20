import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@src/scenes/Home/Home';
import Details from '@src/scenes/Details/Details';

const Stack = createStackNavigator();
const HomeStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;