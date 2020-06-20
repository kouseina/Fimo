import React from 'react';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Arisan,
  KonsultasiKeuangan,
  TipsMengaturKeuangan,
  ManagementKeuangan,
} from './../pages';
import {IconManagementKeuangan, IconArisan} from '../assets/img';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList
        labelStyle={{
          color: '#5B687B',
          fontWeight: 'bold',
          fontSize: 16,
        }}
        {...props}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        options={{drawerIcon: IconManagementKeuangan}}
        name="ManagementKeuangan"
        component={ManagementKeuangan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="Arisan"
        component={Arisan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="KonsultasiKeuangan"
        component={KonsultasiKeuangan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="TipsMengaturKeuangan"
        component={TipsMengaturKeuangan}
      />
    </Drawer.Navigator>
  );
}
