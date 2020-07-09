import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Animated,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import styles from './styles';

import { Input, Button, HeroList } from '~/components';

import { searchHero } from '~/services/marvelApi';

const Search = ({ changed }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [hero, setHero] = useState([]);

  const [contentY] = useState(new Animated.Value(200));
  const [buttonY] = useState(new Animated.Value(200));
  const [imageY] = useState(new Animated.Value(200));

  if (changed === true) {
    Animated.stagger(200, [
      Animated.timing(imageY, {
        duration: 800,
        toValue: 0,
        useNativeDriver: false,
      }),

      Animated.timing(contentY, {
        duration: 800,
        toValue: 0,
        useNativeDriver: false,
      }),

      Animated.timing(buttonY, {
        duration: 800,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start();
  }

  const handleSearch = async (name) => {
    if (name === '') {
      return;
    }
    setLoading(true);

    searchHero(name)
      .then((response) => {
        setHero(response.data.data.results);
        setVisible(true);
        setName('');
      })
      .catch((er) => {
        Alert.alert('Oops', 'Something went wrong');
        console.warn(er);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Input
        placeholder="How about Spider-Man?"
        marginBottom={20}
        value={name}
        onChangeText={(text) => setName(text)}
        onSubmitEditing={() => handleSearch(name)}
      />
      <View
        visible
        style={{
          display: visible ? 'flex' : 'none',
          justifyContent: 'center',
          height: 80,
          marginBottom: 10,
        }}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <HeroList data={hero} />
        )}
      </View>
      {loading ? (
        <Button text="Let's see..." />
      ) : (
        <Button
          backgroundColor="#b71c1c"
          text={"Let's rock!"}
          onPress={() => handleSearch(name)}
          visible={visible}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default Search;
