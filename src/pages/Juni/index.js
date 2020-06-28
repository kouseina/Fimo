import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TidakAdaTransaksi} from '../../component/atoms';
import {
  Pengeluaran,
  Pendapatan,
  Chart,
  Pakaian,
  BahanMakanan,
  AlatRumahTangga,
} from '../../assets/img';
import {ScrollView} from 'react-native-gesture-handler';

const Transaksi = ({
  tanggal,
  hari,
  pengeluaran,
  pengeluaranBM,
  pengeluaranART,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: '5%',
        marginBottom: '5%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 33, color: '#404852', fontWeight: 'bold'}}>
            {tanggal}
          </Text>
          <View style={{marginLeft: '7%'}}>
            <Text style={{fontSize: 12, color: '#777'}}>{hari}</Text>
            <Text style={{fontSize: 12, color: '#777'}}>Juni 2020</Text>
          </View>
        </View>
        <Text style={{color: '#FF5989', fontWeight: 'bold', fontSize: 14}}>
          {pengeluaran}
        </Text>
      </View>
      {/*  */}
      <View
        style={{
          borderColor: '#f8f8f8',
          borderWidth: 1,
          marginVertical: '6%',
          marginLeft: '-5%',
          marginRight: '-5%',
        }}
      />
      {/*  */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pakaian />
            <Text
              style={{
                marginLeft: '8%',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#404852',
              }}>
              Pakaian
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: '#777'}}>
            -Rp 200.000
          </Text>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: '4%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <BahanMakanan />
            <Text
              style={{
                marginLeft: '8%',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#404852',
              }}>
              Bahan Makanan
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: '#777'}}>
            {pengeluaranBM}
          </Text>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AlatRumahTangga />
            <Text
              style={{
                marginLeft: '8%',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#404852',
              }}>
              Alat Rumah Tangga
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: '#777'}}>
            {pengeluaranART}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function Juni() {
  return (
    <ScrollView style={styles.layout}>
      <View style={styles.wrapperTop}>
        <Pengeluaran />
        <Pendapatan />
      </View>
      <View style={styles.wrapperAnggaran}>
        <Text style={styles.same}>Anggaran anda saat ini</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '3%',
            marginBottom: '2%',
          }}>
          <Text style={styles.same}>Rp. 12.000.000</Text>
          <Text style={styles.same}>Rp. 21.000.000</Text>
        </View>
        <Chart />
      </View>
      <Transaksi
        tanggal="26"
        hari="Hari ini"
        pengeluaran="-Rp 400.000"
        pengeluaranBM="-Rp 100,000"
        pengeluaranART="-Rp 100,000"
      />
      <Transaksi
        tanggal="25"
        hari="Kemaren"
        pengeluaran="-Rp 600.000"
        pengeluaranBM="-Rp 200,000"
        pengeluaranART="-Rp 200,000"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#FAFAFA',
    padding: '7%',
  },

  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  wrapperAnggaran: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '5%',
    marginVertical: '4%',
  },

  same: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#404852',
  },
});
