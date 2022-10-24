{/*

  Main file for ProPark App
  Group 3: Nathan Hartzell, 

  some code used from: https://reactnavigation.org/docs/tab-based-navigation

*/}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckScreen from './screens/deckScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={DeckScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
