import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import BotTabNav from '../../botTabNav';
import HeaderDrawer from '../../navDrawer/HeaderDrawer';
import {BaseRouter} from '@react-navigation/native';

const ManagementKeuangan = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <HeaderDrawer
        onPress={() => navigation.toggleDrawer()}
        title="Management Keuangan"
      />
      <BotTabNav navigation={navigation} bot="Transaksi" />
    </View>
  );
};

export default ManagementKeuangan;
