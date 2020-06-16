import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';

const BtnWhite = ({value}) => {
  return (
    <TouchableOpacity style={styles.Btn}>
      <Text style={styles.Text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  Btn: {
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    borderColor: '#5782FC',
    borderWidth: 2,
  },

  Text: {
    color: '#5782FC',
    fontSize: 16,
  },
};

export default BtnWhite;
