import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Register,
  WelcomeAuth,
  TambahTransaksi,
  Akun,
  Kategori,
  Rencana,
  DanaDarurat,
  TransaksiBerulang,
  TambahTransaksiBerulang,
} from '../pages';
import NavDrawer from '../navDrawer';
import Profile from '../navDrawer/Profile';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Content"
        component={NavDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahTransaksi"
        component={TambahTransaksi}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen name="Akun" component={Akun} />
      <Stack.Screen
        name="Kategori"
        component={Kategori}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Rencana"
        component={Rencana}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Dana Darurat"
        component={DanaDarurat}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Transaksi Berulang"
        component={TransaksiBerulang}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Tambah Transaksi Berulang"
        component={TambahTransaksiBerulang}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default NavStack;
