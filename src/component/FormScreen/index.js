import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from './../atoms/FormInput';
import {TextInput} from 'react-native-gesture-handler';

const FormScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.desc}>Ayo manajemen keuangan keluargamu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '1%',
  },

  desc: {
    fontSize: 16,
    color: '#666',
    marginBottom: '6%',
  },

  titleInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '3%',
  },

  textInput: {
    paddingHorizontal: 16,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '3%',
  },
});

export default FormScreen;
