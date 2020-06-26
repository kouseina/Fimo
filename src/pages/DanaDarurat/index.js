import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue, BtnWhite} from '../../component/atoms';
import {TextInput} from 'react-native-gesture-handler';

import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp} from '../../assets/img';

const DanaDarurat = () => {
  const [showTagihan, setShowTagihan] = useState('200%');

  return (
    <View style={styles.layout}>
      <FormInput title="Pengeluaran Bulanan" />
      <View>
        <Text style={styles.titleInput}>Status Keluarga</Text>
        <DropDownPicker
          items={[
            {label: 'Memiliki Anak 1', value: 'item1', selected: true},
            {label: 'Memiliki Anak 2', value: 'item1'},
            {label: 'Belum Memiliki Anak', value: 'item2'},
          ]}
          containerStyle={{height: 40}}
          onChangeItem={item => console.log(item.label, item.value)}
          customArrowDown={ArrowDown}
          customArrowUp={ArrowUp}
        />
      </View>
      <View style={styles.Btn}>
        <BtnBlue value="HITUNG" onPress={() => setShowTagihan(0)} />
      </View>
      {/*  */}
      <View
        style={{
          marginVertical: '10%',
          justifyContent: 'space-between',
          height: '55%',
          marginTop: showTagihan,
        }}>
        <View>
          <View style={styles.line} />
          <View style={styles.tagihan}>
            <Text style={styles.titleTagihan}>
              Dana darurat yang dibutuhkan adalah:
            </Text>
            <Text style={styles.valueTagihan}>Rp 48.000.000</Text>
          </View>
        </View>
        <BtnWhite value="EXPORT" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#fafafa',
    padding: '7%',
  },

  Btn: {
    marginTop: '8%',
  },

  titleInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '3%',
  },

  line: {
    borderColor: '#DEDEDE',
    width: '100%',
    borderWidth: 1,
    marginBottom: '10%',
  },

  tagihan: {
    borderWidth: 1,
    borderColor: '#5782FC',
    borderStyle: 'dashed',
    paddingVertical: 23,
    paddingHorizontal: 18,
    borderRadius: 5,
  },

  titleTagihan: {
    fontSize: 14,
    color: '#333',
  },

  valueTagihan: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    paddingTop: 10,
  },
});

export default DanaDarurat;
