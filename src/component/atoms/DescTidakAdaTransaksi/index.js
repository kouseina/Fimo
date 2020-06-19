import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DescTidakAdaTransaksi() {
  return (
    <Text style={styles.desc}>
      Tekan <Text style={styles.blue}>+</Text> untuk menambahkan
    </Text>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
  },

  blue: {
    color: '#5782FC',
  },
});
