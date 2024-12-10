import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail}/>
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry/>
            <Button title='Cadastrar' onPress={() => navegacao.navigate('Login')} />
            <Button title='Voltar' onPress={() => navegacao.navigate('Home')} />
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

export default CadastroScreen;