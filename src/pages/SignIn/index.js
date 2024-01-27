import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" deLay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <TextInput placeholder='E-mail' placeholderTextColor="#fff" style={styles.input} />

        <TextInput placeholder='Senha' secureTextEntry={true} placeholderTextColor="#fff" style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTextRegister}>Não possui uma conta? Cadastre-se</Text>
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
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f06035'
  },
  containerForm: {
    backgroundColor: '#f06035',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  buttonTextRegister: {
    color: '#fff'
  }

})