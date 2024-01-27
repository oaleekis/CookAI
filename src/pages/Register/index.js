import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" deLay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Seja bem vindo!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.messageForm}>Crie sua conta</Text>
                <TextInput placeholder='Nome' placeholderTextColor="#fff" style={styles.input} />

                <TextInput placeholder='Sobrenome' placeholderTextColor="#fff" style={styles.input} />

                <TextInput placeholder='E-mail' placeholderTextColor="#fff" style={styles.input} />

                <TextInput placeholder='Nova Senha' secureTextEntry={true} placeholderTextColor="#fff" style={styles.input} />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerHeader: {
        marginTop: '14%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#f06035'
    },
    messageForm: {
        fontSize: 28,
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#f06035',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 50,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    button: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#f06035',
        fontSize: 18,
        fontWeight: 'bold',
    },

})