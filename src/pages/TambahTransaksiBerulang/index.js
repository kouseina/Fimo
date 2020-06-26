import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue} from '../../component/atoms';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import {ArrowRight, Pengingat} from '../../assets/img';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp} from '../../assets/img';

const TambahTransaksiBerulang = ({navigation}) => {
  const handleKategori = () => {
    navigation.navigate('Kategori');
  };
  const [isTanggalVisible, setTanggalVisible] = useState(false);

  const [showColorKategori, setShowColorKategori] = useState('#adadad');
  const [showColorTanggal, setShowColorTanggal] = useState('#adadad');
  const toggleTanggal = () => {
    setTanggalVisible(!isTanggalVisible);
  };

  const multipleKategori = () => {
    handleKategori();
    setShowColorKategori('#333333');
  };

  const multipleTanggal = () => {
    toggleTanggal();
    setShowColorTanggal('#333333');
  };

  return (
    <ScrollView style={styles.layout}>
      <FormInput title="Jumlah" />
      <View>
        <Text style={styles.titleInput}>Kategori</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => multipleKategori()}>
          <Text style={{color: showColorKategori, fontWeight: 'bold'}}>
            Bahan Makanan
          </Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <FormInput title="Catatan" />
      <View>
        <Text style={styles.titleInput}>Tanggal Pengulangan</Text>
        <TouchableOpacity style={styles.textInput} onPress={multipleTanggal}>
          <Text style={{color: showColorTanggal, fontWeight: 'bold'}}>
            26 Juni 2020 - 27 Juni 2020
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isTanggalVisible}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: '5%',
              marginTop: '5%',
              paddingHorizontal: '5%',
            }}>
            <DropDownPicker
              items={[
                {label: 'Ulangi Tiap Hari', value: 'item1', selected: true},
                {label: 'Ulangi Tiap Minggu', value: 'item2'},
                {label: 'Ulangi Tiap Bulan', value: 'item3'},
              ]}
              containerStyle={{height: 40, width: '100%'}}
              onChangeItem={item => console.log(item.label, item.value)}
              customArrowDown={ArrowDown}
              customArrowUp={ArrowUp}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '5%',
              }}>
              <Text style={styles.titleInput}>Mulai Dari</Text>
              <TextInput
                style={{
                  padding: 16,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: '3%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '65%',
                }}
                placeholder="1 Januari 2020"
              />
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={styles.titleInput}>Sampai</Text>
              <TextInput
                style={{
                  padding: 16,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: '3%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '65%',
                }}
                placeholder="1 Januari 2020"
              />
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={styles.titleInput}>Setiap</Text>
              <TextInput
                style={{
                  padding: 16,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: '3%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '65%',
                  fontWeight: 'bold',
                }}
                value="1 Hari"
              />
            </View>
          </View>

          <View style={{zIndex: -1}}>
            <Button title="Simpan" onPress={toggleTanggal} />
            <Button title="Batal" onPress={toggleTanggal} disabled={true} />
          </View>
        </View>
      </Modal>
      <View style={styles.BtnBlue}>
        <BtnBlue value="SIMPAN" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#FAFAFA',
    padding: '6%',
  },

  BtnBlue: {
    marginTop: '10%',
  },

  titleInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '3%',
    marginRight: '10%',
  },

  textInput: {
    padding: 16,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default TambahTransaksiBerulang;
