import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';

const BtnWhite = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.Btn} onPress={onPress}>
      <Text style={styles.Text}>{value}</Text>
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
    borderColor: '#5782FC',
    borderWidth: 2,
    minWidth: 150,
  },

  Text: {
    color: '#5782FC',
    fontSize: 16,
  },
});

export default BtnWhite;
