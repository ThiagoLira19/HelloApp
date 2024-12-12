import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signInWithEmailAndPassword } from '../backend/FirebaseConfig';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigation();

    const executarLogin = async () => {
        try {

            await signInWithEmailAndPassword(auth, email, senha);
            alert("Login efetuado com sucesso!");
            navegacao.navigate('Interna', { email });

        } catch (error) {

            alert("Erro no login: " + error.message);

        }
    }

    return (
        <View style={styles.container}>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail}/>
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry/>
            <Button title='Entrar' onPress={executarLogin}/>
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

export default LoginScreen;