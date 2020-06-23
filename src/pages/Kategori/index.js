import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopTabNav from './topTabNav';

const Kategori = () => {
  return (
    <View style={styles.layout}>
      <TopTabNav />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default Kategori;
