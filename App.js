import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

function HelloWorldApp() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, borderColor: 'grey', borderWidth: 1}}
        placeholder="Type here!"
        onChangeText={text => setText(text)}
        value={text}
      />
    </View>
  );
}
export default HelloWorldApp;
