import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Plus} from '../../../assets/img';

const BtnPlus = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Plus style={{marginBottom: '50%'}} />
    </TouchableOpacity>
  );
};

export default BtnPlus;
