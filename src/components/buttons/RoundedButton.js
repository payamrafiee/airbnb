import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
// import PropTypes from 'prop-types'

class RoundedButton extends Component {
  state = {  }
  render() {
    const {text, textColor, background, icon, handleOnPress} = this.props
    const backgroundColor = background || 'transparent'
    const color = textColor || colors.black
    return (
      <TouchableOpacity style={[{backgroundColor},styles.wrapper]}>
        <View style={{ flexDirection: 'row'}}>
          {icon}
          <Text style={[{color},styles.buttonText]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


// RoundedButton.PropTypes = {
//   text: PropTypes.string.isRequired
// }

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center'
  }
})


export default RoundedButton;
