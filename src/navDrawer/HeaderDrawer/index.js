import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Menu, Notif, Kalender} from '../../assets/img';

export default function HeaderDrawer({onPress, title}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menu} onPress={onPress}>
        <Menu />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: '15%',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
});
