import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.two]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.two]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.two]} />
        <View style={[styles.box, styles.box3]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box]} />
        <View style={[styles.box, styles.box3]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 80,
    width: 80,
    backgroundColor: 'grey',
    margin: 5,
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'orange',
  },
  two: {
    flex: 2,
  },
});

export default HelloWorldApp;
