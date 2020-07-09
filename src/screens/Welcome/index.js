import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Login/styles';

const deadpool = require('~/assets/deadpool.png');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>Welcome to the</Text>
      <Text style={styles.bigTitle}>BEST Marvel Comics</Text>
      <Text style={styles.smallTitle}>catalog of this earth!</Text>
      <Image source={deadpool} style={styles.image} resizeMode="contain" />
    </View>
  );
};
export default Welcome;
