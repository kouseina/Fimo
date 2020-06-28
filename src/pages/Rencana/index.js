import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ItemRencana} from '../../component/atoms';

const Rencana = ({navigation}) => {
  return (
    <ScrollView style={styles.layout}>
      <ItemRencana
        icon="danadarurat"
        warna="#FF5569"
        title="Dana Darurat"
        desc="Membuat perencanaan kalkulasi dana darurat yang terbaik"
        onPress={() => navigation.navigate('Dana Darurat')}
      />
      <ItemRencana
        icon="transaksiberulang"
        warna="#F9A543"
        title="Transaksi Berulang"
        desc="Membuat transaksi yang secara otomatis ditambahkan di waktu yang akan datang"
        onPress={() => navigation.navigate('Transaksi Berulang')}
      />
      <ItemRencana
        icon="tagihan"
        warna="#5A7FFF"
        title="Tagihan"
        desc="Memantau tagihan berulang anda seperti listrik, air, internet, dll"
        onPress={() => alert('Coming Soon')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FAFAFA',
    height: '100%',
    paddingTop: '5%',
    paddingHorizontal: '7%',
  },
});

export default Rencana;
