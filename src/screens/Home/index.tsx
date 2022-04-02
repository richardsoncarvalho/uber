import React from 'react'
import { Image, SafeAreaView, View } from 'react-native';
import tw from 'twrnc';

import { NavOptions } from '../../components/NavOptions';

export const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 100,
          }}
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}