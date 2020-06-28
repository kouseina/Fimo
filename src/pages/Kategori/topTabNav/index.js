import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HutangPiutang, Pengeluaran, Pendapatan} from './../pages';

const Tab = createMaterialTopTabNavigator();

function TopTabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {elevation: 0},
        labelStyle: {textTransform: 'capitalize', fontWeight: 'bold'},
        activeTintColor: '#7280FF',
        inactiveTintColor: '#AAAAAA',
      }}
      initialRouteName="Pengeluaran">
      <Tab.Screen name="Hutang Piutang" component={HutangPiutang} />
      <Tab.Screen name="Pengeluaran" component={Pengeluaran} />
      <Tab.Screen name="Pendapatan" component={Pendapatan} />
    </Tab.Navigator>
  );
}

export default TopTabNav;
