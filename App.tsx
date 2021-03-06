import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from './src/navigation/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

