import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
 
            <View style={styles.Container}>
    
                <View style={styles.scheduleWrapper}>
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
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ScheduleWrapper: {
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
