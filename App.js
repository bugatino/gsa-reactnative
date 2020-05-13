import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box1: {width: 50, height: 50, backgroundColor: 'powderblue'},
  box2: {width: 150, height: 50, backgroundColor: 'skyblue'},
  box3: {width: 250, height: 100, backgroundColor: 'steelblue'},
  box4: {height: 100, backgroundColor: 'orange'},
});

export default HelloWorldApp;
