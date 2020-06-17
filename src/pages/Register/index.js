import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BtnBlue, BtnGoogle} from '../../component/atoms';
import Atau from './../../assets/img/atau.svg';
import FormScreen from '../../component/FormScreen';
import FormInput from '../../component/atoms/FormInput';

const Register = () => {
  return (
    <ScrollView style={styles.layout}>
      <FormScreen />
      <FormInput value="Nama" />
      <FormInput value="Email" />
      <FormInput value="Password" />
      <FormInput value="Nomor Telepon" />
      <View style={styles.wrapperBtn}>
        <BtnBlue value="DAFTAR" />
        <View style={{marginVertical: '3%'}}>
          <Atau />
        </View>
        <BtnGoogle />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: '7%',
    paddingVertical: '2%',
  },

  wrapperBtn: {
    marginVertical: '8%',
  },
});

export default Register;
