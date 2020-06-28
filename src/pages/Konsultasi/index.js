import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconProfileKonsultasi,
  Star,
  IconProfileKonsultasi2,
  IconProfileKonsultasi3,
} from '../../assets/img';

export default function Konsultasi() {
  return (
    <View style={styles.layout}>
      <View style={styles.wrapper}>
        <IconProfileKonsultasi />
        <View style={styles.text}>
          <Text style={styles.title}>Sri Maharani</Text>
          <Text style={styles.tanggal}>Perencanaan Keuangan</Text>
          <View style={{paddingTop: '5%'}}>
            <Star />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <IconProfileKonsultasi2 />
        <View style={styles.text}>
          <Text style={styles.title}>Hidayati</Text>
          <Text style={styles.tanggal}>Perencanaan Keuangan</Text>
          <View style={{paddingTop: '5%'}}>
            <Star />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <IconProfileKonsultasi3 />
        <View style={styles.text}>
          <Text style={styles.title}>Dwi</Text>
          <Text style={styles.tanggal}>Perencanaan Keuangan</Text>
          <View style={{paddingTop: '5%'}}>
            <Star />
          </View>
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
    marginBottom: '5%',
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
});
