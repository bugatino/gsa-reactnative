import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box1: {width: 50, height: 50, backgroundColor: 'powderblue'},
  box2: {width: 50, height: 50, backgroundColor: 'skyblue'},
  box3: {width: 50, height: 50, backgroundColor: 'steelblue'},
});

export default HelloWorldApp;
