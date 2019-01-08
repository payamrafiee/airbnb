import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'

export default class Loggedout extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWraper}>
          <Image style={styles.logo}source={require('../img/airbnb-logo.png')}/>
          <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
          <RoundedButton icon={<Icon name='facebook' size={20} style={styles.fbButtonIcon} />} background={colors.white} textColor={colors.green01} text='Continue With Facebook'/>
          <RoundedButton textColor={colors.white} text='Create an Account'/>

          <TouchableOpacity style={styles.moreOptionsButton}>
            <Text style={styles.moreOptionsText}>More Option</Text>
          </TouchableOpacity>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>By Continue, Create Account or More options,</Text>
            <Text style={styles.termsText}>I agree to Airbnb's</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={[{textDecorationLine: 'underline'}, styles.termsText]}>Terms and Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={[{textDecorationLine: 'underline'}, styles.termsText]}>Payments Term of Service</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green01,
  },
  welcomeWraper: {
    flex:1,
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 30,
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  fbButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 10
  },
  moreOptionsText: {
    color: colors.white,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    marginTop: 30,
    flexDirection: 'row'
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    margin: 2,
  },
});
