import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './src/config/router';

export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

