import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue} from '../../component/atoms';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ArrowRight} from '../../assets/img';

const Btn = () => {
  return (
    <View>
      <BtnBlue />
    </View>
  );
};

const TambahTransaksi = ({navigation}) => {
  return (
    <ScrollView style={styles.layout}>
      <FormInput title="Jumlah" />
      <View>
        <Text style={styles.titleInput}>Kategori</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => navigation.navigate('Kategori')}>
          <Text style={styles.text}>Pilih Kategori</Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <FormInput title="Catatan" />
      <FormInput title="Tanggal" value="Hari ini 26 Juni 2020" />
      <View style={styles.BtnBlue}>
        <BtnBlue
          value="SIMPAN"
          onPress={() => navigation.goBack(alert('OK'))}
        />
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

  titleInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '3%',
  },

  textInput: {
    padding: 16,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: '#9A9A9A',
  },
});

export default TambahTransaksi;
