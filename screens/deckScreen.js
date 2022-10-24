import Deck from '../components/Deck.js';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DeckScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.decksWrapper}>
                <Text style={styles.sectionTitle}>Decks</Text>
                <View style={styles.entries}>
                {/* This is where the decks will go */}
            
                <Deck text={"North Deck"}/>
              
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        
        
      },
      decksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      entries: {
        marginTop: 30,
      },
}); 