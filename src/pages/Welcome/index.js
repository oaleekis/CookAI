import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../assets/WelcomeImage.jpg')} />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Crie suas receitas com apenas um Clique!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#f06035',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  logo: {
    height: 400,
    width: 400,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#fff'
  },
  text: {
    color: '#fff'
  },
  button: {
    position: 'absolute'
    ,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#f06035',
    fontWeight: 'bold'
  }
})