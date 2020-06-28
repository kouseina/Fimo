import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Women} from '../../assets/img';
import {Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={{marginTop: '25%', marginLeft: '8%'}}>
      <Women />
      <Text
        style={{
          marginTop: '6%',
          fontWeight: 'bold',
          fontSize: 18,
          color: '#333333',
        }}>
        Susan Yanti
      </Text>
      <Text style={{marginBottom: 30, fontSize: 14, color: '#909090'}}>
        susanyanti@fimo.com
      </Text>
    </View>
  );
};

export default Profile;
