import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';

import RecipeList from '../../components/RecipeList';

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
            <TextInput style={styles.input} placeholderTextColor="#f06035" placeholder="Digite o nome da receita..." />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criar Receita</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.containerList}>
                <RecipeList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader: {
        marginTop: 50,
        flex: 1,
    },
    containerList: {
        flex: 2,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: '90%',
        marginBottom: 12,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f06035',
        borderColor: '#f06035'
    },
    button: {
        backgroundColor: '#f06035',
        borderRadius: 10,
        padding: 15,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});