import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Deck = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.map}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            
            <View style={styles.deckPercentage}>
                <Text style={styles.percentageText}>100%</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    percentageText: {
        opacity: 1.0,
    },
    deckPercentage: {
        height: 40,
        width: 40,
        backgroundColor: 'rgba(51, 170, 51, .4)',
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center'
    },
    itemText: {
        maxWidth: '80%'
    },
    map: {
        width: 24,
        height: 24,
        backgroundColor: '#8FC3FF',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
});

export default Deck;