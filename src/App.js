import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Welcome, Login, Map } from '~/screens';
import colors from './config/colors';
import OnboardingSlide from './components/OnboardingSlide';

const App = () => {
  const [showRealApp, setShowRealApp] = useState('false');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@show_real_app');
        if (value !== null && value !== 'false') {
          setShowRealApp('true');
        } else {
          setShowRealApp('false');
        }
      } catch (e) {}
    };
    getData();
  });
  const _renderItem = ({ item }) => {
    const ScreenToRender = item;
    return <ScreenToRender />;
  };

  const slides = [Welcome, Login];

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showRealApp === 'false' && (
          <Stack.Screen name="Onboarding">
            {() => (
              <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.primary }}>
                <OnboardingSlide renderItem={_renderItem} data={slides} />
              </SafeAreaView>
            )}
          </Stack.Screen>
        )}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
