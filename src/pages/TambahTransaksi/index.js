import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue} from '../../component/atoms';
import {ScrollView} from 'react-native-gesture-handler';

const TambahTransaksi = () => {
  return (
    <ScrollView style={styles.layout}>
      <FormInput value="Jumlah" />
      <FormInput value="Kategori" />
      <FormInput value="Catatan" />
      <FormInput value="Tanggal" />
      <View style={styles.BtnBlue}>
        <BtnBlue value="SIMPAN" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#FAFAFA',
    padding: '6%',
  },

  BtnBlue: {
    marginTop: '10%',
  },
});

export default TambahTransaksi;
