import React from 'react';
import { View, Text, Image } from 'react-native';
import { Search } from '~/components';
import styles from './styles';

const deadpool = require('~/assets/deadpool.png');

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>Just type below</Text>
      <Text style={styles.bigTitle}>Your Favorite SuperHero</Text>
      <Text style={styles.smallTitle}>And rock!</Text>
      <Image source={deadpool} style={styles.image} resizeMode="contain" />
      <Search />
    </View>
  );
};
export default Login;
