import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" deLay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder='Digite seu e-mail...' placeholderTextColor="#fff" style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite sua senha...' secureTextEntry={true} placeholderTextColor="#fff" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
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
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: '#fff'
  },
  button: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#f06035',
    fontSize: 18,
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