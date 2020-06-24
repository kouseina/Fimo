import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ibu} from '../../../assets/img';
import DescTidakAdaTransaksi from '../DescTidakAdaTransaksi';
import BtnBlue from '../BtnBlue';

const EnableDesc = ({enable, onPress}) => {
  if (enable === true) {
    return <DescTidakAdaTransaksi />;
  } else {
    return (
      <View style={{paddingTop: '15%', width: '100%'}}>
        <BtnBlue value="TAMBAHKAN" onPress={onPress} />
      </View>
    );
  }
};

export default function TidakAdaTransaksi({descEnable, onPress}) {
  return (
    <View style={styles.layout}>
      <Ibu style={styles.ibu} />
      <Text style={styles.title}>Tidak ada Transaksi</Text>
      <EnableDesc enable={descEnable} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ibu: {
    marginBottom: '8%',
  },

  title: {
    fontSize: 24,
    color: '#373737',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1%',
  },
});
