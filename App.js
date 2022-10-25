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
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.navbar}
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'lightgray',
          tabBarActiveBackgroundColor: '#008377',
          tabBarInactiveBackgroundColor: '#005035',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3
              }
       }}
      >
        <Tab.Screen name="Decks" 
        component={DeckScreen}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="subway" color={'#fff'} size={25} />
          ),
        }}
        />
        <Tab.Screen name="Shedule"
         component={SheduleScreen}
         options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={'#fff'} size={25} />
          ),
        }}         
         />
        <Tab.Screen
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={'#fff'} size={25} />
          ),
        }}        
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
