import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import Google from './../../../assets/img/google.svg';

const BtnGoogle = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.Btn} onPress={onPress}>
      <Google />
      <Text style={styles.Text}>MASUK DENGAN GOOGLE</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    borderWidth: 2,
    flexDirection: 'row',
    minWidth: 350,
  },

  Text: {
    color: '#777777',
    fontSize: 16,
    paddingLeft: 6,
  },
});

export default BtnGoogle;
