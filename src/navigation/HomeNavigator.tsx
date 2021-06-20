import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './HomeStack';
import Promotions from '@src/scenes/Promotions/Promotions';
import Menus from '@src/scenes/Menus/Menus';
import Profile from '@src/scenes/Profile/Profile';

import {
  homeIconControlProps,
  promoIconControlProps,
  menuIconControlProps,
  userIconControlProps,
} from './controlledNavigationProps';
import {useGetIcon} from '@src/hooks';
import {Colors} from '@src/utils/styles';
const Tab = createMaterialBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      activeColor={Colors.darker}
      inactiveColor={Colors.darkerBlue}
      barStyle={{backgroundColor: Colors.lightBlue}}
      initialRouteName="Promotions">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => useGetIcon(homeIconControlProps, {color}),
        }}
      />
      <Tab.Screen
        name="Promotions"
        component={Promotions}
        options={{
          tabBarIcon: ({color}) => useGetIcon(promoIconControlProps, {color}),
        }}
      />
      <Tab.Screen
        name="Menus"
        component={Menus}
        options={{
          tabBarIcon: ({color}) => useGetIcon(menuIconControlProps, {color}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => useGetIcon(userIconControlProps, {color}),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
