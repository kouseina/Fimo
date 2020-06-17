import React from 'react';
import {Text} from 'react-native';

const DescIntro = () => {
  return (
    <Text style={styles.desc}>
      Atasi permasalahan keuangan keluarga dengan Fimo agar tercipta keluaga
    </Text>
  );
};

const styles = {
  desc: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
    marginBottom: 50,
  },
};

export default DescIntro;
