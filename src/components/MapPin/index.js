import React from 'react';
import { View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import colors from '~/config/colors';

const MapPin = ({ stores }) => {
  return stores.length > 0 ? (
    stores.map((store) => (
      <Marker
        key={store.id}
        coordinate={{
          latitude: store.geometry.location.lat,
          longitude: store.geometry.location.lng,
        }}
        title={store.name}>
        <Icon name="store" color={colors.primary} size={40} />

        <Callout>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{store.name}</Text>
            <Text numberOfLines={3} style={styles.modalDesc}>
              {store.vicinity}
            </Text>
          </View>
        </Callout>
      </Marker>
    ))
  ) : (
    <View />
  );
};

export default MapPin;
