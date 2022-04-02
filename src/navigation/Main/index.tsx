import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens/Home';
import { Map } from '../../screens/Map';

export const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='MapScreen' component={Map} />
    </Stack.Navigator>
  )
}