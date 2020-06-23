import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChildKategori} from '../../component';

export default function HutangPiutang() {
  return (
    <ScrollView style={styles.layout}>
      <ChildKategori value="Hutang" />
      <ChildKategori value="Penagihan Utang" />
      <ChildKategori value="Piutang" />
      <ChildKategori value="Pembayaran" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
