import React from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HeroItem from '../HeroItem';
import { useNavigation } from '@react-navigation/native';
import { searchComics } from '~/services/marvelApi';

const ItemList = ({ data }) => {
  const navigation = useNavigation();

  const handlePress = async (item) => {
    try {
      await AsyncStorage.setItem('@show_real_app', 'true');
      await AsyncStorage.setItem('@selected_hero', JSON.stringify(item));
      await searchComics(item.id).then((response) => {
        AsyncStorage.setItem(
          '@selected_hero_comics',
          JSON.stringify(response.data.data.results),
        );
      });
      navigation.replace('Home');
    } catch (error) {
      console.error(error.message);
    }
  };

  return data.length > 0 ? (
    <FlatList
      keyExtractor={(item) => String(item.id)}
      data={data}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <HeroItem
          id={item.id}
          onPress={() => handlePress(item)}
          thumbnail={item.thumbnail.path}
          name={item.name}
        />
      )}
    />
  ) : (
    <HeroItem />
  );
};

export default ItemList;
