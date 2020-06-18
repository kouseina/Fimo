import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BotTabNav from '../../botTabNav';

const ManagementKeuangan = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <BotTabNav navigation={navigation} />
    </View>
  );
};

export default ManagementKeuangan;
