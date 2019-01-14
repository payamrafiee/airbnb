import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../styles/colors'
import InputField from '../components/form/inputField'

class Login extends Component {
  state = {  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>
              login
            </Text>
            <InputField labelText='EMAIL ADDRESS' customStyle={{ marginBottom: 30}}/>
            <InputField labelText='PASSWORD' inputType />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex:1,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  }
})

export default Login;
