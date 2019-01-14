import React, { Component } from 'react';
import { View, Text,StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../../styles/colors'

class InputField extends Component {
  state = {  }
  render() {
    const { labelText, labelTextSize, labelColor, textColor, inputType, customStyle } = this.props
    const fontSize = labelTextSize || 14
    const color = labelColor || colors.white
    const inputColor = textColor || colors.white

    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[styles.label, {fontSize, color}]}>
          {labelText}
        </Text>
        <TextInput
          autoCorrect={false}
          style={[styles.inputField, { color: inputColor}]}
          secureTextEntry={inputType? true : false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  label: {
    fontWeight: '700',
    marginBottom: 10,
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: colors.white
  }
})

export default InputField;
