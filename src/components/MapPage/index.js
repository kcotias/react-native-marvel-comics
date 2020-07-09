import React from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const MapPage = ({ coordinates, children, handleSearch }) => {
  const handleRegion = (region) => {
    handleSearch(region);
  };

  return (
    <View
      style={{
        height: responsiveHeight(82),
        width: responsiveWidth(100),
      }}>
      <MapView
        style={{
          height: responsiveHeight(82),
          width: responsiveWidth(100),
        }}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChangeComplete={(region) => handleRegion(region)}>
        {children}
      </MapView>
    </View>
  );
};

export default MapPage;
