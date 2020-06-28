import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChildKategori, TitleKategori} from '../../component';
import {ScrollView} from 'react-native-gesture-handler';

export default function Pengeluaran() {
  return (
    <ScrollView style={styles.layout}>
      <TitleKategori value="Belanja" />
      <ChildKategori value="Bahan Makanan" />
      <ChildKategori value="Pakaian" />
      <ChildKategori value="Peralatan Rumah Tangga" />
      {/*  */}
      <TitleKategori value="Transportasi" />
      <ChildKategori value="Ojek" />
      <ChildKategori value="Bensin" />
      {/*  */}
      <TitleKategori value="Pendidikan" />
      <ChildKategori value="SPP Sekolah" />
      {/*  */}
      <TitleKategori value="Tagihan" />
      <ChildKategori value="Listrik" />
      <ChildKategori value="Air" />
      <ChildKategori value="Telepon" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FAFAFA',
  },
});
