import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import BotTabNav from '../../botTabNav';
import NavDrawer from '../../navDrawer';

const ManagementKeuangan = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <BotTabNav navigation={navigation} />
    </View>
  );
};

export default ManagementKeuangan;
