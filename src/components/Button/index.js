import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import colors from '~/config/colors';

const Button = ({ text, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor || colors.primary },
      ]}>
      <Text style={[styles.textBtn, { color: textColor || 'white' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
