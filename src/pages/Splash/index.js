import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from './../../assets/img/logo.svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 4000);
  });
  return (
    <View style={styles.layout}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Splash;
