import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Mei, Juni, Juli} from '../pages';

const Tab = createMaterialTopTabNavigator();

function TopTabNav() {
  return (
    <Tab.Navigator tabBarOptions={{scrollEnabled: true}}>
      <Tab.Screen name="Mei" component={Mei} />
      <Tab.Screen name="Juni" component={Juni} />
      <Tab.Screen name="Juli" component={Juli} />
    </Tab.Navigator>
  );
}

export default TopTabNav;
