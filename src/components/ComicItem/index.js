import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const ComicItem = ({ comic, isPopular }) => {
  return isPopular ? (
    <View key={comic.id} style={styles.popularContainer}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.popularImage}
          source={{
            uri: comic.thumbnail.path + '/portrait_medium' + '.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{comic.title}</Text>
        <Text style={{ marginBottom: 7 }}>${comic.prices[0].price}</Text>
        <Text style={styles.issue}>Issue: #{comic.issueNumber}</Text>
      </View>
    </View>
  ) : (
    <View key={comic.id} style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: comic.thumbnail.path + '/portrait_medium' + '.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {comic.title}
        </Text>
        <Text style={{ marginBottom: 7 }}>${comic.prices[0].price}</Text>
        <Text style={styles.issue}>Issue: #{comic.issueNumber}</Text>
      </View>
    </View>
  );
};
export default ComicItem;
