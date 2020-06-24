import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TidakAdaTransaksi, BtnBlue} from '../../component/atoms';
import {BahanMakanan, Edit, Delete, SppSekolah} from '../../assets/img';

const TransaksiBahanMakanan = () => {
  return (
    <View style={styles.wrapperTransaksi}>
      <BahanMakanan />
      <View style={styles.text}>
        <Text style={styles.title}>Bahan Makanan</Text>
        <Text style={styles.tanggal}>Berikutnya: Senin 22/06/2020</Text>
        <Text style={styles.harga}>Rp 50.000</Text>
      </View>
      <Edit />
      <Delete />
    </View>
  );
};

const TransaksiSPPSekolah = () => {
  return (
    <View style={styles.wrapperTransaksi}>
      <SppSekolah />
      <View style={styles.text}>
        <Text style={styles.title}>SPP Sekolah</Text>
        <Text style={styles.tanggal}>Berikutnya: Jumat 10/07/2020</Text>
        <Text style={styles.harga}>Rp 475.000</Text>
      </View>
      <Edit />
      <Delete />
    </View>
  );
};

export default function TransaksiBerulang({navigation}) {
  return (
    <View style={styles.layout}>
      <BtnBlue
        value="TAMBAHKAN"
        onPress={() => navigation.navigate('Tambah Transaksi Berulang')}
      />
      <TransaksiBahanMakanan />
      <TransaksiSPPSekolah />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#fafafa',
    flex: 1,
    padding: '7%',
  },

  wrapperTransaksi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6%',
    padding: '5%',
    paddingHorizontal: '8%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  tanggal: {
    fontSize: 12,
    color: '#777',
  },

  harga: {
    paddingTop: '4%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
