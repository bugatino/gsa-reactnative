import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HelloWorldApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      }}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'orange',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default HelloWorldApp;
