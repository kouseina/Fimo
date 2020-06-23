import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Women,
  ArrowRight,
  Setting,
  Password,
  NotifGrey,
  Like,
  LogOut,
} from '../../assets/img';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HeaderDrawer from '../../navDrawer/HeaderDrawer';

const ItemMenu = ({icon, name}) => {
  return (
    <TouchableOpacity style={styles.wrapperMenu}>
      <View style={styles.left}>
        <View style={{marginRight: 20}}>{icon}</View>
        <Text style={styles.textMenu}>{name}</Text>
      </View>
      <ArrowRight />
    </TouchableOpacity>
  );
};

const Akun = ({navigation}) => {
  return (
    <ScrollView style={styles.bg}>
      <HeaderDrawer onPress={() => navigation.toggleDrawer()} />
      <View style={styles.layout}>
        <View style={styles.header}>
          <Women />
          <Text style={styles.title}>Susan Yanti</Text>
          <Text style={styles.email}>susanyanti@fimo.com</Text>
        </View>
        <View style={styles.menu}>
          <ItemMenu name="Edit Profile" icon={<Setting />} />
          <ItemMenu name="Ganti Password" icon={<Password />} />
          <ItemMenu name="Notifikasi" icon={<NotifGrey />} />
          <ItemMenu name="Beri Rating" icon={<Like />} />
          <TouchableOpacity style={styles.wrapperMenu}>
            <View style={styles.left}>
              <View style={{marginRight: 20}}>
                <LogOut />
              </View>
              <Text style={styles.textMenu}>
                <Text style={{color: '#FF3D6B'}}>Logout</Text>
              </Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
  },

  layout: {
    paddingVertical: '10%',
  },

  header: {
    marginBottom: '10%',
    alignItems: 'center',
  },

  title: {
    marginTop: '3.5%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },

  email: {
    fontSize: 14,
    color: '#909090',
    marginTop: '0.5%',
  },

  menu: {
    width: '100%',
    paddingHorizontal: '7%',
  },

  wrapperMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textMenu: {
    color: '#5B687B',
    fontSize: 18,
  },
});

export default Akun;
