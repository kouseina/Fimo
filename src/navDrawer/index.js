import React from 'react';
import {View, Text, Image} from 'react-native';
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
  Akun,
} from './../pages';
import {IconManagementKeuangan, IconArisan, AkunAktif} from '../assets/img';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Profile from './Profile';

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
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Management Keuangan">
      <Drawer.Screen
        options={{drawerLabel: Profile}}
        name="Akun"
        component={Akun}
      />
      <Drawer.Screen
        options={{drawerIcon: IconManagementKeuangan}}
        name="Management Keuangan"
        component={ManagementKeuangan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="Arisan"
        component={Arisan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="Konsultasi Keuangan"
        component={KonsultasiKeuangan}
      />
      <Drawer.Screen
        options={{drawerIcon: IconArisan}}
        name="Tips Mengatur Keuangan"
        component={TipsMengaturKeuangan}
      />
    </Drawer.Navigator>
  );
}
