import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopTabNav from '../../topTabNav';
import {Menu, Notif, Kalender} from '../../assets/img';
import HeaderDrawer from '../../navDrawer/HeaderDrawer';

const Transaksi = () => {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <TopTabNav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Transaksi;
