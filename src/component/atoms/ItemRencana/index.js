import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowRight,
  DanaDarurat,
  TransaksiBerulang,
  Tagihan,
} from '../../../assets/img';

const Icon = ({icon}) => {
  if (icon === 'danadarurat') {
    return <DanaDarurat />;
  } else if (icon === 'transaksiberulang') {
    return <TransaksiBerulang />;
  } else if (icon === 'tagihan') {
    return <Tagihan />;
  }
};

export default function ItemRencana({warna, title, desc, icon}) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Icon icon={icon} />
      <View style={styles.wrapperText}>
        <Text
          style={{
            color: warna,
            fontSize: 16,
            fontWeight: 'bold',
            paddingBottom: 3,
          }}>
          {title}
        </Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <ArrowRight />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: '6%',
    flexDirection: 'row',
    paddingRight: '9%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: '5%',
  },

  wrapperText: {
    width: '90%',
    paddingLeft: '8%',
    paddingRight: '12%',
  },

  desc: {
    color: '#777',
    fontSize: 13,
    lineHeight: 18,
  },
});
