import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';

import RecipeList from '../../components/RecipeList';

export default function HomeScreen() {
    return (
        <View>
            <Text>Digite o nome da receita:</Text>
            <TextInput placeholder="Nome da receita" />
            <TouchableOpacity>
                <Text>Salvar Receita</Text>
            </TouchableOpacity>
            <RecipeList />
        </View>
    )
}