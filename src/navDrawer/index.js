import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Arisan, ManagementKeuangan, Akun, Konsultasi} from './../pages';
import {IconManagementKeuangan, IconArisan, IconMicroblog} from '../assets/img';
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
        options={{drawerIcon: IconMicroblog}}
        name="Microblog"
        component={Konsultasi}
      />
    </Drawer.Navigator>
  );
}
