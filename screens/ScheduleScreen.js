import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SheduleScreen({ navigation }) {
    return (
        <View>
            <Text>Schedule Screen</Text>
        </View>
    );

    const Boxes = () => {
        return(
            <View style={styles.boxContainer}>
    
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Profile</Text>
                    </View>
                </View>
    
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text></Text>
                    </View>
                </View>
    
            </View>
        )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1
    
        },
        boxContainer: {
            width: '100%',
            height: '100%',
            padding: 5,
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        box: {
            width: '90%',
            height: '15%',
            padding: 5
        },
        inner: {
            flex: 1,
            backgroundColor: 'c8c8c8',
            alignItems: 'center',
            justifyContent: 'center'
        }
    
    });
};