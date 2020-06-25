import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconProfileKonsultasi} from '../../assets/img';

export default function Konsultasi() {
  return (
    <View style={styles.layout}>
      <View style={styles.wrapper}>
        <IconProfileKonsultasi />
        <View style={styles.text}>
          <Text style={styles.title}>Tips Atur Uang</Text>
          <Text style={styles.tanggal}>Berikutnya: Senin 22/06/2020</Text>
          <Text style={styles.harga}>Rp 50.000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    paddingVertical: '5%',
    paddingHorizontal: '6%',
  },

  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    paddingLeft: '4%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },

  tanggal: {
    fontSize: 12,
    color: '#777',
  },

  harga: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    paddingTop: '4%',
  },
});
