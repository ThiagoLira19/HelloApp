import React, { useState } from 'react';
import { Button, TextInput, Text, View } from 'react-native';

const executarLogin = () => {
    alert('Quero Logar.')
}

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value={email} />
            <Text>Senha</Text>
            <TextInput value={senha} secureTextEntry />
            <Button title='Entrar' onPress={executarLogin} />
        </View>
    );
};

export default LoginScreen;