import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextView } from 'react-native';


const Schedule = (props) => {

    return (
        <View style={styles.container }>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                
                </View>
                <View style={styles.container2 }>
                    <Text style={styles.itemText}>{props.text}</Text>
                    </View>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
            <View></View>
            </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10,
        
        //flexDirection: 'row',
        //alignItems: 'center',
        //flexWrap: 'wrap',
        //marginBottom: ,
        



    },
    container2: {
    //maxWidth: '100%'
        //alignItems: 'center'
        
    },

    item: {
        backgroundColor: '#A49665',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        height: 70,
        maxWidth: '100%',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        //alignContent: 'flex-start'
},
    itemText: {
        maxWidth: '70%',
       
    },

    editButton: {
        backgroundColor: "#005035",
        paddingTop: 0,
        paddingLeft:30,
        width: 80,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
       //alignSelf: 'flex-end'
       
        
    },
    deleteButton: {
        backgroundColor: "#005035",
        paddingTop: 0,
        paddingLeft: 20,
        width: 80,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
       // alignSelf: 'flex-end'
    },
    editText: {
        color: '#fff'
    },
    deleteText: {
        color: '#fff'
    },

});

export default Schedule;