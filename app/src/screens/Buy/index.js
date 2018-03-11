import React, { Component } from 'react';
import { View } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class Buy extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <CreditCardInput onChange={this._onChange} />
      </View>
    );
  }
}