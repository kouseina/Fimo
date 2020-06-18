import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';

const BtnBlue = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    backgroundColor: '#5782FC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 310,
  },

  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BtnBlue;
