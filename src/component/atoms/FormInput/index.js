import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const FormInput = ({value}) => {
  const placeholder = 'Masukkan ' + value.toString();
  return (
    <View>
      <Text style={styles.titleInput}>{value}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FormInput;
