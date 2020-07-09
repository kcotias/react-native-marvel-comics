import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '~/config/colors';
import { Header, ComicItem } from '~/components';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

const Home = () => {
  const [hero, setHero] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInitialData = async () => {
    try {
      const storageSelectedHero = await AsyncStorage.getItem('@selected_hero');
      const selectedHero = JSON.parse(storageSelectedHero);

      const storageSelectedComics = await AsyncStorage.getItem(
        '@selected_hero_comics',
      );
      const selectedHeroComics = JSON.parse(storageSelectedComics);

      setComics(selectedHeroComics);
      setHero(selectedHero);
    } catch (er) {
      console.warn(er);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const _renderItem = ({ item }) => <ComicItem comic={item} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <>
          <Header />
          <ScrollView>
            <View style={styles.bannerContainer}>
              <View>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: hero.thumbnail.path + '/standard_small' + '.jpg',
                  }}
                />
              </View>
              <View>
                <Text
                  style={styles.bannerTitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {`Team ${hero.name}`}
                </Text>
              </View>
            </View>
            <View style={styles.comicsArea}>
              <Text style={styles.sectionTitle}>Popular Editions</Text>
              <View style={{ marginTop: 5 }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.popularScroll}>
                  {comics?.slice(0, 3).map((item) => (
                    <ComicItem comic={item} isPopular />
                  ))}
                </ScrollView>
              </View>

              <View style={{ marginVertical: 15 }}>
                <Text style={styles.sectionTitle}>Trending</Text>
                <View>
                  <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingHorizontal: 18 }}
                    data={comics?.slice(3)}
                    renderItem={_renderItem}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};
export default Home;
