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
  TambahTransaksi,
} from './../pages';
import {ArrowRight} from '../assets/img';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="ManagementKeuangan" component={ManagementKeuangan} />
      <Drawer.Screen name="Arisan" component={Arisan} />
      <Drawer.Screen name="KonsultasiKeuangan" component={KonsultasiKeuangan} />
      <Drawer.Screen
        name="TipsMengaturKeuangan"
        component={TipsMengaturKeuangan}
      />
      <Drawer.Screen name="TambahTransaksi" component={TambahTransaksi} />
    </Drawer.Navigator>
  );
}
