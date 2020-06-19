import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ibu} from '../../../assets/img';
import DescTidakAdaTransaksi from '../DescTidakAdaTransaksi';
import BtnBlue from '../BtnBlue';

const EnableDesc = ({enable}) => {
  if (enable === true) {
    return <DescTidakAdaTransaksi />;
  } else {
    return (
      <View style={{paddingTop: '15%'}}>
        <BtnBlue value="TAMBAHKAN" />
      </View>
    );
  }
};

export default function TidakAdaTransaksi({descEnable}) {
  return (
    <View style={styles.layout}>
      <Ibu style={styles.ibu} />
      <Text style={styles.title}>Tidak ada Transaksi</Text>
      <EnableDesc enable={descEnable} />
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
