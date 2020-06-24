import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue} from '../../component/atoms';
import {TextInput} from 'react-native-gesture-handler';

import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp} from '../../assets/img';

class DanaDarurat extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <FormInput title="Pengeluaran Bulanan" />
        <View>
          <Text style={styles.titleInput}>Status Keluarga</Text>
          <DropDownPicker
            items={[
              {label: 'Memiliki Anak', value: 'item1', selected: true},
              {label: 'Belum Memiliki Anak', value: 'item2'},
            ]}
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
            customArrowDown={ArrowDown}
            customArrowUp={ArrowUp}
          />
        </View>
        <View style={styles.Btn}>
          <BtnBlue value="HITUNG" />
        </View>
      </View>
    );
  }
}

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

  textInput: {
    paddingHorizontal: 16,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '3%',
  },
});

export default DanaDarurat;
