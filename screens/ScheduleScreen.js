import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Schedule from '../components/Schedule';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SheduleScreen({ navigation }) {
    return(
        <View style={styles.container}>

            {/* Schedule */ }
            <View style={styles.scheduleWrapper}>

                <ScrollView style={styles.items}>
                    {/* This is where the schedule blocks will go */}
                    <Text style={styles.scheduleTitle}>Monday</Text>
                    <Schedule text={'Monday Classes'} />
                    <Text style={styles.scheduleTitle}>Tuesday</Text>
                    <Schedule text={'Tuesday Classes'} />
                    <Text style={styles.scheduleTitle}>Wednesday</Text>
                    <Schedule text={'Wednesday Classes'} />
                    <Text style={styles.scheduleTitle}>Thursday</Text>
                    <Schedule text={'Thursday Classes'} />
                    <Text style={styles.scheduleTitle}>Friday</Text>
                    <Schedule text={'Friday Classes'} />
                </ScrollView>
                </View>
            </View>
       
    );
}

        
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        scheduleWrapper: {
            paddingTop: 40,
            paddingHorizontal: 20
        },
        sectionTitle: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        scheduleTitle: {
            fontSize: 15,
            fontWeight: 'bold',
            paddingBottom: 10,
        },
        items: {},

        
    });
