import React from 'react';
import {Text, View} from 'react-native';

function Heading(props) {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
}

class Heading2 extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}
export default function HelloWorldApp() {
  return (
    <View>
      <Heading message={'This is text of Heading from props'} />
      <Heading2 message={'This is text of Heading2 from props'} />
    </View>
  );
}
