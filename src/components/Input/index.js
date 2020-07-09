import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import colors from '~/config/colors';

const Input = (props) => {
  return (
    <TextInput
      {...props}
      placeholder={'Type here: D E A D P O O L'}
      placeholderTextColor={colors.white}
      color={colors.white}
      style={styles.container}
    />
  );
};

export default Input;
