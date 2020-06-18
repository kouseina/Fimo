import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Mei() {
  return <View style={styles.layout} />;
}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
});
