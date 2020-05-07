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
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  render() {
    const {message} = this.props;
    return (
      <View>
        <Text>{message}</Text>
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
