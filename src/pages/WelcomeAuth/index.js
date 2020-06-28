import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import Illus from './../../assets/illustration/keluarga-bahagia.svg';
import {
  TitleIntro,
  DescIntro,
  BtnBlue,
  BtnWhite,
  BtnGoogle,
} from '../../component/atoms';

const WelcomeAuth = ({navigation}) => {
  const handleGoto = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.top}>
        <View style={{position: 'absolute', bottom: 0}}>
          <Illus />
        </View>
      </View>
      <View style={styles.bottom}>
        <TitleIntro />
        <View style={{width: '80%'}}>
          <DescIntro />
        </View>
        <View />
        <View style={styles.Btn}>
          <BtnWhite value="DAFTAR" onPress={() => handleGoto('Register')} />
          <BtnBlue value="LOGIN" onPress={() => handleGoto('Login')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
  },

  top: {
    backgroundColor: '#FFE8D2',
    alignItems: 'center',
    height: '60%',
  },

  bottom: {
    backgroundColor: '#fff',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },

  Btn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default WelcomeAuth;
