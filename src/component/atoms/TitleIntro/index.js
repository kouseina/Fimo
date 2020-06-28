import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TitleIntro = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Keluarga Bahagia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: '7%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default TitleIntro;
