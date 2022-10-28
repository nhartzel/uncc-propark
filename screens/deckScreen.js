import Deck from '../components/Deck.js';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { deckData } from '../components/deckData.js';


export default function DeckScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.decksWrapper}>
              
                {/*<Text style={styles.sectionTitle}>Decks</Text>
                  need to figure out how to style the top bar better */}

                <ScrollView style={styles.entries}>
                {/* This is where the decks will go */}

                {deckData.map(deck => {

                  return (
                    <Deck text={deck.name} coordinates={deck.coordinates} key={deck.name + "box"}/>
                  )

                })}
            
                {/*<Deck text={"North Deck"}*/}
              
          </ScrollView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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