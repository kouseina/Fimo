import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Illus from './../../assets/illustration/keluarga-bahagia.svg';
import {TitleIntro, DescIntro, BtnBlue, BtnWhite} from '../../component/atoms';

const WelcomeAuth = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          backgroundColor: '#FFE8D2',
          width: '100%',
          alignItems: 'center',
          height: '60%',
        }}>
        <View style={{position: 'absolute', bottom: 0}}>
          <Illus />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 50,
        }}>
        <TitleIntro />
        <DescIntro />
        <BtnBlue value="LOGIN" onPress={() => alert('Login')} />
        <BtnWhite value="DAFTAR" onPress={() => alert('Daftar')} />
      </View>
    </View>
  );
};

export default WelcomeAuth;
