import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RecipeList = ({ }) => {
  return (
    <View>
      <Text style={styles.message}>Suas Receitas:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f06035'
  },
});

export default RecipeList;