import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  IconManagementKeuangan,
  BahanMakanan,
  Pakaian,
  PeralatanRumahTangga,
  Ojek,
  Bensin,
  SppSekolah,
  Listrik,
  Air,
  Telepon,
} from '../../../assets/img';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TitleKategori = ({value}) => {
  return <Text style={styles.title}>{value}</Text>;
};

const IconKategori = ({icon}) => {
  if (icon === 'Bahan Makanan') {
    return <BahanMakanan />;
  } else if (icon === 'Pakaian') {
    return <Pakaian />;
  } else if (icon === 'Peralatan Rumah Tangga') {
    return <PeralatanRumahTangga />;
  } else if (icon === 'Ojek') {
    return <Ojek />;
  } else if (icon === 'Bensin') {
    return <Bensin />;
  } else if (icon === 'SPP Sekolah') {
    return <SppSekolah />;
  } else if (icon === 'Listrik') {
    return <Listrik />;
  } else if (icon === 'Air') {
    return <Air />;
  } else if (icon === 'Telepon') {
    return <Telepon />;
  } else {
    return <IconManagementKeuangan />;
  }
};

const ChildKategori = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapperChild} onPress={onPress}>
      <IconKategori icon={value} />
      <Text style={styles.child}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8C99B4',
    paddingHorizontal: 30,
    paddingVertical: 12,
  },

  wrapperChild: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },

  child: {
    marginLeft: 12,
    fontSize: 16,
    color: '#404852',
    fontWeight: 'bold',
  },
});

export {ChildKategori, TitleKategori};
