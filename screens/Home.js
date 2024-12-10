import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Olá mundo!</Text>
            <Button title='Entrar' onPress={() => navegacao.navigate('Login')} />
            <Button title='Cadastre-se' onPress={() => navegacao.navigate('Cadastro')} />
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;