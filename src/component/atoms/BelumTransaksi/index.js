import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ibu} from '../../../assets/img';

export default function BelumTransaksi() {
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.textBlack}>
          Anda belum memiliki transaksi apapun sekarang ini, tapi anda bisa
        </Text>
        <Ibu style={styles.marginVer} />
        <Text style={styles.textBlack}>
          Mulai menambahkan dengan menekan{' '}
          <Text style={styles.textBlue}>tombol +</Text> dibawah
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: '17%',
    paddingVertical: '10%',
    alignItems: 'center',
  },

  textBlack: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textBlue: {
    color: '#5782FC',
  },

  marginVer: {
    marginVertical: '15%',
  },
});
