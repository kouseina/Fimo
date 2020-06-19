import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TidakAdaTransaksi} from '../../component/atoms';

export default function Juni() {
  return (
    <View style={styles.layout}>
      <TidakAdaTransaksi descEnable={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: '6%',
  },
});
