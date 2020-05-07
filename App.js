import React from 'react';
import {Text, View, Image} from 'react-native';

function HelloWorldApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width: 200, height: 200}}
      />
      <Text style={{marginBottom: 35}}>This is a cat!</Text>

      <Image
        source={require('./assets/image/logo_cx.jpg')}
        style={{width: '100%', resizeMode: 'contain'}}
      />
      <Text>Drive your way</Text>
    </View>
  );
}
export default HelloWorldApp;
