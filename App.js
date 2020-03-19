// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

// const styles = StyleSheet.create({});

export default createAppContainer(navigator);
