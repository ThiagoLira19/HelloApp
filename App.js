import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import InternaScreen from './screens/Interna';
import CadastroScreen from './screens/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Interna' component={InternaScreen} />
        <Stack.Screen name='Cadastro' component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}