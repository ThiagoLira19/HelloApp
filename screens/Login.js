import React, { useState } from 'react';
import { Button, TextInput, Text, View, Alert } from 'react-native';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const executarLogin = () => {
        alert(`Olá, ${email}`);
    };

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail}/>
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry/>
            <Button title='Entrar' onPress={executarLogin} />
        </View>
    );
};

export default LoginScreen;