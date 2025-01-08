import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const InternaScreen = () => {
    const route = useRoute();
    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Bem vindo! {route.params.email}</Text>
            <Button title='Nova Tarefa' onPress={() =>navegacao.navigate('CriarTarefa')} />
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

export default InternaScreen;