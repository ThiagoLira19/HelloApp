import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const InternaScreen = () => {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text>Bem vindo! {route.params.email}</Text>
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