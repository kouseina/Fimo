import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Transaksi, Laporan, Rencana, Akun} from '../pages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {
  TransaksiAktif,
  TransaksiNonAktif,
  LaporanAktif,
  LaporanNonAktif,
  RencanaAktif,
  RencanaNonAktif,
  AkunAktif,
  AkunNonAktif,
} from './../assets/img';

function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Transaksi') {
            return focused ? <TransaksiAktif /> : <TransaksiNonAktif />;
          } else if (route.name === 'Laporan') {
            return focused ? <LaporanAktif /> : <LaporanNonAktif />;
          } else if (route.name === 'Rencana') {
            return focused ? <RencanaAktif /> : <RencanaNonAktif />;
          } else if (route.name === 'Akun') {
            return focused ? <AkunAktif /> : <AkunNonAktif />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4D8AF2',
        inactiveTintColor: '#CCCCCC',
      }}>
      <Tab.Screen name="Transaksi" component={Transaksi} />
      <Tab.Screen name="Laporan" component={Laporan} />
      <Tab.Screen name="Rencana" component={Rencana} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
}

export default TabNav;
