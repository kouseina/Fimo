import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TitleKategori, ChildKategori} from '../../component';

export default function Pendapatan() {
  return (
    <ScrollView style={styles.layout}>
      <ChildKategori value="Gaji" />
      <ChildKategori value="Pemberian" />
      <ChildKategori value="Penjualan" />
      <ChildKategori value="Bunga" />
      <ChildKategori value="Lainnya" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FAFAFA',
  },
});
