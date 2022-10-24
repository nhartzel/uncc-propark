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
import SheduleScreen from './screens/ScheduleScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.navbar}
         tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'lightgray',
          activeBackgroundColor: '#008377',
          inactiveBackgroundColor: '#005035',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3
              }
       }}
      >
        <Tab.Screen name="Decks" component={DeckScreen} />
        <Tab.Screen name="Shedule" component={SheduleScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
