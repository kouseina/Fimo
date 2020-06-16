import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';

const BtnBlue = ({value}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btn: {
    width: 350,
    backgroundColor: '#5782FC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },

  text: {
    color: '#fff',
    fontSize: 16,
  },
};

export default BtnBlue;
