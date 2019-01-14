import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LoggedOut from './src/screens/LoggedOut'
import Login from './src/screens/Login'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Login />
      </View>
    );
  }
}

