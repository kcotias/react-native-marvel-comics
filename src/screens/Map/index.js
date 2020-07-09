import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ActivityIndicator } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import { MapPage, MapPin } from '~/components';

import styles from './styles';

import { searchStores } from '~/services/mapsApi';
import colors from '~/config/colors';

const Map = () => {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setLoading(false);
      },
      (err) => {
        console.warn(err);
        Geolocation.requestAuthorization();
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 },
    );
  }, []);

  useEffect(() => {
    const getStores = async () => {
      if (!coordinates.latitude) {
        return;
      }

      try {
        searchStores(coordinates).then((response) => {
          setStores(response.data.results);
        });
      } catch (err) {
        Geolocation.requestAuthorization();

        console.warn(err);
      }
    };

    getStores();
  }, [coordinates]);

  const handleMove = (region) => {
    setCoordinates(region);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <Text style={styles.title}>Comics Stores Maps</Text>
          <MapPage coordinates={coordinates} handleSearch={handleMove}>
            <MapPin stores={stores} />
          </MapPage>
        </>
      )}
    </SafeAreaView>
  );
};

export default Map;
