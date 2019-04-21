import React, { Component } from "react";
import { View, Text } from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ marginTop: 70 }}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
