import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {BtnBlue, BtnGoogle} from '../../component/atoms';
import CheckBox from '@react-native-community/checkbox';
import Atau from './../../assets/img/atau.svg';
import FormScreen from '../../component/FormScreen';
import FormInput from '../../component/atoms/FormInput';

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleGoto = screen => {
    navigation.replace(screen);
  };

  return (
    <ScrollView style={styles.layout}>
      <FormScreen />
      <FormInput title="Email / Nomor Telepon" />
      <FormInput title="Password" secure={true} />
      <View style={styles.wrapperRemind}>
        <View style={styles.wrapperIngatSaya}>
          <CheckBox
            disabled={false}
            title={toggleCheckBox}
            onValueChange={() =>
              toggleCheckBox
                ? setToggleCheckBox(false)
                : setToggleCheckBox(true)
            }
          />
          <Text style={styles.ingatSaya}>Ingat Saya</Text>
        </View>
        <Text style={styles.lupaSandi}>Lupa kata sandi?</Text>
      </View>
      <BtnBlue value="LOGIN" onPress={() => handleGoto('Content')} />
      <View style={{marginVertical: '3%'}}>
        <Atau />
      </View>
      <BtnGoogle />
      <View style={styles.wrapperDaftar}>
        <Text style={styles.belumPunyaAkun}>Belum punya akun? Daftar</Text>
        <TouchableOpacity onPress={() => handleGoto('Register')}>
          <Text style={styles.disini}>disini</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: '7%',
    paddingVertical: '2%',
  },

  wrapperRemind: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3%',
  },

  wrapperIngatSaya: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },

  ingatSaya: {
    fontSize: 14,
    color: '#333',
  },

  lupaSandi: {
    fontSize: 14,
    color: '#777',
  },

  wrapperDaftar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: '18%',
  },

  belumPunyaAkun: {
    color: '#777',
    fontSize: 14,
    paddingRight: 5,
  },

  disini: {
    color: '#5782FC',
    fontSize: 14,
  },
});

export default Login;
